import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <p className="result">{result}</p>
        <div className="calculator">
          <button type="button" className="grayButton">AC</button>
          <button type="button" className="grayButton">+/-</button>
          <button type="button" className="grayButton">% </button>
          <button type="button" className="orangeButton">÷</button>
          <button type="button" className="grayButton">7</button>
          <button type="button" className="grayButton">8</button>
          <button type="button" className="grayButton">9</button>
          <button type="button" className="orangeButton">x</button>
          <button type="button" className="grayButton">4</button>
          <button type="button" className="grayButton">5</button>
          <button type="button" className="grayButton">6</button>
          <button type="button" className="orangeButton">-</button>
          <button type="button" className="grayButton">1</button>
          <button type="button" className="grayButton">2</button>
          <button type="button" className="grayButton">3</button>
          <button type="button" className="orangeButton">+</button>
          <button type="button" className="grayButton-0">0</button>
          <button type="button" className="grayButton">.</button>
          <button type="button" className="orangeButton">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
