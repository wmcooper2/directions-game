import React from "react";
import { EasyDpad, HardDpad } from "./dpads";

const InstructionsList = props => {
  let instructions = [];
  props.instructions.forEach(order =>
    instructions.push(
      <div key={instructions.length} className="instruction">
        {instructions.length + 1 + ") " + order}
      </div>
    )
  );
  return <div className="instruction-list">{instructions}</div>;
};
// const Buttons = props => {};

const ControlPanel = props => {
  const { difficulty, instructions } = props;
  return (
    <div className="controlpanel">
      <InstructionsList instructions={instructions} />
      {difficulty === "easy" ? <EasyDpad /> : <HardDpad />}
      <div className="buttons">
        <div className="timer">Timer</div>
        <div className="resest">Reset</div>
      </div>
    </div>
  );
};

export default ControlPanel;
