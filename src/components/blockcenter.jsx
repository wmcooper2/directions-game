import React from "react";

const BlockCenter = (props) => {
  const { x, y } = props;
  return (
    <div
      className="parking-spot"
      style={{ left: `${x}px`, top: `${y}px` }}
    ></div>
  );
};

export default BlockCenter;
