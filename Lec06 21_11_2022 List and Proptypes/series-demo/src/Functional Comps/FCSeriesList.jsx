import { Component } from "react";
import FCSeries from "./FCSeries";

export default function FCSeriesList(props) {


  const getId2DelFromFCS = (id2Del) => {
    props.sendId2DelFromFCSL(id2Del);
  }

  let seriesStr = props.seriesList.map((series, ind) =>
  (<FCSeries
    id={series.id}
    name={series.name}
    genre={series.genre}
    seasons={series.seasons}
    key={series.id}
    sendId2DelFromFCS={getId2DelFromFCS}
  />)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, border: '2px white solid' }}>
      <div>List:</div>
      <div className="list-group" >
        {seriesStr}
      </div>
    </div>
  );

}
