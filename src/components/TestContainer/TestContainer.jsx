import React from "react";
import "./TestContainer.css";

export default function TestContainer({ words, characters, wpm }) {
  return (
    <div className="test-container">
      <div className="try-again-cont">
        <h1>This is the try again space</h1>
      </div>
    </div>
  );
}
