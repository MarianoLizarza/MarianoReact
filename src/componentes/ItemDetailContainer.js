import ItemDetail from "./ItemDetail";
import productos from "./productos.json";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [saga, setSaga] = useState([])
    const { id } = useParams();

    const results = productos.filter(productos => productos.id == id);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(results)
            }, 2000);
        });
    }


    useEffect(() => {
        getItem().then(setSaga)
    }, []);



    return (
        <section className="asaid">
            <h2>Hamburguesa</h2>
            <div className="productCatalog">
                {saga.map(saga =>
                    <ItemDetail
                        key={saga.id}
                        eat={saga}
                    />)}
            </div>
        </section>
    )
}

export default ItemDetailContainer;