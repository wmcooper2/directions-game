import React from "react";

const Intersection = (props) => {
  const { x, y } = props;
  return (
    <div
      className="intersection"
      style={{ left: `${x}px`, top: `${y}px` }}
    ></div>
  );
};

export default Intersection;
