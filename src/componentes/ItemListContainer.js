import ItemList from "./ItemList"
import productos from './productos.json';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const ItemListContainer = ({ }) => {

    const [item, setItems] = useState([])

    // Filtro los productos

    const { categoryId } = useParams();

    useEffect(() => {

        let promesa

        if (categoryId) {

            promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos.filter(productos => productos.category === categoryId))
                }, 2000)
            })

        } else {

            promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos)
                }, 2000)
            })
        }

        promesa.then(resolve => {

            setItems(resolve)
        })
    }, [categoryId])


    return (

        <>

            <div>
                <h2 className="sales">Productos alimentos</h2>
                <main className="productCatalog"><ItemList items={item} /></main>
            </div>

            <h4 className="coderHouse">Clase 9 - Desafío: Sincronizar counter</h4>

        </>
    )
}


export default ItemListContainer;