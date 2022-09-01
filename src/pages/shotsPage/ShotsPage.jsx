import { useEffect } from "react"
import { useState } from "react"
import { getCocktails, getShots } from "../../services/cocktailServices"
import { HomeGalleryCard } from "../homePage/HomeGalleryCard"

export const ShotsPage = () => {

    let [drinks,setCocktails] = useState([])

    useEffect(() => {
        getShots()
        .then(res => setCocktails(res.drinks.slice(0,30)))
    },[])

    return(

        <div className="homeWrapper">
            <div className="cocktailsGalleryWrapper">
            { drinks ?
            drinks.map(drink => <HomeGalleryCard key={drink.idDrink} drink={drink} />) 
            : null
            }
            </div>
            <div className="center">
            </div>
        </div>
    )
}