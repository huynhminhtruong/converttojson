import React, { Component } from 'react';
import logo from './icon.png';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Team Management</h2>
        </div>
      </div>
    );
  }
}

export default App;
