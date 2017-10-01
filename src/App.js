import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './rain2o.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Rain2o Logo" />
          <h1 className="App-title">Joel Rainwater</h1>
        </header>
        <p className="App-intro">
          Welcome to my personal portfolio. Please check back soon for updates.
        </p>
      </div>
    );
  }
}

export default App;
