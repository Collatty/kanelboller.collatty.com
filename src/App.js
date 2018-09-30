import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Her skal det bolles!</h1>
        </header>
        <div className="App-intro" >
            <h2>Ingredienser</h2>450g hvetemel <br /> 0,5 dl sukker <br /> ½ pakke
            fersk gjær <br /> 50 g smeltet smør <br /> 2 dl melk <br /> 1 stk egg{" "}
            <br /> <br /> <h4>Fyll</h4>
            100 g smør <br /> 50 g brukt sukker <br /> 1,5 ss kanel <br /> 1 ts salt{" "}
            <br />
        </div>
        <div className="pic">
            <img  id = "bilde1" src={require("./assets/kanelbolle1.jpeg")} />
        </div>
        <div className="reci"> Bland sammen mel, sukker og gjær. Smelt smøret og tilsett melken, pass på å ha riktig temperatur. Pisk egget inn i smør/melkeblandingen og bland deretter med tørrvarene. Smør en bolle med litt smør og ha deigen oppi. Dekk med plastfolie.
              La deigen heve i 45 min før du kjevler deigen ut til en stor rektangel og tar på fyllet. Rull sammen og del opp rullen i passende størrelse. Stek bollene midt i ovnen på 200 °C i 10-15 minutter. Avkjøl på rist.{" "}
        </div>
      </div>
    );
  }
}

export default App;
