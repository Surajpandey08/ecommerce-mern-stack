import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

export const Breadcrums = (props) => {
<<<<<<< HEAD
    const {product}= props;
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt="" />  Shop <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
=======
    const {product} = props
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon}alt="" /> {product.name}
>>>>>>> origin/main
    </div>
  )
}
