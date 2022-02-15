import React, { useEffect, useState } from "react"
import { getCustomers } from "../ApiManager"
export const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            getCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>
                    }
                )
            }
        </>
    )
}