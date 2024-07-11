<<<<<<< HEAD
import React, { useContext, useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> origin/main
import logo from "../Assests/logo.png"
import cart_icon from "../Assests/cart_icon.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ShopContext } from '../../Contexts/ShopContext'
=======
>>>>>>> origin/main

export const Navbar = () => {

  const [menu, setMenu]= useState('shop')
<<<<<<< HEAD
  const {getTotalCartItems} = useContext(ShopContext)
=======
>>>>>>> origin/main

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>The Cloth Shop</p>
      </div>
      <ul className='nav-items'>
          <li onClick={() => { setMenu('shop') }}> <Link className='link' to='/'> Shop</Link> {menu === 'shop'? <hr /> : <></>} </li>
          <li onClick={() => { setMenu('men') }}> <Link className='link' to='/men'> Men</Link>{menu === 'men'? <hr /> : <></>}</li>
          <li onClick={() => { setMenu('women') }}> <Link className='link' to='/women'> Women</Link>{menu === 'women'? <hr /> : <></>}</li>
          <li onClick={() => { setMenu('kids') }}>  <Link className='link' to='/kids'> Kids</Link> {menu === 'kids'? <hr /> : <></>}</li>
      </ul>

      <div className="nav-login-cart">

      <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link> 
      <Link style={{textDecoration: 'none'}} to='/cart'> <img src={cart_icon} alt="cart" /></Link>  
<<<<<<< HEAD
        <div className='cart-counter'>{getTotalCartItems()}</div>
=======
        <div className='cart-counter'>0</div>
>>>>>>> origin/main

      </div>
      
    </div>
  )
}
