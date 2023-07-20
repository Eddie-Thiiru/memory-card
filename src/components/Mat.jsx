import React from "react";
import Img from "../images/mat.png";

const Mat = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="mat" onClick={cardClicked}>
      <img src={Img} alt="Mat Cauthon" />
      <p>Mat Cauthon</p>
    </div>
  );
};

export default Mat;
