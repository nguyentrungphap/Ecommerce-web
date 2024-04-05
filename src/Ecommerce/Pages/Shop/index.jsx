import React from "react";
import Hero from "../../Components/Hero";
import Popular from "./../../Components/Popular/index";
import Offers from "../../Components/Offers";
import NewCollections from "../../Components/NewCollections";
import NewsLetter from "../../Components/NewsLetter";
import Style from "./style.module.scss";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
