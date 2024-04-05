import React from "react";
import ArrowIcon from "../Assets/breadcrum_arrow.png";
import Style from "./style.module.scss";
function Breadcrums(props) {
  const { product } = props;
  return (
    <div className={Style.Breadcrums}>
      Home <img src={ArrowIcon} alt="" /> Shop
      <img src={ArrowIcon} alt="" /> {product.category}
      <img src={ArrowIcon} alt="" />
      {product.name}{" "}
    </div>
  );
}

export default Breadcrums;
