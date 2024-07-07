import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

export default function TypingChallengeContainer({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  onInputChange,
  testInfo,
}) {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-contianers">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <TypingChallenge
          onInputChange={onInputChange}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
        />
      </div>
    </div>
  );
}
