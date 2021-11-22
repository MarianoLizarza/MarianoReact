
import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedirdatos'
import { ItemList } from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />

            }
        </>
    )
}

export default ItemListContainer