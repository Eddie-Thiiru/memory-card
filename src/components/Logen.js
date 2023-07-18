import React from "react";
import Img from "../images/logen.png";

const Logen = (props) => {
  const { cardClicked } = props;

  return (
    <div className="card" id="logen" onClick={cardClicked}>
      <img src={Img} alt="Logen Ninefingers" />
      <p>Logen Ninefingers</p>
    </div>
  );
};

export default Logen;
