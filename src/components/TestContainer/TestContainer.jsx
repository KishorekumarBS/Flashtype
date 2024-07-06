import React from "react";
import "./TestContainer.css";
import TryAgain from "../Tryagain/Tryagain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

export default function TestContainer({ words, characters, wpm }) {
  return (
    <div className="test-container">
      <div className="typing-challenge-cont" data-aos="fade-up">
        <TypingChallengeContainer words={4} characters={14} wpm={20} />
      </div>

      {/* <div className="try-again-cont">
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div> */}
    </div>
  );
}
