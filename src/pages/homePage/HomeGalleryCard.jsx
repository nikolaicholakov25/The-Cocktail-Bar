import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import { getById } from "../../services/cocktailServices";

export const HomeGalleryCard = (props) => {
    let {strDrink ,idDrink} = props.drink;

    let {cart,setCart} = useContext(CartContext)

    let [cocktail,setCocktail] = useState([])

    let drink

    if(cocktail.drinks){
        drink = cocktail.drinks[0]
    }

    
    useEffect(() => {
        getById(idDrink)
        .then(x => setCocktail(x))
    },[])

    const addCocktail = (event) => {
        let ele = event.target.parentElement
        
        if(ele.classList.contains('greenBG')){
            ele.classList.remove('greenBG')
            setCart(x => x.filter(el => el.idDrink !== drink.idDrink))
            
        } else {
            setCart(x => [...x ,drink])
            ele.classList.add('greenBG')
            
        }
    }
    
    return (
        <div className="randomCocktailCard">
        <h2>{strDrink}</h2>
        {cocktail.drinks ? 
        <>
        <button onClick={addCocktail} className="addIcon">
        <i class="fa-solid fa-circle-plus"></i></button>
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