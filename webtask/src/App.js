import React, { Component } from 'react';
import './App.css';
import NavBar from './Header';
import Cars from './Cars';
import Specs from './Specs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Cars/>
        <Specs/>
      </div>
    );
  }
}

export default App;
