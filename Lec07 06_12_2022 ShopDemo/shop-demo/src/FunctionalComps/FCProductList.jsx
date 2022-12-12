import React, { Component } from 'react';
import FCProduct from './FCProduct';

export default function FCProductList(props) {
  const getId2Buy = (id2Buy) => {
    console.log(id2Buy);
    props.sendProduct2Buy(id2Buy);
  }

  let productLstStr = props.productList.map(product =>
    <FCProduct
      key={product.id}
      id={product.id}
      title={product.title}
      desc={product.desc}
      price={product.price}
      image={product.image}
      sendId2List={getId2Buy} />
  );

  return (
    <div style={{ display: 'flex', }} >
      {productLstStr}
    </div>
  )
}

// const productList = [
//   {
//     id: 1,
//     title: "Cap",
//     desc: "bla bla bla",
//     price: 100,
//     image: "https://cdn.shopify.com/s/files/1/0521/3352/7718/products/41DZiVJNTlL_540x.jpg?v=1633104038"
//   },
//   {
//     id: 2,
//     title: "T-SHIRT",
//     desc: "bla bla bla2",
//     price: 150,
//     image: "https://is4.revolveassets.com/images/p4/n/z/ROLS-MS107_V1.jpg"
//   },
// ];
