import React from "react";
import Img from "../images/vin.png";

const Vin = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="vin" onClick={cardClicked}>
      <img src={Img} alt="Vin" />
      <p>Vin</p>
    </div>
  );
};

export default Vin;
