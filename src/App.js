import React, { Component } from "react";
import "./App.css";
import Button from "./component/Button";
import Display from "./component/Display";
import History from "./component/History";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.display = React.createRef();
  // }
  state = {
    result: "0",
    result2: "0",
    operator: null,
    resultHistory: [],
    i:'AC'
  };

  buttonPressed = buttonName => {
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
    }

    //else if (buttonName === '.') {this.}
    else if (typeof parseInt(buttonName) === "number") {
      if (this.state.operator === null) {
        this.setState({
          result:
            this.state.result === "0"
              ? buttonName
              : this.state.result + buttonName
        });
      } else {
        this.setState({
          result2:
            this.state.result2 === "0"
              ? buttonName
              : this.state.result2 + buttonName
        });
      }
    }
  };

  reset = () => {
    this.setState({
      result: "0",
      result2: "0",
      operator: null
    });
  };

  calculate = () => {
    return Promise.resolve()
      .then(() => {
        if (this.state.operator === "+") {
          this.setState({
            result:
              parseFloat(this.state.result) + parseFloat(this.state.result2),
            operator: null,
            result2: "0"
          });
        } else if (this.state.operator === "-") {
          this.setState({
            result:
              parseFloat(this.state.result) - parseFloat(this.state.result2),
            operator: null,
            result2: "0"
          });
        } else if (this.state.operator === "X") {
          this.setState({
            result:
              parseFloat(this.state.result) * parseFloat(this.state.result2),
            operator: null,
            result2: "0"
          });
        } else if (this.state.operator === "/") {
          if (this.state.result2 === "0") {
            this.setState({ result2: "Error" });
          } else {
            this.setState({
              result:
                parseFloat(this.state.result) / parseFloat(this.state.result2),
              operator: null,
              result2: "0"
            });
          }
        }
      })
      .then(() => {
        this.setState({
          resultHistory: [...this.state.resultHistory, this.state.result]
        });
      });
  };

  lastResult = () => {
    let number = this.state.result.toString()
    let len = number.length - 1
    let newNumber = number.substr(0,len)
    
    this.setState({
      result: newNumber.length > 0 ? newNumber : '0'
    })
  };

  percent = () => {
    this.setState({
      result: this.state.result * 0.01
    });
  };

  plus = () => {
    this.setState({
      operator: "+"
    });
  };

  minus = () => {
    this.setState({
      operator: "-"
    });
  };

  multiply = () => {
    this.setState({
      operator: "X"
    });
  };

  divide = () => {
    this.setState({
      operator: "/"
    });
  };

  plusminus = () => {
    this.setState({
      result: this.state.result * -1
    });
  };

  squareRoot = () => {
    this.setState({
      result: Math.sqrt(this.state.result).toString()
    });
  };

  updateResult = e => {
    this.setState({
      result : e
    })
  }

  // componentDidUpdate() {
  //     this.setState({
  //       i: this.state.result !=='0' ?'C' :'AC'
  //     })
  // }

  render() {
    let num;
    if (this.state.operator === null) {
      num = <Display result={this.state.result} />;
    } else {
      num = <Display result={this.state.result2} />;
    }
    return (
      <div className="App">
        {num}
        {/* <Display ref={this.display} result={this.state.result} /> */}

        <Button buttonPressed={this.buttonPressed} i={this.state.i}/>
        <History resultHistory={this.state.resultHistory} updateResult={this.updateResult}/>
      </div>
    );
  }
}

export default App;
