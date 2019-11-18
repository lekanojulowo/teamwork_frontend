import React from 'react';
import logo from './images/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Teamwork Frontend.
        </p> 
        <p>
          The goal of this application is to facilitate more interaction between colleagues and promote team bonding.
        </p>       
      </header>
    </div>
  );
}

export default App;
