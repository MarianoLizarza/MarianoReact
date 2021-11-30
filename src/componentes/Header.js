import { NavLink } from "react-router-dom";
import ShoppingCart from './CartWidget.js'


const Header = () => {
    return (
        <header className="principalHeader">

            <nav className="menu">
                <NavLink to="/" exact>Inicio</NavLink>
                <NavLink to="/categoria/productos">Productos</NavLink>
                <NavLink to="/categoria/sagas">Nosotros</NavLink>
                <NavLink to="/shopping-cart" exact><ShoppingCart /></NavLink>
            </nav>

        </header>
    )
}

export default Header;