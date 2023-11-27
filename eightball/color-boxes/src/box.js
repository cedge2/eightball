import React from "react";
import "./box.css";

function Box({ color }) {
  return (
      <div
          className="box"
          style={{ backgroundColor: color }}
      />
  );
}

export default box;