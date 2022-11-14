import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7; //local
    this.number = 8; //field

    this.state = {
      id: this.props.id * 5,
      model: this.props.model,
      speed: this.props.speed
    };
  }

  btnAdd2Speed = () => {
    console.log('before', this.state.speed);
    // this.setState({
    //   speed: this.state.speed + 1,
    //   model: 'porshe',
    //   color: 'red'
    // });

    this.setState((prev) => ({
      speed: prev.speed + 1,
      model: 'porshe',
      color: 'red'
    }));

    console.log('after', this.state.speed);

    this.setState((prev) => ({
      speed: prev.speed + 1
    }));

    console.log('after after', this.state.speed);
  }


  render() {
    //console.log(this.state.color);
    console.log('render', this.state.speed);

    return (
      <div style={{ border: '1px solid red', padding: 10, margin: 10 }}>
        <div>Car</div>
        <button onClick={this.btnAdd2Speed}  >Add2Speed</button> <br />
        propid ={this.props.id} <br />
        id={this.state.id} <br />
        model ={this.state.model} <br />
        speed = {this.state.speed} <br />
        color={this.state.color ? this.state.color : "no color!"}
      </div>
    );
  }
}