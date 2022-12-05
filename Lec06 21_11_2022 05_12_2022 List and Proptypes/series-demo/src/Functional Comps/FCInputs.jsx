import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FCInputs(props) {

  let txtName = null;
  let txtGenre = null;
  let txtSeasons = null;

  const chgName = (e) => {
    txtName = e.target.value;
  }

  const chgGenre = (e) => {
    txtGenre = e.target.value;
  }

  const chgSeasons = (e) => {
    txtSeasons = e.target.value;
  }

  const btnAddSeries = () => {
    props.sendNGS2APP(txtName, txtGenre, txtSeasons);
  }

  return (
    <div style={{border:'2px red solid', padding:5, margin:5}}>
      <div> name: <input type="text" onChange={chgName} /> </div>
      <div> genre: <input type="text" onChange={chgGenre} /> </div>
      <div>seasons: <input type="text" onChange={chgSeasons} /> </div>
      <button className="btn btn-success" onClick={btnAddSeries}>Add Series</button>
      <Button variant="danger">Danger</Button>{' '}
    </div>
  )
}
