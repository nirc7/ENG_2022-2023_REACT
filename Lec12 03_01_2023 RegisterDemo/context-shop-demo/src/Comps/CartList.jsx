import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider';
import CartItem from './CartItem';

export default function CartList() {
  const { carts } = useContext(ShopContext);

  let cartsOutput = carts.map(cart =>
    <CartItem key={cart.id} productAsCart={cart} />
  );

  return (

    <div>
      CartList <br />
      {cartsOutput} <br />
    </div>
  )
}
