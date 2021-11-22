import React from 'react'

export const Item = ({ prod }) => {
    return (
        <article key={prod.id} className="card m-3" style={{ width: "18rem" }}>
            <img src={prod.img} alt={prod.name} />
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">Precio: {prod.price}</p>
                <p className="card-text">{prod.desc}</p>
                <button className="btn btn-primary">Agregar</button>
            </div>
        </article>
    )
}