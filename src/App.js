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
  const [hitStatus, setHitStatus] = useState([
    { name: "dalinar", hit: false },
    { name: "jorg", hit: false },
    { name: "kaladin", hit: false },
    { name: "kelsier", hit: false },
    { name: "kvothe", hit: false },
    { name: "logen", hit: false },
    { name: "mat", hit: false },
    { name: "rand", hit: false },
    { name: "geralt", hit: false },
    { name: "vin", hit: false },
  ]);

  const handleClicks = (e) => {
    const characterName = e.target.id;
    let gameOver = false;

    setHitStatus(
      hitStatus.map((item) => {
        if (item.name === characterName) {
          if (item.hit === false) {
            setScore(score + 1);
            return { ...item, hit: true };
          } else {
            gameOver = true;
          }
        } else {
          return item;
        }
      })
    );

    if (gameOver === true) {
      let value = bestScore > score ? bestScore : score;

      setScore(0);
      setBestScore(value);
      setHitStatus(
        hitStatus.map((item) => {
          return { ...item, hit: false };
        })
      );

      gameOver = false;
    }
  };

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
          <Dalinar cardClicked={handleClicks} />
          <Jorg cardClicked={handleClicks} />
          <Kaladin cardClicked={handleClicks} />
          <Kelsier cardClicked={handleClicks} />
          <Kvothe cardClicked={handleClicks} />
          <Logen cardClicked={handleClicks} />
          <Mat cardClicked={handleClicks} />
          <Rand cardClicked={handleClicks} />
          <Geralt cardClicked={handleClicks} />
          <Vin cardClicked={handleClicks} />
        </div>
      </div>
    </div>
  );
};

export default App;
