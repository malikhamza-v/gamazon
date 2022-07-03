import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Context/StateContext";
import { totalPrice } from "../../Context/Reducer.js";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  const history = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={totalPrice(cart)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <div>
            <span>
              Subtotal ({`${cart.length} items`}):
              <strong>{value}</strong>
            </span>
          </div>
        )}
      />
      <button className="button" onClick={() => history("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
