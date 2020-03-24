import React, { Component } from "react";
import "./button.scss";

export default class Button extends Component {
  buttonPressed = e => {
    //console.log(e.target.value);
    this.props.buttonPressed(e.target.value);
  };
  render() {
    return (
      <div className="Main-button">
        <button type="button" value="AC" onClick={this.buttonPressed}>
          {this.props.i}
        </button>
        <button type="button" value="<" onClick={this.buttonPressed}>
          &larr;
        </button>
        <button type="button" value=">" onClick={this.buttonPressed}></button>
        <button
          id="operator"
          type="button"
          value="√"
          onClick={this.buttonPressed}
        ></button>

        <button type="button" value="√" onClick={this.buttonPressed}>
          √
        </button>
        <button type="button" value="±" onClick={this.buttonPressed}>
          ±
        </button>
        <button type="button" value="%" onClick={this.buttonPressed}>
          %
        </button>
        <button
          id="operator"
          type="button"
          value="/"
          onClick={this.buttonPressed}
        >
          ÷
        </button>

        <button type="button" value="7" onClick={this.buttonPressed}>
          7
        </button>
        <button type="button" value="8" onClick={this.buttonPressed}>
          8
        </button>
        <button type="button" value="9" onClick={this.buttonPressed}>
          9
        </button>
        <button
          id="operator"
          type="button"
          value="X"
          onClick={this.buttonPressed}
        >
          x
        </button>

        <button type="button" value="4" onClick={this.buttonPressed}>
          4
        </button>
        <button type="button" value="5" onClick={this.buttonPressed}>
          5
        </button>
        <button type="button" value="6" onClick={this.buttonPressed}>
          6
        </button>
        <button
          id="operator"
          type="button"
          value="-"
          onClick={this.buttonPressed}
        >
          -
        </button>

        <button type="button" value="1" onClick={this.buttonPressed}>
          1
        </button>
        <button type="button" value="2" onClick={this.buttonPressed}>
          2
        </button>
        <button type="button" value="3" onClick={this.buttonPressed}>
          3
        </button>
        <button
          id="operator"
          type="button"
          value="+"
          onClick={this.buttonPressed}
        >
          +
        </button>

        <button id="zero" type="button" value="0" onClick={this.buttonPressed}>
          0
        </button>
        <button type="button" value="." onClick={this.buttonPressed}>
          .
        </button>
        <button
          id="operator"
          type="button"
          value="="
          onClick={this.buttonPressed}
        >
          =
        </button>
      </div>
    );
  }
}
