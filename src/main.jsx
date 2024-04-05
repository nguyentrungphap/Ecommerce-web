import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Ecommerce from "./Ecommerce/index.jsx";
import ShopContextProvider from "./Ecommerce/Context/ShopContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <Ecommerce />
  </ShopContextProvider>
);
