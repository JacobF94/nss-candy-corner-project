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

    const buyCandy = (event) => {
        const specificItem = products.find((item) => item.id === parseInt(event.target.id))

        const newPurchase = {
            customerId: parseInt(localStorage.getItem("candy_customer")),
            employeeId: 1,
            locationId: 1,
            productId: specificItem.id,
            totalPrice: specificItem.price
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }
        return fetch("http://localhost:8088/purchases", fetchOptions)
        .then(() => {
            window.alert("thank you for your purchase!")
        })
    }

    return (
        <>
            {products.map(
                (product) => {
                    return <div key={`product--${product.id}`}>
                        <p>{product.name} - {product.price} dollars. It is in the {product.productType.type} category.</p>
                        <button id={product.id} onClick={buyCandy}>
                            Purchase  
                        </button>
                    </div>
                }
            )}
        </>
    )
}