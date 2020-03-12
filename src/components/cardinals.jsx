import React from "react";

const Cardinal = props => {
  const { direction, initial } = props;
  return (
    <div className="cardinal-direction" id={direction}>
      {initial}
    </div>
  );
};

export default Cardinal;
