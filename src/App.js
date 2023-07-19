import React, { useEffect, useState } from "react";
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
import uniqid from "uniqid";
import "./styles/App.css";
import "./styles/Cards.css";

let initialComponents = [
  Dalinar,
  Jorg,
  Kaladin,
  Kelsier,
  Kvothe,
  Logen,
  Mat,
  Rand,
  Vin,
  Geralt,
];

const App = () => {
  const [components, setComponents] = useState(initialComponents);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [characters, setCharacters] = useState([
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

  useEffect(() => {
    randomizeCards();
  }, []);

  const handleClicks = (e) => {
    addScore(e);
    randomizeCards();
  };

  const addScore = (e) => {
    const characterName = e.target.id;
    let gameOver = false;

    setCharacters(
      characters.map((item) => {
        if (item.name === characterName) {
          if (item.hit === false) {
            setScore(score + 1);
            return { ...item, hit: true };
          } else {
            gameOver = true;
            return item;
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
      setCharacters(
        characters.map((item) => {
          return { ...item, hit: false };
        })
      );

      gameOver = false;
    }
  };

  const randomizeCards = () => {
    const isNumVisited = (array, num) => {
      for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element === num) {
          return true;
        }
      }
      return false;
    };

    let randomComponents = [];
    let visited = [];
    let copy = [...components];

    while (randomComponents.length < 10) {
      let randomNum = Math.floor(Math.random() * 10);
      const numVisited = isNumVisited(visited, randomNum);

      if (numVisited === false) {
        let component = copy[randomNum];

        randomComponents.push(component);
        visited.push(randomNum);
      }
    }

    setComponents(randomComponents);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <p>
            FantasyHeroes
            <br /> <span>Memory Game</span>
          </p>
        </div>
        <div className="scoreBoard">
          <p>
            Score: <span>{score}</span> | Best Score: <span>{bestScore}</span>
          </p>
        </div>
      </div>
      <div className="mainSection">
        <div className="playGround">
          {components.map((item) => {
            let Component = item;
            let id = uniqid();
            return <Component key={id} cardClicked={handleClicks} />;
          })}
        </div>
      </div>
      <div className="footer">copyright @ FantasyHeroes</div>
    </div>
  );
};

export default App;
