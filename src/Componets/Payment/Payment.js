import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/StateContext";
import CartItems from "../Checkout/CartItems";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import "./payment.css";
import CurrencyFormat from "react-currency-format";
import { totalPrice } from "../../Context/Reducer";
import { useEffect } from "react";
import axios from "../../Context/axios.js";
import { db } from "../../firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const Elements = useElements();
  const history = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setclientSecret] = useState(true);

  useEffect(() => {
    //generate special stripe secret which allow us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits
        url: `/payment/create?total=${totalPrice(cart) * 100}`,
      });
      setclientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    //stripe code here
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: Elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymnetIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "empty_basket",
        });
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    //listen for changes in card element
    // display any error as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">({cart?.length} items)</Link>}</h1>
        {/* Payment Section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Dilivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 example lane</p>
            <p>Los Agneles, CA</p>
          </div>
        </div>
        {/* Payment items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CartItems
                id={item.id}
                title={item.title}
                rating={item.rating}
                image={item.image}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </div>
        </div>
        {/* Payment payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Code */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <div>
                      <h3>Order Total: {value}</h3>
                    </div>
                  )}
                  decimalScale={2}
                  value={totalPrice(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error message */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
