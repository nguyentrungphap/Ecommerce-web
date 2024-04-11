import React, { useContext } from "react";
import Style from "./style.module.scss";
import { ShopContext } from "../../Context/ShopContextProvider.jsx";
import DropDownIcon from "../../Components/Assets/dropdown_icon.png";
import Item from "../../Components/Item/index.jsx";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={Style.ShopCategory}>
      <img className={Style.CategoryBanner} src={props.banner} alt="" />
      <div className={Style.CategoryIndexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className={Style.CategorySort}>
          Sort by <img src={DropDownIcon} alt="" />
        </div>
      </div>

      <div className={Style.CategoryProduct}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className={Style.CategoryLoadmore}>Explore More</div>
    </div>
  );
}

export default ShopCategory;
