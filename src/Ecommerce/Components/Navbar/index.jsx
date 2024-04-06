"use client";
import React, { useContext, useState } from "react";
import Style from "./style.module.scss";
import Logo from "../Assets/logo.png";
import CartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className={Style.Navbar}>
      <div className={Style.NavLogo}>
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={Style.NavMenu}>
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu === "shop" ? <hr /> : ""}
        </Link>
        <Link
          to="/mens"
          onClick={() => {
            setMenu("men");
          }}
        >
          Men {menu === "men" ? <hr /> : ""}
        </Link>
        <Link
          to="womens"
          onClick={() => {
            setMenu("women");
          }}
        >
          Women {menu === "women" ? <hr /> : ""}
        </Link>
        <Link
          to="kids"
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids {menu === "kids" ? <hr /> : ""}
        </Link>
      </ul>
      <div className={Style.NavLogin}>
        <button>
          <Link to="login">Login</Link>
        </button>
        <Link to="cart">
          <img src={CartIcon} alt="" />
        </Link>
        <div className={Style.CartCount}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
