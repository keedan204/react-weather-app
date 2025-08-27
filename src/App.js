import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather />
    <footer>
      This project was coded by {" "}<a href="https://github.com/keedan204" target="_blank" rel="noreferrer">K Daniels</a> and is <a href="https://github.com/keedan204/react-weather-app" target="_blank" rel="noreferrer">
open-sourced on Github
    </a>
    </footer>
    </div>
    </div>
  );
}

