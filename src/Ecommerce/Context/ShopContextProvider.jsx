import react, { createContext } from "react";
import AllProduct from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const contextValue = { AllProduct };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
