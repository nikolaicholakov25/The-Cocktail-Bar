import { useEffect } from "react"
import { useState } from "react"
import { getCocktails } from "../../services/cocktailServices"
import { HomeGalleryCard } from "../homePage/HomeGalleryCard"

export const CocktailsPage = () => {

    let [cocktails,setCocktails] = useState([])

    useEffect(() => {
        getCocktails()
        .then(res => setCocktails(res.drinks.slice(0,30)))
    },[])

    return(

        <div className="homeWrapper">
            <div className="cocktailsGalleryWrapper">
            { cocktails ?
            cocktails.map(drink => <HomeGalleryCard key={drink.idDrink} drink={drink} />) 
            : null
            }
            </div>
            <div className="center">
            </div>
        </div>
    )
}