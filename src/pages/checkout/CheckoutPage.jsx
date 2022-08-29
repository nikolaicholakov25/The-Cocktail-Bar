import { useContext } from "react"
import { CartContext } from "../../App"
import { CheckoutCard } from "./CheckoutCard";

export const CheckoutPage = () => {
    let {cart,setCart} = useContext(CartContext)

    return (
        <div className="checkoutSection">
            
        <div className="checkoutWrapper">
            {cart.length >= 1
            ?
            cart.map(x => <CheckoutCard drink={x} />)
            : <h1 className="noCocktails">Please Add Cocktails To Your Cart</h1>
            }
        </div>

            <div className="receiptWrapper">
                <div className="receipt">
                    {cart.map(x => {
                        return <div>
                            'hello'
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}