import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

// const locationsFetch = () => {
//     const locationArray = []

//     fetch("http://localhost:8088/locations")
//         .then(response => response.json())
//         .then((locations) => locationArray.push(locations))

//     return locationArray
// }

// const locationsList = locationsFetch()

export const EmployeeForm = () => {
    const history = useHistory()

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 1,
        isManager: false,
        isFullTime: false,
        hourlyPay: 1
    });

    const [locations, setLocations] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )
        console.log(locations)
    const saveHire = (event) => {
        event.preventDefault()
        
        const newHire = {
            name: employee.name,
            locationId: employee.locationId,
            isManager: employee.isManager,
            isFullTime: employee.isFullTime,
            hourlyPay: employee.hourlyPay
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHire)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
            .then(() => {
                history.push("/employee")
            })
    }

    return (
        <>
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name</label>
                    <input
                        required autoFocus
                        type="text" id="hireName"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="locationBtns">
                    {locations.map((location) => {
                            return <label><input type="radio" name="city" value={location.id} onChange={
                                (event) => {
                                    const copy = {...employee}
                                    copy.locationId = event.target.value
                                    setEmployee(copy)
                                }
                            }/>{location.city}</label>
                            })}
                </div>
            </fieldset>

            <fieldset>
                <div className="isManager">
                    <label>Manager?
                        <input type="checkbox" name="manager" onChange={(event) => {
                            const copy = {...employee}
                            copy.isManager = event.target.checked
                            setEmployee(copy)}}>

                        </input>
                    </label>
                </div>
            </fieldset>

            <fieldset>
                <div className="isFullTime">
                    <label>Full Time?
                        <input type="checkbox" name="fullTime" onChange={(event) => {
                            const copy = {...employee}
                            copy.isFullTime = event.target.checked
                            setEmployee(copy)}}>

                        </input>
                    </label>
                </div>
            </fieldset>

            <fieldset>
                <div className="hourlyWage">
                    <label>Desired Starting Wage
                        <input type="number" name="wage" onChange={(event) => {
                            const copy = {...employee}
                            copy.hourlyPay = event.target.value
                            setEmployee(copy)
                        }}>
                        </input>
                    </label>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={saveHire}>
                Finish Hiring
            </button>
        </form>
        </>
    )
}