import React, { useState } from "react";
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
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [dalinar, setDalinar] = useState({ hit: false });
  const [jorg, setJorg] = useState({ hit: false });
  const [kaladin, setKaladin] = useState({ hit: false });
  const [kelsier, setKelsier] = useState({ hit: false });
  const [kvothe, setKvothe] = useState({ hit: false });
  const [logen, setLogen] = useState({ hit: false });
  const [mat, setMat] = useState({ hit: false });
  const [rand, setRand] = useState({ hit: false });
  const [geralt, setGeralt] = useState({ hit: false });
  const [vin, setVin] = useState({ hit: false });

  return (
    <div className="App">
      <div className="header">
        <h1>Hello</h1>
      </div>
      <div className="mainSection">
        <div className="scoreBoard">
          <div>Current Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
        <div className="playGround">
          <Dalinar />
          <Jorg />
          <Kaladin />
          <Kelsier />
          <Kvothe />
          <Logen />
          <Mat />
          <Rand />
          <Geralt />
          <Vin />
        </div>
      </div>
    </div>
  );
};

export default App;
