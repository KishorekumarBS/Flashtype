import React from "react";
import "./TestContainer.css";
import TryAgain from "../Tryagain/Tryagain";

export default function TestContainer({ words, characters, wpm }) {
  return (
    <div className="test-container">
      <div className="try-again-cont">
        <TryAgain />
      </div>
    </div>
  );
}
