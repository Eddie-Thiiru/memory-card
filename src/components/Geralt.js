import React from "react";
import Img from "../images/geralt.png";

const Geralt = () => {
  return (
    <div className="geraltCard card">
      <img src={Img} alt="Geralt of Rivia" />
      <p>Geralt of Rivia</p>
    </div>
  );
};

export default Geralt;
