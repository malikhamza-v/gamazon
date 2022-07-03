import React, { useState } from "react";
import "./product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../Context/StateContext";

function Product({ id, title, price, rating, image, qty }) {
  const [{ cart }, dispatch] = useStateValue();
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const addToCart = () => {
    dispatch({
      type: "add_to_cart",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
        qty: qty,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p id="productTitle">{truncate(title, 30)}</p>
        <span style={{ fontSize: "1.2rem" }}>$</span>
        <strong style={{ fontSize: "1.2rem" }}>{price}</strong>
        <br />
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} id="productStar" />
          ))}
      </div>
      <img src={image} alt={title} />
      <button className="button" id="btn" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
