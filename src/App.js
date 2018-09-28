import React, { Component } from "react";
import "./App.css";
import bilde1 from "./assets/kanelbolle1.jpeg";
import bilde2 from "./assets/kanelboller2.jpeg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Her skal det bolles!</h1>
        </header>
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
