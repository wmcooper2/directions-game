import React from "react";

const ControlButton = (props) => {
  return (
    <div className={props.name} onClick={() => props.handleClick()}>
      {props.name}
    </div>
  );
};

class Dpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: this.NORTH,
      dpadLabels: ["up", "down", "left", "right"],
    };
  }

  render() {
    return (
      <div className="dpad-signs">
        <div
          className="dpad-sign"
          onClick={() => this.props.handleClick("up")}
          id="up"
        >
          {this.state.dpadLabels[0]}
        </div>
        <div
          className="dpad-sign"
          onClick={() => this.props.handleClick("down")}
          id="down"
        >
          {this.state.dpadLabels[1]}
        </div>
        <div
          className="dpad-sign"
          onClick={() => this.props.handleClick("left")}
          id="left"
        >
          {this.state.dpadLabels[2]}
        </div>
        <div
          className="dpad-sign"
          onClick={() => this.props.handleClick("right")}
          id="right"
        >
          {this.state.dpadLabels[3]}
        </div>
        <div
          className="dpad-sign"
          onClick={() => this.props.handleClick("start")}
          id="center"
        >
          START
        </div>
      </div>
    );
  }
}

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.clickReset = this.clickReset.bind(this);
    this.clickTimer = this.clickTimer.bind(this);
    this.clickDpad = this.clickDpad.bind(this);

    this.NORTH = Symbol();
    this.SOUTH = Symbol();
    this.EAST = Symbol();
    this.WEST = Symbol();
    this.LEFT = Symbol();
    this.RIGHT = Symbol();
    this.UP = Symbol();
    this.DOWN = Symbol();
    this.CHANGE_DIRECTION = Symbol();
    this.addInstruction = this.props.addInstruction;
    this.clearInstructions = this.props.clearInstructions;
  }

  clickReset = (props) => {
    console.log("clicked Reset");
    this.clearInstructions();
  };

  clickTimer = (props) => {
    console.log("clicked Timer");
  };

  clickDpad = (props) => {
    this.addInstruction(props);
  };

  render() {
    return (
      <React.Fragment>
        <Dpad handleClick={this.clickDpad} />
        <div className="buttons">
          <ControlButton name="Timer Start" handleClick={this.clickTimer} />
          <ControlButton name="Reset Choices" handleClick={this.clickReset} />
        </div>
      </React.Fragment>
    );
  }
}

export default Controls;
