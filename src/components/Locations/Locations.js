import { useEffect, useState } from "react"
import "./Locations.css"
export const LocationList = () => {
    const [ locations, setLocations] = useState([])
    
    

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationsArray) => {
                setLocations(locationsArray)}
            )
        },
        []
    ) 
    return <>
     <h2>List of Locations</h2>
     <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className="locationsList" key={`location--${location.id}`}>
                        <li>{location.address}/
                        {location.footage}
                        </li>
                    </section>
                }
            )
        }
    </article>
</>}
   

// The following code above is how to get locations list to display
