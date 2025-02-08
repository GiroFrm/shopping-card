import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import '../style/Navbar.css'
import shoppingCard from '../assets/shoppingCart.png';

function NavBar({cartCount}) {

  return (
    <header className="primary-nav">
        <ul className='navBar'>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="about">About</Link></li> 
        </ul>
         <Link to="checkout">
             <img className ="iconShopping" src={shoppingCard} alt="" />
             <span className="cartCount">{cartCount}</span>
         </Link>
    </header>
  )
}

export default NavBar