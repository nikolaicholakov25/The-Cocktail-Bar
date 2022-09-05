import { APIKey } from "../config/googleMapsConfig"

let url = `maps/api/directions/json?origin=Toronto&destination=Montreal&key=${APIKey}`

export const getDestination = () => {

    // return fetch(url)
    // .then(res => res.json())
    // .catch(error => console.log(error.message))
}