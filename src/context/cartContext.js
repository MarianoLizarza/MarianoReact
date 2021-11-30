import { createContext, useState } from "react";

export const storeContext = createContext();

const { Provider } = storeContext;

const ShoppingContext = ({ children }) => {

    const [products, setProducts] = useState([])

    console.log(products);


    const addItem = (eat, dataCounter) => {
        const proof = isInCart(eat)
        if (proof >= 0) {
            setProducts([...products, { ...eat, dataCounter }])
        }
    }

    const isInCart = (eat) => {
        const inCartList = products.filter(item => item.id === eat.id)
        return inCartList
    }

    const removeItem = (id) => {
        setProducts(products.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setProducts([])
    }

    const valueContext = { products, addItem, removeItem, clearCart }

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}

export default ShoppingContext;