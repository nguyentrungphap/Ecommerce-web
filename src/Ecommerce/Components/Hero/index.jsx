import React from "react";
import Style from "./style.module.scss";
import HandIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png";
import HeroImage from "../Assets/hero_image.png";
function Hero() {
  return (
    <div className={Style.Hero}>
      <div className={Style.HeroLeft}>
        <h2>New Arrivals only</h2>
        <div>
          <div className="HandIcon">
            <p>new</p>
            <img src={Style.HeroHandIcon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={Style.HeroLatestBtn}>
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className={Style.HeroRight}>
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
