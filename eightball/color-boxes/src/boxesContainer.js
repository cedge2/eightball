import React, { useState } from "react";
import Box from "./box";
import "./boxesContainer.css";
import { choice, randInt } from "./random";

const defaultColors = [
  "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
  "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
  "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];

function boxesContainer({ allColors = defaultColors, numBoxes = 16 }) {
  const [boxes, setBoxes] = useState(getInitialRandomColors);

  function getInitialRandomColors() {
    return Array.from(
        { length: numBoxes },
        () => choice(allColors));
  }

  function handleClick(evt) {
    setBoxes(boxes => {
      let idx = randInt(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
      <div>
        <section className="boxesContainer">{boxComponents}</section>
        <button onClick={handleClick}>Change a Box</button>
      </div>
  );
}


export default boxesContainer;
