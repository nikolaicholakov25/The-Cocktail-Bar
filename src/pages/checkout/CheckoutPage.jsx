import { useContext } from "react"
import { CartContext } from "../../App"
import { CheckoutCard } from "./CheckoutCard";

export const CheckoutPage = () => {
    let {cart,setCart} = useContext(CartContext)

    // cart.map(x => console.log(x))

    return (
        <div className="checkoutWrapper">
            {cart.map(x => <CheckoutCard drink={x} />)}
        </div>
    )
}