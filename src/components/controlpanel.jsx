import React from "react";
import InstructionsList from "./instructionslist";
import Intersection from "./intersection";
import BlockCenter from "./blockcenter";
import Controls from "./controls";
import Car from "./car";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playersInstructions: null,
      intersectionCoordinates: null,
      intersections: null,
      blockCenterCoordinates: null,
      blockCenters: null,
      dimensions: null,
      leftBoundary: null,
      rightBoundary: null,
      topBoundary: null,
      bottomBoundary: null,
      citySize: [4, 4],

      //indices of intersectionCoordinates
      goal: 24,
      start: 0,
      current: 0,

      car: {
        orientation: "pointup",
        x: 100,
        y: 100,
      },
    };
    this.EASY = Symbol();
    this.HARD = Symbol();
    this.addInstruction = this.addInstruction.bind(this);
    this.calculateIntersections = this.calculateIntersections.bind(this);
    this.calculateBlockCenters = this.calculateBlockCenters.bind(this);
    this.makeIntersections = this.makeIntersections.bind(this);
    this.makeBlockCenters = this.makeBlockCenters.bind(this);
    this.clearInstructions = this.clearInstructions.bind(this);
    this.setBoundaries = this.setBoundaries.bind(this);
    this.moveCarLeft = this.moveCarLeft.bind(this);
    this.moveCarRight = this.moveCarRight.bind(this);
    this.moveCarUp = this.moveCarUp.bind(this);
    this.moveCarDown = this.moveCarDown.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  convertPixelToGridCoords = (props) => {
    console.log("convertPixelToGridCoords", props);
  };

  componentDidMount() {
    const city = document.getElementById("city");
    const dimensions = {
      x: city.offsetLeft,
      y: city.offsetTop,
      w: city.clientWidth,
      h: city.clientHeight,
    };

    //After control panel mounts, get #city element sizes and set as "dimensions" in state
    // calculate intersection coordinates
    // calculate block center coordinates

    // these dimensions are the foundation of the game board grid
    this.setState(() => {
      return {
        dimensions: dimensions,
      };
    });

    setTimeout(() => {
      this.calculateIntersections();
      this.calculateBlockCenters();
    }, 100);

    setTimeout(() => {
      this.makeIntersections();
      this.makeBlockCenters();
      this.setBoundaries();
    }, 300);

    // check the state visually
    setTimeout(() => {
      console.log("State, 600: ", this.state);
    }, 600);

    //calculate the index of the point that the car needs to be at at any given time using modulo and addtion
    //x is ??? + 0-5
    //y is 24

    //after the coordinates are set, then set the starting point of the car
    setTimeout(() => {
      // set the car's initial state
      let newCar = {
        orientation: "pointup",
        x: this.state.intersectionCoordinates[0][0],
        y: this.state.intersectionCoordinates[0][1],
      };

      //update car state
      this.setState(() => {
        return {
          car: newCar,
        };
      });
    }, 1000);
  }

  startAnimation = (props) => {
    // console.log("startAnimation: ", this.state.playersInstructions);
    if (this.state.playersInstructions !== null) {
      for (let instruction of this.state.playersInstructions) {
        switch (instruction) {
          case "up":
            this.moveCarUp();
            break;

          case "down":
            this.moveCarDown();
            break;

          case "left":
            this.moveCarLeft();
            break;

          case "right":
            this.moveCarRight();
            break;
          default:
          //nothing
        }
      }
      //  make sure the car is not going out of bounds
      //  rotate the car
      //  get the coordinate pair of the next place the car will go to (from this.state.intersectionCoordinates)
      //  update the state of the car
      //  wait for the animation to finish
      //  load the next instruction

      //when all of the instructions are finished...
    }
  };

  setBoundaries = () => {
    let leftBoundary = [0, 5, 10, 15, 20];
    let rightBoundary = [4, 9, 14, 19, 24];
    let topBoundary = [0, 1, 2, 3, 4];
    let bottomBoundary = [20, 21, 22, 23, 24];

    this.setState(() => {
      return {
        leftBoundary: leftBoundary,
        rightBoundary: rightBoundary,
        topBoundary: topBoundary,
        bottomBoundary: bottomBoundary,
      };
    });
  };

  moveCarLeft = () => {
    console.log("Left");
    //if car in leftmost column, cant go left
    let car = {};
    car.orientation = this.state.orientation;
    car.x = this.state.xPos;
    car.y = this.state.yPos;
    this.setState(() => {
      return {
        car: car,
      };
    });
  };

  moveCarRight = () => {
    console.log("Right");
    //if car in rightmost column, cant go right
    let car = {};
    car.orientation = this.state.orientation;
    car.x = this.state.xPos;
    car.y = this.state.yPos;
    this.setState(() => {
      return {
        car: car,
      };
    });
  };

  moveCarUp = () => {
    console.log("Up");
    //if car in topmost row, cant go up
    let car = {};
    car.orientation = this.state.orientation;
    car.x = this.state.xPos;
    car.y = this.state.yPos;
    this.setState(() => {
      return {
        car: car,
      };
    });
  };

  moveCarDown = () => {
    console.log("Down");
    //if car in bottommost row, cant go down
    let car = {};
    car.orientation = this.state.orientation;
    car.x = this.state.xPos;
    car.y = this.state.yPos;
    this.setState(() => {
      return {
        car: car,
      };
    });
  };

  clearInstructions = () => {
    this.setState(() => {
      return {
        playersInstructions: [],
      };
    });
  };

  makeIntersections = () => {
    let visuals = this.state.intersectionCoordinates.map(
      (coordinate, index) => (
        <Intersection key={index} x={coordinate[0]} y={coordinate[1]} />
      )
    );
    this.setState(() => {
      return {
        intersections: visuals,
      };
    });
  };

  makeBlockCenters = (props) => {
    let visuals = this.state.blockCenterCoordinates.map((coordinate, index) => (
      <BlockCenter key={index} x={coordinate[0]} y={coordinate[1]} />
    ));
    this.setState(() => {
      return {
        blockCenters: visuals,
      };
    });
  };

  calculateBlockCenters = () => {
    const { x, y, w, h } = this.state.dimensions;
    const blocksX = this.state.citySize[0];
    const blocksY = this.state.citySize[1];
    const stepX = w / blocksX;
    const stepY = h / blocksY;
    let blockCenters = [];
    for (let coordY = y + stepY / 2; coordY < h; coordY += stepY) {
      for (let coordX = x + stepX / 2; coordX < w; coordX += stepX) {
        blockCenters.push([coordX, coordY]);
      }
    }
    this.setState(() => {
      return {
        blockCenterCoordinates: blockCenters,
      };
    });
  };

  calculateIntersections = () => {
    const { x, y, w, h } = this.state.dimensions;
    const blocksX = this.state.citySize[0];
    const blocksY = this.state.citySize[1];
    const stepX = w / blocksX;
    const stepY = h / blocksY;
    let intersectionCoordinates = [];
    for (let coordY = y; coordY <= h + stepY; coordY += stepY) {
      for (let coordX = x; coordX <= w + stepX; coordX += stepX) {
        intersectionCoordinates.push([coordX, coordY]);
      }
    }
    this.setState(() => {
      return {
        intersectionCoordinates: intersectionCoordinates,
      };
    });
  };

  addInstruction = (props) => {
    let newInstructions =
      this.state.playersInstructions === null
        ? []
        : this.state.playersInstructions;

    if (newInstructions.length >= 20) {
      //do nothing
    } else if (props !== "start") {
      newInstructions.push(props);
    }
    this.setState(() => {
      return {
        playersInstructions: newInstructions,
      };
    });

    if (props === "start") {
      this.startAnimation();
    }
  };

  render() {
    return (
      <div className="controlpanel">
        <InstructionsList {...this.state} />
        <Controls
          clearInstructions={this.clearInstructions}
          addInstruction={this.addInstruction}
        />
        {this.state.intersections}
        {this.state.blockCenters}
        <Car {...this.state.car} />
      </div>
    );
  }
}

export default ControlPanel;
