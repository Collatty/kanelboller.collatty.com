import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Her skal det bolles!</h1>
        </header>
        <p className="App-intro" />
        <h2>Ingerdienser</h2>450g hvetemel <br /> 0,5 dl sukker <br /> ½ pakke
        fersk gjær <br /> 50 g smeltet smør <br /> 2 dl melk <br /> 1 stk egg{" "}
        <br /> <br /> <h4>Fyll</h4>
        100 g smør <br /> 50 g brukt sukker <br /> 1,5 ss kanel <br /> 1 ts salt{" "}
        <br />
        <img src={require("./assets/kanelbolle1.jpeg")} align="right" />
        <img src={require("./assets/kanelboller2.jpeg")} />
      </div>
    );
  }
}

export default App;
