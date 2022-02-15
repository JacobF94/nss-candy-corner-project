import React, { useEffect, useState } from "react"
import { getLocations } from "../ApiManager"

export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            getLocations()
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <p key={`location--${location.id}`}>{location.city}</p>
                    }
                )
            }
        </>
    )
}