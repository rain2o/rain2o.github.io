import React, { Component } from 'react';
import logo from './rain2o.png';
import './App.css';
import FontAwesome from 'react-fontawesome';

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
          <div className="profiles">
              <p>In the meantime find out more about me at the following locations.</p>
              <FontAwesome
                  className='linkedin profile fa-stack'
                  name='linkedin'
                  size='2x'
                  tag="a"
                  href="https://www.linkedin.com/in/joelrainwater/"
                  target="_blank"
              />
              <a className="fa-stack fa-lg profile github"
                 href="https://github.com/rain2o"
                 target="_blank">
                  <FontAwesome
                      name="circle"
                      stack="2x"
                      inverse={true}
                  />
                  <FontAwesome
                      className='github profile'
                      name='github'
                      size='2x'
                      href="https://linkedin.com"
                      stack="1x"
                  />
              </a>
              <FontAwesome
                  className='profile fa-stack'
                  name='stack-overflow'
                  size='2x'
                  tag="a"
                  href="https://stackoverflow.com/users/3489599/rain2o"
                  target="_blank"
              />
          </div>
      </div>
    );
  }
}

export default App;
