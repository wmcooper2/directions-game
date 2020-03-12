import React from "react";
import City from "./components/city";
import ControlPanel from "./components/controlpanel";
import Cardinal from "./components/cardinals";
import "./App.css";

// console.log("window:", window.screen.width);

const EASY = "easy";
// const HARD = "hard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySize: [4, 4],
      playerStart: [0, 0],
      goal: [4, 4],
      difficulty: EASY,
      instructions: [
        "go straight",
        "turn left",
        "go straight",
        "turn right",
        "turn left"
      ],
      cityW: 0,
      cityH: 0,
      cityX: 0,
      cityY: 0
    };
  }

  componentDidMount() {
    const city = document.getElementById("city");
    console.log("city width: ", city.clientWidth);
    console.log("city height: ", city.clientHeight);
    console.log("city left: ", city.offsetLeft);
    this.setState(() => {
      return {
        cityW: city.clientWidth,
        cityH: city.clientHeight,
        cityX: city.offsetLeft,
        cityY: city.offsetTop
      };
    });
    setTimeout(() => {
      console.log(this.state);
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <div className="gameboard">
          <Cardinal direction="north" initial="N" />
          <div className="gameboard-center">
            <Cardinal direction="west" initial="W" />
            <City />
            <Cardinal direction="east" initial="E" />
          </div>
          <Cardinal direction="south" initial="S" />
        </div>
        <ControlPanel {...this.state} />
      </div>
    );
  }
}

export default App;
