import React, { useContext } from "react";
// import Style from "./style.module.scss";
import { ShopContext } from "../../Context/ShopContextProvider.jsx";
import { useParams } from "react-router-dom";
import Breadcrums from "../../Components/Breadcrums";
import ProductDetails from "../../Components/ProductDetails/index";
import DescriptionBox from "../../Components/DescriptionBox/index.jsx";
import RelatedProducts from "../../Components/RelatedProducts/index.jsx";
function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="Product">
      <Breadcrums product={product} />
      <ProductDetails product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
