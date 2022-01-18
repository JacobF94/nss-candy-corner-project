import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const CandyCorner = () => (
    <>
    <Route
      render={() => {
        if (localStorage.getItem("candy_customer")) {
          return (
            <>
                <NavBar />
                <h1>Candy Corner Sweets Store!</h1>
                <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    <Route path="/login">
      <Login />
    </Route>
    
    <Route path="/register">
      <Register />
    </Route>
    </>
)