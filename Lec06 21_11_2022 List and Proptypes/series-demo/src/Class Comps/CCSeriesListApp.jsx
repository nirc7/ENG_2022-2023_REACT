import React, { Component } from 'react';
import FCInputs from '../Functional Comps/FCInputs';
import FCSeriesList from '../Functional Comps/FCSeriesList';

const InitSeriesList = [
  { id: 1, name: "sean the sheep", genre: "Horror", seasons: 2 * 2 },
  { id: 2, name: "dexter", genre: "action", seasons: 7 - 1 },
];

export default class CCSeriesListApp extends Component {
  constructor() {
    super();

    this.state = {
      series: InitSeriesList,
      counter: InitSeriesList.length
    };
  }

  AddSeries = (txtName, txtGenre, txtSeasons) => {
    let newCounter = this.state.counter + 1;
    let newSeries = [...this.state.series,
    {
      id: newCounter,
      name: txtName,
      genre: txtGenre,
      seasons: eval(txtSeasons)
    }];

    this.setState({ series: newSeries, counter: newCounter });
  }

  getId2DelFromFCSL = (id2Del) => {
    let newSeries = this.state.series.filter(avi => avi.id !== id2Del);
    this.setState({series : newSeries});
  }


  render() {
    return (
      <div style={{ border: '2px green solid', padding: 5, margin: 5 }}>
        <FCInputs sendNGS2APP={this.AddSeries} />
        <FCSeriesList seriesList={this.state.series}
          sendId2DelFromFCSL={this.getId2DelFromFCSL} />
      </div>
    )
  }
}

