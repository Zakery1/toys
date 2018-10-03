import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      total: ''
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.total} <br/>
          
        <input type="text"/>
      </div>
    );
  }
}

export default App;
