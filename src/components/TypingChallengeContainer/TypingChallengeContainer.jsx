import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

export default function TypingChallengeContainer({ words, characters, wpm }) {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-contianers">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <TypingChallenge selectedParagraph="Hello World!" />
      </div>
    </div>
  );
}
