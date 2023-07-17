import React from "react";
import Dalinar from "./components/Dalinar";
import Jorg from "./components/Jorg";
import Kaladin from "./components/Kaladin";
import Kelsier from "./components/Kelsier";
import Kvothe from "./components/Kvothe";
import Logen from "./components/Logen";
import Mat from "./components/Mat";
import Rand from "./components/Rand";
import Vin from "./components/Vin";
import Geralt from "./components/Geralt";
import "./styles/App.css";
import "./styles/Cards.css";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Hello</h1>
      </div>
      <div className="mainSection">
        <Dalinar />
        <Jorg />
        <Kaladin />
        <Kelsier />
        <Kvothe />
        <Logen />
        <Mat />
        <Rand />
        <Vin />
        <Geralt />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
