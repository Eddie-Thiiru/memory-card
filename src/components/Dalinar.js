import React from "react";
import Img from "../images/dalinar.png";

const Dalinar = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="dalinar" onClick={cardClicked}>
      <img src={Img} alt="Dalinar Kholin" />
      <p>Dalinar Kholin</p>
    </div>
  );
};

export default Dalinar;
