import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetter }) => {
  const { status } = individualLetter;
  let statusclass;
  if (status === "correct") {
    statusclass = "test-letter-correct";
  } else if (status === "incorrect") {
    statusclass = "test-letter-incorrect";
  } else {
    statusclass = "test-letter-not-attempted";
  }
  return (
    <span className={`test-letter ${statusclass}`}>
      {individualLetter.testLetter}
    </span>
  );
};

export default TestLetter;
