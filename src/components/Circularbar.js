import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import React from "react";

function Circularbar() {
  const percentage = 80;
  return (
    <div>
      <CircularProgressbar
      className=" text-justify"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "12px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `#374557`,
          textColor: "#374557",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
      ;
    </div>
  );
}

export default Circularbar;
