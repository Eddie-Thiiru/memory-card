import React from "react";
import Img from "../images/kelsier.png";

const Kelsier = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="kelsier" onClick={cardClicked}>
      <img src={Img} alt="Kelsier" />
      <p>Kelsier</p>
    </div>
  );
};

export default Kelsier;
