import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getSearchResult } from "../services/cocktailServices"


export const Navbar = () => {

    let [search,setSearch] = useState('')
    let [result,setResult] = useState([])
    let [searched,setSearched] = useState(false)
    let [searchClass,setSearchClass] = useState('none')

    useEffect(() => {
        getSearchResult(search)
        .then(res => 
            setResult(res.drinks.slice(0,20))
            )
        .then(x => search == '' ? setSearchClass('none') : setSearchClass('searchResult'))
    }, [search])


    return (
        <div className="navbar">
            <div className="logo">
                <Link to={'/'}><i class="fa-solid fa-martini-glass"></i></Link>
            </div>

            <div className="searchDiv">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search For A Cocktail..."/>
                <button id="search"><i class="fa-solid fa-magnifying-glass"></i></button>

                <div className={searchClass}>
                    <ul>
                        {
                        search !== '' 
                        ? result !== null 
                        ? result.map(each => <li>{each.strDrink}</li>)
                        : null
                        : null
                        }
                    </ul>
                </div>

            </div>

            <ul className="ul">
                <li><Link to={'/'}>Home</Link></li>

                <li>
                    <div className="dropDownDiv">
                        <button className="downBtn">Drink Types</button>
                        <ul className="dropDownMenu">
                            <li><Link to={'/cocktails'}>Cocktails</Link></li>
                            <li><Link to={'/shots'}>Shots</Link></li>
                            <li><Link to={'/soft-drinks'}>Soft Drinks</Link></li>
                            <li><Link to={'/ordinary-drinks'}>Ordinary Drinks</Link></li>
                        </ul>
                    </div>
                </li>

                <li><Link to={'/checkout'}><i id="checkout" class="fa-solid fa-cart-shopping"></i>Checkout</Link></li>

                <li><Link to={'/where-to-find-us'}>Where To Find Us</Link></li>
            </ul>
        </div>
    )
}