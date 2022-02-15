import React, { useState, useEffect } from "react";
import { purchaseFetch } from "../ApiManager";

export const MyOrders = () => {
    const [userOrders, setUserOrders] = useState([])
    const [purchaseDetails, setPurchaseDetails] = useState([])

    useEffect(
        () => {
            purchaseFetch(parseInt(localStorage.getItem("candy_customer")))
                .then((data) => {
                    setUserOrders(data)
        })
    }, []
    )
    // useEffect(() => {

    // }, [userOrders])

    return (
        <>
        <h2>Your Past Orders</h2>
            {
                userOrders.map(
                    (item) => {
                        return <p key={`item--${item.id}`}>{item.id}</p>
                    }
                )
            }
        </>
    )
}