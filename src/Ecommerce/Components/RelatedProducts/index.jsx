import React from "react";
import Style from "./style.module.scss";
import DataProduct from "../Assets/data";
import Item from "./../Item/index";
function RelatedProducts() {
  return (
    <div className={Style.RelatedProducts}>
      <h1>Telated Products</h1>
      <hr />
      <div className={Style.RelatedProductsItem}>
        {DataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
