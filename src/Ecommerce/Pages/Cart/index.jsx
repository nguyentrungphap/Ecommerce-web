import React from "react";
import Style from "./style.module.scss";
import CartItems from "./../../Components/CartItems/index";

function Cart() {
  return (
    <div className={Style.Cart}>
      <CartItems />
    </div>
  );
}

export default Cart;
