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

  const checkCard = (e) => {
    if (e) {
      setAttempts([...attempts, "teste"]);
      console.log(attempts);
      return setScore(currentScore + 1);
    }
    alert("Game over!");
    return updateTopScore();
  };

  const updateTopScore = () => {
    topScore < currentScore ? setTopScore(currentScore) : setTopScore(topScore);
  };

  useEffect(() => {
    document.title = "Score: " + currentScore;
  });

  return (
    <div className="App">
      <Score currentScore={currentScore} topScore={topScore} />
      <div className="cards">
        {images.map((image) => {
          return <Card src={image.src} description={image.description} />;
        })}
      </div>
    </div>
  );
}

export default App;
