import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

export default function ChallengeSection() {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header">Take a speed test Now!</h1>
      <TestContainer />
    </div>
  );
}
