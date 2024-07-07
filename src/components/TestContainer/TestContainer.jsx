import React from "react";
import "./TestContainer.css";
import TryAgain from "../Tryagain/Tryagain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

export default function TestContainer({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div className="typing-challenge-cont" data-aos="fade-up">
          <TypingChallengeContainer
            words={words}
            characters={characters}
            wpm={wpm}
            selectedParagraph={selectedParagraph}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
}
