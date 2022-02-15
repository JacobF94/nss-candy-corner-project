import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { fireEmployee, getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const history = useHistory()

    const employeeFetch = () => {
        getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
    }

    useEffect(
        () => employeeFetch(), [])

    const terminateEmployee = (id) => {
        fireEmployee()
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