import React from 'react';
import FCCartItem from './FCCartItem';

export default function FCCartList(props) {

  const cartItemList = [
    {
      id: 1,
      title: "Cap",
      desc: "bla bla bla",
      price: 100,
      image: "https://cdn.shopify.com/s/files/1/0521/3352/7718/products/41DZiVJNTlL_540x.jpg?v=1633104038"
    },
    {
      id: 2,
      title: "T-SHIRT",
      desc: "bla bla bla2",
      price: 150,
      image: "https://is4.revolveassets.com/images/p4/n/z/ROLS-MS107_V1.jpg"
    },
  ];

  let cartListStr = props.cartList.map(cart =>
    <FCCartItem key={cart.id} title={cart.title}
      price={cart.price} id={cart.id}
      removeFromCart={props.removeFromCart} />
  );

  return (
    <div>
      {cartListStr}
    </div>
  )
}
