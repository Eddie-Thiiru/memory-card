import React from "react";
import Img from "../images/kvothe.png";

const Kvothe = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="kvothe" onClick={cardClicked}>
      <img src={Img} alt="Kvothe" />
      <p>Kvothe</p>
    </div>
  );
};

export default Kvothe;
