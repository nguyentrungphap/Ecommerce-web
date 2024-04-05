import React from "react";
import Style from "./style.module.scss";
import NewCollection from "../Assets/new_collections";
import Item from "../Item";
function NewCollections(props) {
  return (
    <div className={Style.NewCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={Style.Collections}>
        {NewCollection.map((item, i) => {
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

export default NewCollections;
