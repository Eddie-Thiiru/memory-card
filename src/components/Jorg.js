import React from "react";
import Img from "../images/jorg.png";

const Jorg = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="jorg" onClick={cardClicked}>
      <img src={Img} alt="Jorg Ancrath" />
      <p>Jorg Ancrath</p>
    </div>
  );
};

export default Jorg;
