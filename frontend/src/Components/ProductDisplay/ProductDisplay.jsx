<<<<<<< HEAD
import React, {useContext} from 'react'
=======
import React, { useContext } from 'react'
>>>>>>> origin/main
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Contexts/ShopContext'

export const ProductDisplay = (props) => {
<<<<<<< HEAD
    const {product} = props;
=======
    const {product} =props;
>>>>>>> origin/main
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
<<<<<<< HEAD

=======
>>>>>>> origin/main
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
<<<<<<< HEAD
=======

>>>>>>> origin/main
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
<<<<<<< HEAD
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-oldprice">${product.old_price}</div>
                <div className="productdisplay-right-newprice"> ${product.new_price} </div>
            </div>
            <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor placerat libero. In et enim euismod diam imperdiet egestas. Pellentesque tincidunt dolor in turpis porta pulvinar sit amet quis libero. Phasellus bibendum suscipit leo in fringilla. 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size </h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Mordern, Latest</p>

        
        </div> 
=======
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" /> 
               <img src={star_dull_icon} alt="" /> 
               <img src={star_dull_icon} alt="" /> 
               <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>

            </div>
                <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est elit, scelerisque eu imperdiet et, faucibus nec nulla. Vestibulum tempus luctus blandit. Fusce sed nisi ex. Nam eleifend, magna eu vestibulum eleifend, lectus odio elementum dolor, cursus vulputate magna sapien quis dolor. Cras sit amet leo neque. 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category: </span>Women, T-Shirt, Crop Top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags </span>Mordern, Latest
                </p>
            

        </div>
>>>>>>> origin/main
    </div>
  )
}
