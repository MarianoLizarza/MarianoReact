import { useState } from "react";
import { NavLink } from "react-router-dom";

// Creamos el contador de items

const ItemCount = ({ stock, initial, onAdd }) => {

    const [state, setState] = useState(initial);

    const showCounterAdd = () => {
        if (state < stock) {
            setState(state + 1);
        } else {
            setState(stock)
        }
    }

    const showCounterLess = () => {
        if (state > 0) {
            setState(state - 1);
        } else {
            setState(state)
        }
    }


    return (
        <>
            <div className="keypad">
                <button onClick={showCounterLess} className="buttonAdd">-</button>
                <p className="buttonAddState">{state}</p>
                <button onClick={showCounterAdd} className="buttonAdd">+</button>
            </div>
            <div>
                <NavLink to={`/Cart`}>
                    <button onClick={() => onAdd(state)} className="buttonCart">Agregar al carrito</button>
                </NavLink>
            </div>
        </>
    )

}

export default ItemCount;