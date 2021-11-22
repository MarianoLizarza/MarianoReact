import NavBar from "./NavBar"

const Header = ({ nombre, apellido }) => {

    return (
        <header id="main-header" className="clase1 clase2" >
            <h1>E-Commerce</h1>
            <p>Bienvenidos {nombre} {apellido}</p>
            <NavBar />
        </header>
    )
}

export default Header