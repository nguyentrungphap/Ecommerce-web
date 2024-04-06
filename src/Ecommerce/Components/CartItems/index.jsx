import React, { useContext } from "react";
import Style from "./style.module.scss";
import { ShopContext } from "../../Context/ShopContextProvider";
import RemoveIcon from "../Assets/cart_cross_icon.png";
function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className={Style.CartItems}>
      <div className={Style.FormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className={`${Style.Format} ${Style.FormatMain}`}>
                <img src={e.image} className={Style.CartionIcon} alt="" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className={Style.Quantity}>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  className={Style.RemoveIcon}
                  src={RemoveIcon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={Style.CartTotal}>
        <div className={Style.Total}>
          <h1>cart Totals</h1>
          <div>
            <div className={Style.TotalItem}>
              <p>Subtatal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={Style.TotalItem}>
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <div className={Style.TotalItem}>
              <h3>Total</h3>
              <h3>{getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className={Style.Promocode}>
          <p>if you have a promo coe, enter it here</p>
          <div className={Style.Promobox}>
            <input type="text" placeholder="Promo box" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
