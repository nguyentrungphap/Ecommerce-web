import React from "react";
import Style from "./style.module.scss";
import StarIcon from "../Assets/star_icon.png";
import StartDullIcon from "../Assets/star_dull_icon.png";

function ProductDetails(props) {
  const { product } = props;
  return (
    <div className={Style.ProductDetails}>
      <div className={Style.Left}>
        <div className={Style.ImgList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={Style.Img}>
          <img className={Style.MainImg} src={product.image} alt="" />
        </div>
      </div>
      <div className={Style.Right}>
        <h1>{product.name}</h1>
        <div className={Style.Stars}>
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StartDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className={Style.Prices}>
          <div className={Style.PricesOld}>{product.old_price}</div>
          <div className={Style.PricesNew}>{product.new_price}</div>
        </div>
        <div className={Style.Description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolor
          perspiciatis obcaecati, et ullam deserunt atque dolore fuga dolorum
          eveniet exercitationem minima porro consequatur aspernatur nobis! Vel
          voluptatem ut incidunt.
        </div>
        <div className={Style.Size}>
          <h1>Select Size</h1>
          <div className={Style.Select}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className={Style.Category}>
          <span>Category:</span>Women , T-Shirt, Crop Top
        </p>
        <p className={Style.Category}>
          <span>Tags:</span>Modern , Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
