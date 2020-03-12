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

const ControlButton = props => {
  return (
    <div className={props.name} onClick={() => props.handleClick()}>
      {props.name}
    </div>
  );
};

const ControlPanel = props => {
  const { difficulty, instructions, clickReset, clickTimer } = props;
  return (
    <div className="controlpanel">
      <InstructionsList instructions={instructions} />
      {difficulty === "easy" ? <EasyDpad /> : <HardDpad />}
      <div className="buttons">
        <ControlButton name="Timer" handleClick={clickTimer} />
        <ControlButton name="Reset" handleClick={clickReset} />
      </div>
    </div>
  );
};

export default ControlPanel;
