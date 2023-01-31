import React, { useState, useEffect } from "react";
import "../styles/Score.css";
export default function Score(props) {
  return (
    <div className="score">
      <p>Score: {props.currentScore}</p>
      <p>Top Score: {props.topScore}</p>
    </div>
  );
}
