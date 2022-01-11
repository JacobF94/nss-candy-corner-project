import React, { useState, useEffect } from "react";

export const Products = () => {
    const [products, setProducts] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
                })
        },
        []
    )

    return (
        <>
            {products.map(
                (product) => {
                    return <div key={`product--${product.id}`}>
                        <p>{product.name} - {product.price} dollars. It is in the {product.productType.type} category.</p>
                    </div>
                }
            )}
        </>
    )
}