import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalcartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='cartitems-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
    
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalcartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${getTotalcartAmount()}</p>
                    </div>

                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code. Enter it here</p>
                <div className="cartitems-promo-box">
                    <input type="text" placeholder='PROMO CODE' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
