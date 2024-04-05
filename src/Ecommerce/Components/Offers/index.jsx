import React from "react";
import Style from "./style.module.scss";
import ExclusiveImage from "../Assets/exclusive_image.png";
function Offers() {
  return (
    <div className={Style.Offers}>
      <div className={Style.OffersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={Style.OffersRight}>
        <img src={ExclusiveImage} alt="" />
      </div>
    </div>
  );
}

export default Offers;
