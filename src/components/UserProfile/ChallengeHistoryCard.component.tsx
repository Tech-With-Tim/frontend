import React from "react";
import { ChallengeHistoryCardStyle } from "./Styles";
import { DIFFICULTY } from "./Difficulty.constant";

function ChallengeHistoryCard(props) {
  const difficultyClassNames = [
    "dot" + " green",
    "dot" + (props.difficulty !== DIFFICULTY.easy ? " yellow" : ""),
    "dot" + (props.difficulty === DIFFICULTY.hard ? " red" : ""),
    props.difficulty,
  ];
  console.log(difficultyClassNames);
  return (
    <ChallengeHistoryCardStyle>
      <div className={props.solution + " solution-card"}>
        <h5>{"#" + props.no + " " + props.solution}</h5>
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
