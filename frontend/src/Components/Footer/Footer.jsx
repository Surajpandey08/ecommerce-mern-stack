import React from 'react'
import './Footer.css'
import footerlogo from "../Assests/logo_big.png"
import whatsapp from "../Assests/whatsapp_icon.png"
import instagram from "../Assests/instagram_icon.png"
import pintrest from "../Assests/pintester_icon.png"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footerlogo} alt="" />
            <p>The Cloth Shop</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>

        <div className="footer-socialmedia">
            <div className='footer-icon-container'>
                <img src={whatsapp} alt="" />
            </div>

            <div className='footer-icon-container'>
                <img src={instagram} alt="" />
            </div>

            <div className='footer-icon-container'>
                <img src={pintrest} alt="" />
            </div>

            
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 All right reserved to The Cloth Shop</p>
        </div>
    </div>
  )
}
