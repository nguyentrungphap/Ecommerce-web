import React from "react";
import Style from "./style.module.scss";
import DataProduct from "../Assets/data";
import Item from "../Item";
function Popular() {
  return (
    <div className={Style.Popular}>
      <h1>Popular in women</h1>
      <hr />
      <div className={Style.PopularItem}>
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

export default Popular;
