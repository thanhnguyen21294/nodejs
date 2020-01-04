import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyFirstComponent from "./MyFirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {React.createElement("h1", null, "HelloWorld")}
        <MyFirstComponent name="Thanh">
          <p>I'm currently playing</p>
          <p>HELLO!</p>
          </MyFirstComponent>
      </header>
    </div>
  );
}

export default App;
