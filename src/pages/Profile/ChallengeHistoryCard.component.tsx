import React from "react";
import { ChallengeHistoryCardStyle } from "./Styles";
import { DIFFICULTY } from "./constants";

interface Props {
  difficulty: string;
  solution: string;
  no: number;
}

function ChallengeHistoryCard({ difficulty, solution, no }: Props): JSX.Element {
  const difficultyClassNames = [
    "dot" + " green",
    "dot" + (difficulty !== DIFFICULTY.easy ? " yellow" : ""),
    "dot" + (difficulty === DIFFICULTY.hard ? " red" : ""),
    difficulty,
  ];
  return (
    <ChallengeHistoryCardStyle>
      <div className={solution + " solution-card"}>
        <h5>{"#" + no + " " + solution}</h5>
      </div>
      <div className={"difficulty-meter"}>
        <div className={difficultyClassNames[0]}></div>
        <div className={difficultyClassNames[1]}></div>
        <div className={difficultyClassNames[2]}></div>
      </div>
    </ChallengeHistoryCardStyle>
  );
}

export default ChallengeHistoryCard;
