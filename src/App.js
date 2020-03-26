import React from "react";
import City from "./components/city";
import ControlPanel from "./components/controlpanel";
import PlayButton from "./components/playbutton";
import Cardinal from "./components/cardinals";
import "./App.css";

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
      cityY: 0,
      intersections: [],
      parkingSpots: [],
      gameInPlay: false
    };
    this.calculateGrid = this.calculateGrid.bind(this);
    this.clickPlay = this.clickPlay.bind(this);
    this.clickReset = this.clickReset.bind(this);
    this.clickTimer = this.clickTimer.bind(this);
  }

  componentDidMount() {
    if (this.state.gameInPlay) {
      const city = document.getElementById("city");
      this.setState(() => {
        return {
          cityW: city.clientWidth,
          cityH: city.clientHeight,
          cityX: city.offsetLeft,
          cityY: city.offsetTop
        };
      });
    }

    // for debug
    // setTimeout(() => {
    // this.calculateGrid();
    // }, 2000);

    // setTimeout(() => {
    // console.log(this.state);
    // }, 4000);
  }

  calculateGrid = () => {
    let intersections = [];
    let parkingSpots = [];
    const { cityX, cityY, cityW, cityH, citySize } = this.state;
    const blocksX = citySize[0];
    const blocksY = citySize[1];
    const stepX = cityW / blocksX;
    const stepY = cityH / blocksY;
    // console.log("cityX: ", cityX, "cityY: ", cityY);
    // console.log("cityW: ", cityW, "cityH: ", cityH);
    // console.log("blocksX: ", blocksX, "blocksY: ", blocksY);
    // console.log("stepX: ", stepX, "stepY: ", stepY);

    //intersections
    for (let y = cityY; y <= cityH + stepY; y += stepY) {
      for (let x = cityX; x <= cityW + stepX; x += stepX) {
        intersections.push([x, y]);
      }
    }

    //parkingSpots
    for (let y = cityY + stepY / 2; y < cityH; y += stepY) {
      for (let x = cityX + stepX / 2; x < cityW; x += stepX) {
        parkingSpots.push([x, y]);
      }
    }

    // console.log("intersections: ", intersections);
    this.setState(() => {
      return {
        intersections: intersections,
        parkingSpots: parkingSpots
      };
    });
  };

  clickPlay = () => {
    console.log(this.state);
    this.calculateGrid();
    this.setState(() => {
      return {
        gameInPlay: true
      };
    });
  };

  clickReset = props => {
    console.log("clicked Reset");
  };

  clickTimer = props => {
    console.log("clicked Timer");
  };

  render() {
    return (
      <div className="App">
        <div className="gameboard">
          <Cardinal direction="north" initial="N" />
          <div className="gameboard-center">
            <Cardinal direction="west" initial="W" />
            {this.state.gameInPlay ? (
              <City />
            ) : (
              <PlayButton handleClick={this.clickPlay} />
            )}
            <Cardinal direction="east" initial="E" />
          </div>
          <Cardinal direction="south" initial="S" />
        </div>
        <ControlPanel
          {...this.state}
          clickReset={this.clickReset}
          clickTimer={this.clickTimer}
        />
      </div>
    );
  }
}

export default App;
