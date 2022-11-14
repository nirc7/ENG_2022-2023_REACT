import { Component } from "react";
import CCCar from "./CCCar";

const InitCarsList = [
  { id: 1, model: 'BMW', speed: 200 },
  { id: 2, model: 'porshe', speed: 180 }
];

export default class CCCarsList extends Component {
  constructor(props) {
    super(props);

    this.txtModel = null;
    this.txtSpeed = null;

    this.state = {
      cars: InitCarsList,
      count: InitCarsList.length
    };
  }


  cngModel = (e) => {
    this.txtModel = e.target.value;
  }

  cngSpeed = (e) => {
    this.txtSpeed = e.target.value;
  }


  btnAddCar = () => {
    let newCoun = this.state.count + 1;
    let newCars = [...this.state.cars,
    { id: newCoun, model: this.txtModel, speed: parseInt(this.txtSpeed) }];

    console.log(newCars);
    this.setState({
      cars: newCars,
      count: newCoun
    });
  }


  render() {

    let carsStr = this.state.cars.map((car) =>
      <CCCar id={car.id} model={car.model} speed={car.speed} key={car.id}/>);

    return (
      <div style={{ border: '1px solid cyan', padding: 10, margin: 10 }}>
        CARS LIST <br />
        model: <input type="text" onChange={this.cngModel} /> {this.state.modelTxt} <br />
        speed: <input type="number" onChange={this.cngSpeed} /> <br />
        <button onClick={this.btnAddCar}>Add Car</button>
        {carsStr}
      </div>
    );
  }
}  