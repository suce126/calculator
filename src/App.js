import React, { Component } from "react";
import "./App.css";
import Button from "./component/button/button";
import Display from "./component/display/display";
import History from "./component/history/history";

class App extends Component {
  state = {
    result: "0",
    num1: "0",
    num2: "0",
    operator: null,
    resultHistory: [],
    i: "AC",
  };

  buttonPressed = (buttonName) => {
    if (buttonName === "AC") {
      this.reset();
    } else if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "<") {
      this.lastResult();
    } else if (buttonName === "±") {
      this.plusminus();
    } else if (buttonName === "%") {
      this.percent();
    } else if (buttonName === "+") {
      this.plus();
    } else if (buttonName === "-") {
      this.minus();
    } else if (buttonName === "X") {
      this.multiply();
    } else if (buttonName === "/") {
      this.divide();
    } else if (buttonName === "√") {
      this.squareRoot();
    } else if (typeof parseInt(buttonName) === "number") {
      if (this.state.operator === null) {
        this.setState({
          num1:
            this.state.num1 === "0" ? buttonName : this.state.num1 + buttonName,
        });
      } else {
        this.setState({
          num2:
            this.state.num2 === "0" ? buttonName : this.state.num2 + buttonName,
        });
      }
    }
  };

  reset = () => {
    this.setState({
      result: "0",
      num1: "0",
      num2: "0",
      operator: null,
    });
  };

  calculate = () => {
    return Promise.resolve()
      .then(() => {
        if (this.state.operator === "+") {
          this.setState({
            result: parseFloat(this.state.num1) + parseFloat(this.state.num2),
            operator: null,
            num1: "0",
            num2: "0",
          });
        } else if (this.state.operator === "-") {
          this.setState({
            result: parseFloat(this.state.num1) - parseFloat(this.state.num2),
            operator: null,
            num1: "0",
            num2: "0",
          });
        } else if (this.state.operator === "X") {
          this.setState({
            result: parseFloat(this.state.num1) * parseFloat(this.state.num2),
            operator: null,
            num1: "0",
            num2: "0",
          });
        } else if (this.state.operator === "/") {
          if (this.state.num2 === "0") {
            this.setState({ num2: "Error" });
          } else {
            this.setState({
              result: parseFloat(this.state.num1) / parseFloat(this.state.num2),
              operator: null,
              num1: "0",
              num2: "0",
            });
          }
        }
      })
      .then(() => {
        this.setState({
          resultHistory: [...this.state.resultHistory, this.state.result],
        });
      });
  };

  lastResult = () => {
    if (this.state.num1 !== "0" && this.state.num2 === "0") {
      let number = this.state.num1.toString();
      let len = number.length - 1;
      let newNumber = number.substr(0, len);

      this.setState({
        num1: newNumber.length > 0 ? newNumber : "0",
      });
    } else if (this.state.num2 !== "0") {
      let number = this.state.num2.toString();
      let len = number.length - 1;
      let newNumber = number.substr(0, len);

      this.setState({
        num2: newNumber.length > 0 ? newNumber : "0",
      });
    } else {
      let number = this.state.result.toString();
      let len = number.length - 1;
      let newNumber = number.substr(0, len);

      this.setState({
        result: newNumber.length > 0 ? newNumber : "0",
      });
    }
  };

  percent = () => {
    this.state.num1 !== "0"
      ? this.setState({
          num1: this.state.num1 * 0.01,
        })
      : this.setState({
          result: this.state.result * 0.01,
        });
  };

  plus = () => {
    this.setState({
      operator: "+",
    });
  };

  minus = () => {
    this.setState({
      operator: "-",
    });
  };

  multiply = () => {
    this.setState({
      operator: "X",
    });
  };

  divide = () => {
    this.setState({
      operator: "/",
    });
  };

  plusminus = () => {
    this.state.num1 !== "0"
      ? this.setState({
          num1: this.state.num1 * -1,
        })
      : this.setState({
          result: this.state.result * -1,
        });
  };

  squareRoot = () => {
    this.state.num1 !== "0"
      ? this.setState({
          num1: Math.sqrt(this.state.num1).toString(),
        })
      : this.setState({
          result: Math.sqrt(this.state.result).toString(),
        });
  };

  updateResult = (e) => {
    this.setState({
      num1: e,
    });
  };

  render() {
    let num;
    if (this.state.num1 === "0" && this.state.num2 === "0") {
      num = <Display result={this.state.result} />;
    } else if (this.state.operator === null) {
      num = <Display result={this.state.num1} />;
    } else {
      num = <Display result={this.state.num2} />;
    }

    return (
      <div className="App">
        {num}
        {/* <Display ref={this.display} result={this.state.result} /> */}

        <Button
          buttonPressed={this.buttonPressed}
          i={this.state.num1 > 0 ? "C" : this.state.i}
        />
        <History
          resultHistory={this.state.resultHistory}
          updateResult={this.updateResult}
        />
      </div>
    );
  }
}

export default App;
