import React, { useContext } from 'react'
<<<<<<< HEAD
import {ShopContext} from '../Contexts/ShopContext'
import {useParams} from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';

export const Product = () => {
  const {all_product}=  useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId) )
  return (
    <div>

      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
=======
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e)=> e.id=== Number (productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product ={product}/>
      <DescriptionBox />
      <RelatedProducts/>
>>>>>>> origin/main
    </div>
  )
}
