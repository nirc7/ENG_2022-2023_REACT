import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContextProvider';


export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useContext(ShopContext);
  const [name, setName] = useState();
  const [price, setPrice] = useState(0);

  const btnAddProduct = () => {
    //debugger;
    console.log(name, price);
    addProduct(name, price);
    navigate('/');
  }

  return (
    <div>
      AddProduct <br />
      NAME: <input type="text" onChange={e => setName(e.target.value)} /> <br />
      PRICE: <input type="text" placeholder='ENTER THE PRICE...' onChange={e => setPrice(Number(e.target.value))} /> <br />
      <button onClick={btnAddProduct} >Save</button>
    </div>
  )
}
