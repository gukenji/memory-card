import React, { useState, useEffect } from "react";
import "../styles/Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.src} onClick={props.onClick} />
      <p>{props.description}</p>
    </div>
  );
}
