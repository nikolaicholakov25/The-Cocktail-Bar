import { useEffect, useState } from "react"
import { getRandomCocktails } from "../../services/cocktailServices"
import {HomeGalleryCard} from './HomeGalleryCard'

export const Home = () => {

    let [randomCocktails,setRandomCocktails] = useState([])
    let [getNewCocktails,setGetNewCocktails] = useState(false)

    useEffect(() => {
        getRandomCocktails()
        .then(res => setRandomCocktails(res))
    },[getNewCocktails])

    return (
        <div className="homeWrapper">
            <div className="homeGalleryWrapper">
            { randomCocktails.drinks ?
            randomCocktails.drinks.map(drink => <HomeGalleryCard key={drink.idDrink} drink={drink} />) 
            : null
            }
            </div>
            <div className="center">
            <button onClick={() => setGetNewCocktails(x=>!x)} className="otherCocktails">
                <h2 id="btn">See Other Cocktail Suggestions</h2>
                </button>
            </div>
        </div>
    )
}