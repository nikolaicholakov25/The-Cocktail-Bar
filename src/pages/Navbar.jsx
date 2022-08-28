import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <Link to={'/'}><i class="fa-solid fa-martini-glass"></i></Link>
                </div>
            <ul className="ul">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/alcoholic'}>Alcoholic</Link></li>
                <li><Link to={'/non-alcoholic'}>Non Alcoholic</Link></li>
                <li><Link to={'/optional-alcohol'}>Optional Alcohol</Link></li>
                <li><Link to={'/checkout'}>Checkout</Link></li>
                <li><Link to={'/where-to-find-us'}>Where To Find Us</Link></li>
            </ul>
        </div>
    )
}