import React from "react";
import dice_1 from "../images/dice_1.png";
import dice_2 from "../images/dice_2.png";
import dice_3 from "../images/dice_3.png";
import dice_4 from "../images/dice_4.png";
import dice_5 from "../images/dice_5.png";
import dice_6 from "../images/dice_6.png";

function Dice(props) {
  let source = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };

  return <img src={source[props.number]} className="dice-img animate" />;
}

export default Dice;
