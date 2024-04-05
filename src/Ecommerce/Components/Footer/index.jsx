import React from "react";
import Style from "./style.module.scss";
import FooterLogo from "../Assets/logo_big.png";
import Instagram from "../Assets/instagram_icon.png";
import Pintester from "../Assets/pintester_icon.png";
import Whatsapp from "../Assets/whatsapp_icon.png";
function Footer() {
  return (
    <div className={Style.Footer}>
      <div className={Style.FooterLogo}>
        <img src={FooterLogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={Style.FooterLink}>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={Style.FooterSocialIcon}>
        <div className={Style.FooterIconContainer}>
          <img src={Instagram} alt="" />
        </div>
        <div className={Style.FooterIconContainer}>
          <img src={Pintester} alt="" />
        </div>
        <div className={Style.FooterIconContainer}>
          <img src={Whatsapp} alt="" />
        </div>
      </div>
      <div className={Style.FooterCopyright}>
        <hr />
        <p>Copyright @ 2024 - Pháp Nguyễn</p>
      </div>
    </div>
  );
}

export default Footer;
