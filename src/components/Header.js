import "./Header.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
  const products = useSelector( state => state.cartState.cartList);


  return (
    <header>
        <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo"/>
        <span>Shopping Cart</span>
        </Link>
        <nav className="navigation">
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/ShopCart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className="items">
            <span>Cart : {products.length}</span>
        </Link>
    </header>
  )
}
