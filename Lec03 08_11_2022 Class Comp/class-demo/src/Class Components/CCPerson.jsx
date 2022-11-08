import { Component } from "react";

export default class CCPerson extends Component {
  constructor(props) {
    super(props);
    let num = 9; //local variable
    this.age = 30; //field
    this.state = {
      name: 'avi',
      grade: this.props.grade
    };
  }

  btnAddBonus = () => {
    // this.setState({
    //   grade: 200, // this.state.grade + 5,
    //   isExellent: true
    // });
    console.log('before'); 
    this.setState(prev => ({
      grade: prev.grade + 5,
      isExellent: true
    }));
    console.log('after'); 

    this.setState(prev => ({
      grade: prev.grade + 5,
      isExellent: true
    }));
  }

  render() {
    //this.state.age = 47; //ERROR!!!
    console.log(this.age + 8);
    console.log('render' + this.state.grade); 
    return (
      <div style={{ border: '3px white solid', padding: 15, margin: 10 }}>
        <p>id = {this.props.id}</p>
        <p>name = {this.state.name}</p>
        <p>grade = {this.state.grade}</p>
        <p>exellnet  = {this.state.isExellent ? "T" : "F"}</p>
        <button onClick={this.btnAddBonus}>Add Bonus</button>
        
      </div>
    );
  }
}