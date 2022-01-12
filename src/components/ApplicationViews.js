import React from "react"
import { Route } from "react-router-dom"
import { Locations } from "./locations/locations"
import { Products } from "./products/products"
import { EmployeeList } from "./employees/employees"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Customers } from "./customers/customers"

export const ApplicationViews = () => {
    return(
        <>
            <Route path="/locations">
                <Locations />
            </Route>

            <Route path="/products">
                <Products />
            </Route>

            <Route path="/employee">
                <EmployeeList />
            </Route>

            <Route exact path="/employee/create">
                <EmployeeForm />
            </Route>

            <Route path="/customers">
                <Customers />
            </Route>
        </>
    )
}