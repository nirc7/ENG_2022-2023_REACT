import React from 'react'
import CartList from '../Comps/CartList'
import ProductList from '../Comps/ProductList'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function Shop() {
  const navigate = useNavigate();
  return (
    <div>
      <ProductList /> <br />
      <CartList />
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={() => navigate('/addproduct')} />
      </Fab>
    </div>
  )
}
