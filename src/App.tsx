import React from "react";
import "./App.css";
import Menu from "./Menu";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <Menu />
      <div className="justify-center items-center flex py-10">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
