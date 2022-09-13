import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { CartContext } from "../App"
import { getById } from "../services/cocktailServices"

export const SearchResult = ({name,id}) => {
    let [selected,setSelected] = useState(false)
    let {cart,setCart} = useContext(CartContext)
    let [cocktail,setCocktail] = useState([])

    useEffect(() => {
        getById(id)
        .then(x => setCocktail(x.drinks[0]))
    },[])


    const addCocktail = (event) => {
        if(selected){
            setCart(x => x.filter(el => el.idDrink !== cocktail.idDrink))
            // setSelected(x => !x)
        } else {
            setCart(x => [...x ,cocktail])
            // setSelected(x => !x)
        }
    }

    return  <li className="searchLi">
                <h4>{name}</h4>
                <button onClick={() => {
                    setSelected(x=>!x)
                    }}>
                {selected 
                ?
                <i onClick={addCocktail} class="red fa-solid fa-square-xmark"></i>
                :
                <i onClick={addCocktail} class="green fa-solid fa-circle-plus"></i>
                }
                </button>
            </li>
}