import React from "react";
import Img from "../images/rand.png";

const Rand = () => {
  return (
    <div className="randCard card">
      <img src={Img} alt="Rand al'Thor" />
      <p>Rand al'Thor</p>
    </div>
  );
};

export default Rand;
