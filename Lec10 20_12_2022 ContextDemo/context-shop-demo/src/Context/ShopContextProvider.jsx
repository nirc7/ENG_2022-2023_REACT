import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export default function ShopContextProvider(props) {
  const [products, setProducts] = useState(
    [
      { id: 1, name: "CAP", price: 100 },
      { id: 2, name: "PANTS", price: 200 },
      { id: 3, name: "TSHIRT", price: 300 }
    ]);
  const [carts, setCarts] = useState([]);

  const fromProducts2CartList = (productId) => {
    let product2Move = products.filter(product => product.id === productId)[0];
    console.log(product2Move);
    let newProducts = [...products.filter(prod => prod.id !== productId)];
    let newCarts = [...carts, product2Move];

    console.log(newProducts);
    console.log(newCarts);

    setCarts(newCarts);
    setProducts(newProducts);
  }

  const fromCarts2Products = (productId) => {
    let product2Move = carts.filter(product => product.id === productId)[0];
    console.log(product2Move);
    let newCarts = [...carts.filter(prod => prod.id !== productId)];
    let newProducts = [...products, product2Move];

    console.log(newProducts);
    console.log(newCarts);

    setCarts(newCarts);
    setProducts(newProducts);
  }


  return (
    <ShopContext.Provider value={{
      products, carts,
      fromProducts2CartList, fromCarts2Products
    }}>
      {props.children}
    </ShopContext.Provider>
  )
}
