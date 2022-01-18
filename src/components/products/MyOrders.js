import React, { useState, useEffect } from "react";

export const MyOrders = () => {
    const [fitleredProducts, setFitleredProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers?_embed=purchases")
                .then(response => response.json())
                .then((data) => {
                    let tempArray = [];
                    let finalArray = [];
                    data.map((item) => {if(item.id === parseInt(localStorage.getItem("candy_customer"))) {
                        tempArray.push(item)}
                    });
                    tempArray.map((m) => {m.purchases.forEach(p => {
                        finalArray.push(p)
                    });})
                    setFitleredProducts(finalArray)})
        },
        []
    )

    return (
        <>
        <h2>Your Past Orders</h2>
            {
                fitleredProducts.map(
                    (item) => {
                        return <p key={`item--${item.id}`}>{item.productId} total cost {item.totalPrice} at the store in {item.locationId}</p>
                    }
                )
            }
        </>
    )
}