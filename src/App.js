import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      total: '0',
      mathPlus: '',
      mathMinus: '',
      mathMultiply: '',
      mathDivide: ''
    }
  }



  addZero = () => {
    this.setState({
      total: this.state.total + "0"
    })
  }

  addOne = () => {
    this.setState({
      total: this.state.total + "1"
    })
  }

  addTwo = () => {
    this.setState({
      total: this.state.total + "2"
    })
  }

  addThree = () => {
    this.setState({
      total: this.state.total + "3"
    })
  }

  addFour = () => {
    this.setState({
      total: this.state.total + "4"
    })
  }

  addFive = () => {
    this.setState({
      total: this.state.total + "5"
    })
  }
  
  addSix = () => {
    this.setState({
      total: this.state.total + "6"
    })
  }

  addSeven = () => {
    this.setState({
      total: this.state.total + "7"
    })
  }

  addEight = () => {
    this.setState({
      total: this.state.total + "8"
    })
  }

  addNine = () => {
    this.setState({
      total: this.state.total + "9"
    })
  }

  add = () => {
    
  }


  render() {
    return (
      <div className="App">
        {this.state.total} <br/>

        <input type="text"/>
        <br/>
        <br/>
        <button onClick={() => this.addZero()}>0</button>
        <button onClick={() => this.addOne()}>1</button>
        <button onClick={() => this.addTwo()}>2</button>
        <button onClick={() => this.addThree()}>3</button>
        <button onClick={() => this.addFour()}>4</button>
        <button onClick={() => this.addFive()}>5</button>
        <button onClick={() => this.addSix()}>6</button>
        <button onClick={() => this.addSeven()}>7</button>
        <button onClick={() => this.addEight()}>8</button>
        <button onClick={() => this.addNine()}>9</button>
        <br/>
        <br/>
        <button onClick={() => this.add()}>+</button>
        <button onClick={() => this.subtract()}>-</button>
        <button onClick={() => this.divide()}>/</button>
        <button onClick={() => this. multiply()}>*</button>
      </div>
    );
  }
}

export default App;
