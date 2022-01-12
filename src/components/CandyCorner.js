import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";

export const CandyCorner = () => {
    return (
        <>
            <NavBar />
            <h1>Candy Corner Sweets Store!</h1>
            <ApplicationViews />
        </>
    )
}