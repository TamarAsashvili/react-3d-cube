import React from "react";
import Button from "./Button";
import "./index.css";
import river from "./img/river.jpg";
import limon from "./img/limon.jpg";
import pen from "./img/pen.jpg";
import smart from "./img/smart.jpg";
import chania from "./img/chania.jpg";

export default class CounterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  IncrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div>
          {/* <button onClick={this.decrementCounter}>Decrement</button> */}
          <Button actionCallback={this.decrementCounter} title="Decrement" />
          <text>{this.state.counter}</text>
          <button onClick={this.IncrementCounter}>Increment</button>
        </div>
        <div className="wrap">
          <div className="cube">
            <img
              style={{ background: "#ffb6c1", width: "200px", height: "200px" }}
            />
            <img src={chania} style={{ width: "200px", height: "200px" }} />
            <img src={limon} style={{ width: "200px", height: "200px" }} />
            <img src={smart} style={{ width: "200px", height: "200px" }} />
            <img src={pen} style={{ width: "200px", height: "200px" }} />
            <img src={river} style={{ width: "200px", height: "200px" }} />
          </div>
        </div>
      </div>
    );
  }
}
