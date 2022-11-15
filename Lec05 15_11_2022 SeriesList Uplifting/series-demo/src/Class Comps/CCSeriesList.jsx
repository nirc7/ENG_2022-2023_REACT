import { Component } from "react";
import FCSeries from "../Functional Comps/FCSeries";
import Button from 'react-bootstrap/Button';

const InitSeriesList = [
  { id: 1, name: "sean the sheep", genre: "Horror", seasons: 2 * 2 },
  { id: 2, name: "dexter", genre: "action", seasons: 7 - 1 },
];

export default class CCSeriesList extends Component {
  constructor() {
    super();

    this.txtName = null;
    this.txtGenre = null;
    this.txtSeasons = null;

    this.state = {
      series: InitSeriesList,
      counter: InitSeriesList.length
    };
  }


  chgName = (e) => {
    this.txtName = e.target.value;
  }

  chgGenre = (e) => {
    this.txtGenre = e.target.value;
  }

  chgSeasons = (e) => {
    this.txtSeasons = e.target.value;
  }


  btnAddSeries = () => {
    let newCounter = this.state.counter + 1;
    let newSeries = [...this.state.series,
    {
      id: newCounter,
      name: this.txtName,
      genre: this.txtGenre,
      seasons: eval(this.txtSeasons)
    }];

    this.setState({ series: newSeries, counter: newCounter });
  }

  render() {

    console.log(this.state.series);

    let seriesStr = this.state.series.map((series) =>
    (<FCSeries
      id={series.id}
      name={series.name}
      genre={series.genre}
      seasons={series.seasons} key={series.id}
       />)
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div> name: <input type="text" onChange={this.chgName} /> </div>
        <div> genre: <input type="text" onChange={this.chgGenre} /> </div>
        <div>seasons: <input type="text" onChange={this.chgSeasons} /> </div>
        <button className="btn btn-success" onClick={this.btnAddSeries}>Add Series</button>
        <Button variant="danger">Danger</Button>{' '}
        <div>List:</div>
        <div className="list-group" >
          {seriesStr}
        </div>
      </div>
    );
  }
}
