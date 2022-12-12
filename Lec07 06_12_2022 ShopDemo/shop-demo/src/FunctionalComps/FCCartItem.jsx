import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function FCCartItem(props) {
  return (
    <Card className='nir' style={{ margin: 5 }} sx={{ minWidth: 125 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {bull}{props.title}{bull}
        </Typography>
        <Typography variant="body2">
          {props.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.removeFromCart(props.id)}>X</Button>
      </CardActions>
    </Card>
  )
}
