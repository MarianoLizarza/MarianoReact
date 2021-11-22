import CartWidget from "./CartWidget"


const Nav = () => {
    return (
        <nav>
            <a href="#">Home</a>
            <a href="#">Productos</a>
            <a href="#">Carrito</a>
            <a href="#">Contacto</a>
            <CartWidget />
        </nav>


    )
}

export default Nav