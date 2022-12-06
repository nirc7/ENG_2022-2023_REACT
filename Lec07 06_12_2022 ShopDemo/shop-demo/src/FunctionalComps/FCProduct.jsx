import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function FCProduct(props) {

  const sendId2List = () => {
    props.sendId2List(props.id);
  }

  return (
    <div style={{ margin: 15 }}  >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="150"
          image={props.image}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {props.price}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={sendId2List}>Buy</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
