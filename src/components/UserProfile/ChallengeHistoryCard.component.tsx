import React from "react";
import { ChallengeHistoryCardStyle } from "./Styles";

function ChallengeHistoryCard(props) {
  return (
    <ChallengeHistoryCardStyle>
      <div className={props.solution}>
        <h5>{"#" + props.no + " " + props.solution}</h5>
      </div>
    </ChallengeHistoryCardStyle>
  );
}

export default ChallengeHistoryCard;
