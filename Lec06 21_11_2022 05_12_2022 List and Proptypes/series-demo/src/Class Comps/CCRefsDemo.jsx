import React, { Component } from 'react'

export default class CCRefsDemo extends Component {
  constructor(props) {
    super(props);

    this.txtInput1 = null;
    this.textInput2 = React.createRef();

    this.state = {};

  }

  TextChanged = () => {
    this.setState({
      txt1: this.txtInput1.value,
      txt2: this.textInput2.current.value
    })
  }

  render() {
    return (
      <div>
        CCRefsDemo <br />
        <input type="text"
          ref={(input) => { this.txtInput1 = input }}
          onChange={this.TextChanged} />
        <span style={{ marginRight: 50 }} />
        txt1:  {this.state.txt1}
        <hr />
        <input type="text"
          ref={this.textInput2}
          onChange={this.TextChanged} />
        <span style={{ marginRight: 50 }} />
        txt2: {this.state.txt2}
      </div>
    )
  }
}
