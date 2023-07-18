import React from "react";
import Img from "../images/rand.png";

const Rand = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="rand" onClick={cardClicked}>
      <img src={Img} alt="Rand al'Thor" />
      <p>Rand al'Thor</p>
    </div>
  );
};

export default Rand;
