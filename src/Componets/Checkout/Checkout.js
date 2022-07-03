import React from "react";
import Banner from "../Banner/Banner.js";
import "./checkout.css";
import Subtotal from "./Subtotal.js";
import CartItems from "./CartItems.js";
import { useStateValue } from "../../Context/StateContext.js";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__banner">
        <Banner textsmall="1.5rem" />
      </div>
      <div className="checkout__body">
        <div className="checkout__L">
          <h2>Your Shopping Basket</h2>

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
        <div className="checkout__R">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
