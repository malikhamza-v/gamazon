import React from "react";
import "./banner.css";
import bimage from "../../Assets/bimage.jpg";

function Banner({ textsmall }) {
  return (
    <div className="banner" id="banner">
      <h3
        className="banner__text"
        id="bannerText"
        style={{ fontSize: textsmall }}
      >
        20% off on every product.
      </h3>
      <img src={bimage} alt="gamazon" className="banner__image" />
    </div>
  );
}

export default Banner;
