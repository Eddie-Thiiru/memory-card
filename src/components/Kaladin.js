import React from "react";
import Img from "../images/kaladin.png";

const Kaladin = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="kaladin" onClick={cardClicked}>
      <img src={Img} alt="Kaladin Stormblessed" />
      <p>Kaladin Stormblessed</p>
    </div>
  );
};

export default Kaladin;
