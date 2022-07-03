import React from "react";
import { useStateValue } from "../../Context/StateContext";
import "./cartitems.css";
import StarIcon from "@mui/icons-material/Star";

function CartItems({ id, title, rating, image, price, qty, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();
  console.log(qty);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const removeFromCart = () => {
    dispatch({
      type: "remove_from_cart",
      id: id,
    });
  };

  const updateSub = () =>
    qty == 0
      ? null
      : dispatch({
          type: "update_from_cart",
          id: id,
          qty: qty - 1,
        });

  const updateAdd = () => {
    dispatch({
      type: "update_from_cart",
      id: id,
      qty: qty + 1,
    });
  };
  const customEnterAnimation = {
    from: { transform: "scale(0.5, 1)" },
    to: { transform: "scale(1, 1)" },
  };
  return (
    <div className="cartitems">
      <img src={image} alt="title" className="cartitems__image" />
      <div className="cartitem__info">
        <h3>{truncate(title, 30)}</h3>
        <div style={{ display: "flex" }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>
                <StarIcon key={i} />
              </span>
            ))}
        </div>
        <h3>${price}</h3>
        {!hideButton && (
          <div className="cartitem__btns">
            <button
              className="button cartitem__button"
              onClick={removeFromCart}
            >
              Remove from cart
            </button>
            <div>
              <button className="cartitem__btn" onClick={updateSub}>
                -
              </button>
              <input type="text" className="cartitem__input" value={qty} />
              <button className="cartitem__btn" onClick={updateAdd}>
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItems;
