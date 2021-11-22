import { useState } from 'react'

const Counter = ({ stock }) => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (stock > contador) {
            setContador(contador + 1)
        } else {
            alert("no hay mas stock")
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            alert("No se puede disminuir mas")
        }
    }

    return (
        <div>
            <p>El contador va : {contador} </p>
            <button onClick={sumar} className="material-icons">add</button>
            <button onClick={restar} className="material-icons">remove</button>
        </div>
    )
}

export default Counter