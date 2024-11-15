import { createContext } from "react";
import PropTypes from "prop-types"; 
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    const currency = '$';
    const delivery_fee = 10;

    const value={
        products,currency,delivery_fee
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

// Validation des props
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validation de la prop 
};

export default ShopContextProvider;