import React from "react";
import Img from "../images/kvothe.png";

const Kvothe = () => {
  return (
    <div className="kvotheCard card">
      <img src={Img} alt="Kvothe" />
      <p>Kvothe</p>
    </div>
  );
};

export default Kvothe;
