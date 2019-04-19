import React, { Component } from "react";
import './Display.css';

export default class Display extends Component {
  render() {
    return (
      <div>
        <p className='DisplayValue'>{this.props.result}</p>
      </div>
    );
  }
}
