import React, { Component } from "react";
import "./history.scss";

export default class History extends Component {
  render() {
    const { resultHistory, updateResult } = this.props;
    return (
      <div>
        <p>
          {resultHistory.map((s, i) => {
            return (
              <li className="history" key={i} onClick={() => updateResult(s)}>
                {s}
              </li>
            );
          })}
        </p>
      </div>
    );
  }
}
