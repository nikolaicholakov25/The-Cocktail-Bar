import { useContext } from "react"
import { CartContext } from "../../App"

export const CheckoutCard = (props) => {

    let {cart,setCart} = useContext(CartContext)


    let drink = props.drink

    let {setSplittedPrice , price} = props

    
    const removeCocktail = () => {
        setCart(x => x.filter(el => el.idDrink !== drink.idDrink))
    }

    return (
        <div className="checkoutCard">
            <h2>{drink.strDrink}</h2>
        <>
        <button onClick={removeCocktail} className="removeCocktail">
        <i class="fa-solid fa-square-xmark"></i>
        </button>
        <img id="img" alt="cocktail" src={drink.strDrinkThumb}/>
        <ul className="ingredients">
            <li>{drink.strIngredient1}</li>
            <li>{drink.strIngredient2}</li>
            <li>{drink.strIngredient3}</li>
            <li>{drink.strIngredient4}</li>
            <li>{drink.strIngredient5}</li>
        </ul>
        </>
        </div>
    )
}