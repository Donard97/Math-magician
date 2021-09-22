import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div>
        <p className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <div className="calculator">
          <button type="button" className="grayButton" name="AC" onClick={(e) => this.handleEvent(e.target.name)}>AC</button>
          <button type="button" className="grayButton" name="+/-" onClick={(e) => this.handleEvent(e.target.name)}>+/-</button>
          <button type="button" className="grayButton" name="%" onClick={(e) => this.handleEvent(e.target.name)}>% </button>
          <button type="button" className="orangeButton" name="÷" onClick={(e) => this.handleEvent(e.target.name)}>÷</button>
          <button type="button" className="grayButton" name="7" onClick={(e) => this.handleEvent(e.target.name)}>7</button>
          <button type="button" className="grayButton" name="8" onClick={(e) => this.handleEvent(e.target.name)}>8</button>
          <button type="button" className="grayButton" name="9" onClick={(e) => this.handleEvent(e.target.name)}>9</button>
          <button type="button" className="orangeButton" name="x" onClick={(e) => this.handleEvent(e.target.name)}>x</button>
          <button type="button" className="grayButton" name="4" onClick={(e) => this.handleEvent(e.target.name)}>4</button>
          <button type="button" className="grayButton" name="5" onClick={(e) => this.handleEvent(e.target.name)}>5</button>
          <button type="button" className="grayButton" name="6" onClick={(e) => this.handleEvent(e.target.name)}>6</button>
          <button type="button" className="orangeButton" name="-" onClick={(e) => this.handleEvent(e.target.name)}>-</button>
          <button type="button" className="grayButton" name="1" onClick={(e) => this.handleEvent(e.target.name)}>1</button>
          <button type="button" className="grayButton" name="2" onClick={(e) => this.handleEvent(e.target.name)}>2</button>
          <button type="button" className="grayButton" name="3" onClick={(e) => this.handleEvent(e.target.name)}>3</button>
          <button type="button" className="orangeButton" name="+" onClick={(e) => this.handleEvent(e.target.name)}>+</button>
          <button type="button" className="grayButton-0" name="0" onClick={(e) => this.handleEvent(e.target.name)}>0</button>
          <button type="button" className="grayButton" name="." onClick={(e) => this.handleEvent(e.target.name)}>.</button>
          <button type="button" className="orangeButton" name="=" onClick={(e) => this.handleEvent(e.target.name)}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
