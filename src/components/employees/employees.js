import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const history = useHistory()

    const employeeFetch = () => {
        fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
    }

    useEffect(
        () => {employeeFetch()}, [])

    const terminateEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
            .then(
                employeeFetch()
            )
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} works in {employee.location.city}
                        <button onClick={() => {terminateEmployee(employee.id)}}>
                        Fire Employee!!!  
                        </button>
                        </p>
                    }
                )
            }
        </>
    )
}