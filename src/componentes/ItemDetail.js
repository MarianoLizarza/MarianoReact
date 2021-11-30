import ItemCount from "./ItemCount";
import { useContext } from "react";
import { storeContext } from "../context/cartContext";

const ItemDetail = ({ eat }) => {

    const { addItem, removeItem } = useContext(storeContext);

    const getDataCounter = (dataCounter) => {
        addItem(eat, dataCounter);
    }

    return (
        <>
            <div className="productCatalogItems">
                <section className="asaid">
                    <img src={eat.pictureurl} alt="Hamburguesa" width="180" />
                    <h3>{eat.title}</h3>
                    <h5>{eat.price}</h5>
                    <p>{eat.description}</p>
                    <ItemCount stock={7} initial={0} onAdd={getDataCounter} />
                    <button onClick={() => removeItem(eat.id)} className="btnRemove">X</button>
                </section>
            </div>
        </>
    )
}

export default ItemDetail;