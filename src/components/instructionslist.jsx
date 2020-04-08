import React from "react";

const InstructionsList = (props) => {
  const defaultInstructions = ["default up", "default down"];
  //   console.log("InstructionsList: ", props);
  let { playersInstructions } = props;
  if (playersInstructions === null) {
    playersInstructions = defaultInstructions;
  }
  let displayInstructions = [];
  playersInstructions.forEach((order) =>
    displayInstructions.push(
      <div key={displayInstructions.length} className="instruction">
        {displayInstructions.length + 1 + ") " + order}
      </div>
    )
  );
  return <div className="instruction-list">{displayInstructions}</div>;
};

export default InstructionsList;
