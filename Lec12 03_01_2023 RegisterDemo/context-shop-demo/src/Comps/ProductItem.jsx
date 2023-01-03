import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider';

export default function ProductItem(props) {
  const { fromProducts2CartList } = useContext(ShopContext);

  return (
    <div>
      name: {props.name} <br />
      price:{props.price} <br />
      <button onClick={() => fromProducts2CartList(props.id)} >BUY</button>
    </div>
  )
}
