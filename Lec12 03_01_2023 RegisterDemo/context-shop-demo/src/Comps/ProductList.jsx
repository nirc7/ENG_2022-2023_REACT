import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContextProvider'
import ProductItem from './ProductItem';

export default function ProductList() {
  const { products } = useContext(ShopContext);

  console.log(products);
  let productsOutput = products.map(prod =>
    <ProductItem key={prod.id} id={prod.id} name={prod.name} price={prod.price} />
  );

  return (
    <div>
      ProductList <br />
      {productsOutput} <br />
    </div>
  )
}
