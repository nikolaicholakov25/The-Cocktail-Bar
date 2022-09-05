import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App"
import { CheckoutCard } from "./CheckoutCard";

export const CheckoutPage = (props) => {
    let {cart,setCart} = useContext(CartContext)
    let [price,setPrice] = useState(0)
    let [splittedPrice,setSplittedPrice] = useState(0)
    let [billSplitted,setBillSplitted] = useState(false)

    useEffect(() => {
        setPrice(cart.reduce((acc , el) => 
        acc += Number(el.idDrink.slice(0,2)) 
        , 0))

        setSplittedPrice(price / 2)
    },[cart,billSplitted,price])

    const removeCocktail = (idDrink) => {
        setCart(cart.filter(el => el.idDrink !== idDrink))
        setSplittedPrice(price / 2)
    }

    const splitBill = () => {
       setBillSplitted(x => !x)
       setSplittedPrice(price / 2)
    }

    return (
        <div className="checkoutSection">
            
        <div className="checkoutWrapper">
            {cart.length >= 1
            ?
            cart.map(x => <CheckoutCard key={x.idDrink} drink={x}/>)
            : <h1 className="noCocktails">Please Add Cocktails To Your Cart</h1>
            }
        </div>

            <div className="receiptWrapper">
                <div className="receipt">
                    {cart.map(x => {
                        return <div key={x.idDrink} className="drinksWrapper">
                            <h3 id="drinks">{x.strDrink} --- <span id="drinkCategory">{x.strCategory}</span> --- {x.idDrink.slice(0,2)}$  
                            <button onClick={() => removeCocktail(x.idDrink)} className="removeCocktailReceipt">
                            <i class="fa-solid fa-square-xmark"></i>
                            </button></h3>
                        </div>
                    })}
                    {billSplitted 
                    ?
                    <div className="checkoutBtn">Bill Splitted: <span id="idPrice">{splittedPrice}$ / {splittedPrice}</span>$</div>
                    : 
                    <div className="checkoutBtn">Total Price: <span id="idPrice">{price}</span>$</div>
                    }
                <div className="buttons">
                    {cart.length >= 1 
                    ? <>
                    <button onClick={() => alert('The Cocktail Bar is free today!')} >PAY NOW</button>
                    {billSplitted 
                    ?
                    <button onClick={splitBill}>PAY IN FULL</button>
                    :
                    <button onClick={splitBill}>SPLIT THE BILL</button>
                    }
                    </>
                    : null}
                </div>
                </div>
            </div>
        </div>
    )
}