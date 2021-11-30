import { NavLink } from "react-router-dom";


const Item = ({ productos }) => {


    return (
        <>
            <div className="productCatalogItems">
                <header>
                    <img src={productos.pictureurl} alt="hamburguesa" width="128" height="128" />
                </header>
                <h3>{productos.title}</h3>
                <h5>{productos.price}</h5>
                <NavLink to={`/item/${productos.id}`} className="itemMore">Ver más...</NavLink>
            </div>
        </>
    )

}

export default Item;