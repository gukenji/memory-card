import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Card from "./components/Card";
import Images from "./components/Images";
import React, { useState, useEffect } from "react";

function App() {
  const [currentScore, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [attempts, setAttempts] = useState([]);
  const images = Images();
  const numbers = [];

  const checkCard = (e) => {
    const description = e.target.nextElementSibling.innerHTML;
    attempts.includes(description) ? endGame() : continueGame(description);
  };

  const continueGame = (description) => {
    setAttempts([...attempts, description]);
    setScore(currentScore + 1);
  };

  const endGame = () => {
    alert("ERRROUUUUUUUU");
    topScore < currentScore ? setTopScore(currentScore) : setTopScore(topScore);
    setAttempts([]);
    setScore(0);
  };

  const generateRandomNumber = () => {
    const limit = images.length - 1;
    return Math.floor(Math.random() * (limit + 1));
  };

  useEffect(() => {
    document.title = "Score: " + currentScore;
  });

  return (
    <div className="App">
      <Score currentScore={currentScore} topScore={topScore} />
      <div className="cards">
        {images.map((image) => {
          let random_number = generateRandomNumber();
          do {
            random_number = generateRandomNumber();
          } while (numbers.includes(random_number) == true);
          numbers.push(random_number);
          return (
            <Card
              src={images[random_number].src}
              description={images[random_number].description}
              onClick={checkCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
