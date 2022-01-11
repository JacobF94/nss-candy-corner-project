import React from "react";
import { Locations } from "./locations/locations"
import { Products } from "./products/products"

export const CandyCorner = () => {
    return (
        <>
            <h1>Candy Corner Sweets Store!</h1>

            <h2>Our Locations</h2>
            <Locations />

            <h2>Our Products</h2>
            <Products />
        </>
    )
}