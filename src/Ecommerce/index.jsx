import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import MenBanner from "./Components/Assets/banner_mens.png";
import WomenBanner from "./Components/Assets/banner_women.png";
import KidBanner from "./Components/Assets/banner_kids.png";

function Ecommerce() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={MenBanner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={WomenBanner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={KidBanner} category="kid" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Ecommerce;
