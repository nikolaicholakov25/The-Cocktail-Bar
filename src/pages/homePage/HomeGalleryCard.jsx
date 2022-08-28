import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getById } from "../../services/cocktailServices";

export const HomeGalleryCard = (props) => {
    let {strDrink ,idDrink} = props.drink;

    let [cocktail,setCocktail] = useState([])
    let [Ingredients, setIngredients] = useState([])

    let drink

    if(cocktail.drinks){
        drink = cocktail.drinks[0]
    }

    
    useEffect(() => {
        getById(idDrink)
        .then(x => setCocktail(x))
    },[])
    
    return (
        <div className="randomCocktailCard">
        <h2>{strDrink}</h2>
        {cocktail.drinks ? 
        <>
        <button id="addIcon" ><i class="fa-solid fa-plus"></i></button>
        <img id="img" alt="cocktail" src={drink.strDrinkThumb}/>
        <ul className="ingredients">
            <li>{drink.strIngredient1}</li>
            <li>{drink.strIngredient2}</li>
            <li>{drink.strIngredient3}</li>
            <li>{drink.strIngredient4}</li>
            <li>{drink.strIngredient5}</li>
        </ul>
        </>
        : null
        }
        </div>
    )
}