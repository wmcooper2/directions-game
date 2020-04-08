import React from "react";

const Car = (props) => {
  //   console.log("Car: ", props);
  const { x, y, orientation } = props;
  return (
    <div
      id="car"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        position: "absolute",
        transitionDuration: "300ms",
        transitionTimingFunction: "linear"
      }}
      className={orientation}
    >
      car
    </div>
  );
};

export default Car;
