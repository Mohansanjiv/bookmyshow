import React from 'react'
import Product from './Product';

export default function ShowProduct(props){
    const proList = props.ProductList;
    const productlistElements = proList.map((product)=><Product key={product.Id} pdata=
    {product}></Product>);
  return (
    <div>
          {productlistElements}         
    </div>
  )
}
