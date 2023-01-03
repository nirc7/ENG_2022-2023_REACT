import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContextProvider'

export default function CartItem(props) {
  const { fromCarts2Products } = useContext(ShopContext);

  return (
    <div>
      CartItem <br />
      name:{props.productAsCart.name} <br />
      price:{props.productAsCart.price} <br />
      <button onClick={() => fromCarts2Products(props.productAsCart.id)} >X</button>
    </div>
  )
}
