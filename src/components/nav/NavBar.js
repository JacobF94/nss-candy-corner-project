import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employee">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Our Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/myOrders">My Orders</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => {
                        localStorage.removeItem("candy_customer")
                    }
                }>Log Out</Link>
            </li>
        </ul>
    )
}