import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

export default function ChallengeSection({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
  loading,
}) {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header">Take a speed test Now!</h1>
      {loading ? (
        <div className="loading-indicator">Loading...</div> // Show loading indicator
      ) : (
        <TestContainer
          selectedParagraph={selectedParagraph}
          timeRemaining={timeRemaining}
          words={words}
          timerStarted={timerStarted}
          characters={characters}
          wpm={wpm}
          testInfo={testInfo}
          onInputChange={onInputChange}
          startAgain={startAgain}
        />
      )}
    </div>
  );
}
