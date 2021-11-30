import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
    return (
        <NavLink to={`/cart`}><span className="material-icons">shopping_cart</span></NavLink>
    )
}

export default ShoppingCart;