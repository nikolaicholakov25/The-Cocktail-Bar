import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <Link to={'/'}><i class="fa-solid fa-martini-glass"></i></Link>
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