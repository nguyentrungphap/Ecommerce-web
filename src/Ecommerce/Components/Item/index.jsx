import React from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <div className={Style.Item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className={Style.ItemPrice}>
        <div className={Style.ItemPriceNew}>{props.new_price}</div>
        <div className={Style.ItemPriceOld}>{props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
