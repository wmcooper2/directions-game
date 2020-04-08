import React from "react";
import ControlPanel from "./components/controlpanel";
import Cardinal from "./components/cardinals";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="gameboard">
          <Cardinal direction="north" initial="N" />
          <div className="gameboard-center">
            <Cardinal direction="west" initial="W" />
            <div className="city" id="city"></div>
            <Cardinal direction="east" initial="E" />
          </div>
          <Cardinal direction="south" initial="S" />
        </div>
        <ControlPanel />
      </div>
    );
  }
}

export default App;
