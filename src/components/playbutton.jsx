import React from "react";

const PlayButton = props => {
  return (
    <div id="playbtn" onClick={() => props.handleClick()}>
      Play
    </div>
  );
};

export default PlayButton;
