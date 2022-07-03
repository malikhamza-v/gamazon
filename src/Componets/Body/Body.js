import React from "react";
import "./body.css";
import Product from "./Product";
function Body() {
  return (
    <div className="body">
      <div className="body__row ">
        <div className="hideOnMobile ">
          <Product
            id="1"
            title="ASUS VG278QR 27” Gaming Monitor 165Hz Full HD (1920 x 1080) 0.5ms G-SYNC Eye Care DisplayPort HDMI DVI"
            price={1100}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_SX522_.jpg"
            qty={1}
          />
        </div>
        <div id="hideOnMobile" className="hideOnMobile">
          <Product
            id="2"
            title="DIZA100 Gaming headset for PS4, PS5, Surround Stereo 3.5mm Gaming Headphones with Mic and RGB Rainbow Light for Xbox One PC Laptop Mac"
            price={205}
            rating={4}
            image="https://m.media-amazon.com/images/I/71dSJNFa9CL._AC_SL400_.jpg"
            qty={1}
          />
        </div>
      </div>
      <div className="body__row" id="bodyRow">
        <Product
          id="3"
          title="Canon Pixma MG3620 Wireless All-In-One Color Inkjet Printer with Mobile and Tablet Printing, Black, 2.6"
          price={1100}
          rating={3}
          image="https://m.media-amazon.com/images/I/81qAy8skVEL._AC_SX679_.jpg"
          qty={1}
        />
        <Product
          id="4"
          title="Level 20 RGB Gaming Mouse"
          price={95}
          rating={5}
          image="https://thermaltake.azureedge.net/pub/media/catalog/product/cache/0b6cd258d732892ac0f7248ef9ed4204/l/2/l20m01.jpg"
          qty={1}
        />
        <Product
          id="5"
          title="Mechanical Gaming Keyboard, Baytion 61 Keys Ultral Compact Wired Keyboard with Blue Switches."
          price={130}
          rating={4}
          image="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SX679_.jpg"
          qty={1}
        />
      </div>
      <div className="body__row" id="bodyRow">
        <Product
          id="6"
          title="Havit SK210 Mini USB Speaker | HV-SK210"
          price={110}
          rating={5}
          image="https://i0.wp.com/globalcomputers.pk/wp-content/uploads/2021/11/57-czone.com_.pk-1540-12321-181021102446.jpg?fit=396%2C396&ssl=1"
          qty={1}
        />

        <Product
          id="7"
          title="RIG MG-X PRO Wireless Mobile Controller for Android Smartphones"
          price={95}
          rating={3}
          image="https://m.media-amazon.com/images/I/61hF5V9C0LL._SX522_.jpg"
          qty={1}
        />
        <Product
          id="8"
          title="Apple AirPods Pro with MagSafe charging case (2021)"
          price={150}
          rating={5}
          image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg"
          qty={1}
        />
      </div>
    </div>
  );
}

export default Body;
