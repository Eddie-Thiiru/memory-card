import React from "react";
import Img from "../images/geralt.png";

const Geralt = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="geralt" onClick={cardClicked}>
      <img src={Img} alt="Geralt of Rivia" />
      <p>Geralt of Rivia</p>
    </div>
  );
};

export default Geralt;
