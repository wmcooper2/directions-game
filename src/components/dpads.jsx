import React from "react";

const HardDpad = props => {
  return (
    <div className="dpad-words">
      <div className="dpad-word" id="gostraight">
        up
      </div>
      <div className="dpad-word" id="turnright">
        right
      </div>
      <div className="dpad-word" id="goback">
        down
      </div>
      <div className="dpad-word" id="turnleft">
        left
      </div>
      <div className="dpad-word" id="stop">
        stop
      </div>
    </div>
  );
};

const EasyDpad = props => {
  return (
    <div className="dpad-signs">
      <div className="dpad-sign" id="up">
        up
      </div>
      <div className="dpad-sign" id="down">
        down
      </div>
      <div className="dpad-sign" id="left">
        left
      </div>
      <div className="dpad-sign" id="right">
        right
      </div>
      <div className="dpad-sign" id="center">
        center
      </div>
    </div>
  );
};

export { EasyDpad, HardDpad };
