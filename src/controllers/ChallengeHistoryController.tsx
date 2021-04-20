import React from "react";
import ChallengeHistory from "../components/ChallengeHistory";

const ChallengeHistoryController = (props: { className: string }): JSX.Element => {
  const results: { title: string; passed: boolean; difficulty: 0 | 1 | 2 }[] = [
    {
      title: "Challenge 1",
      passed: true,
      difficulty: 0,
    },
    {
      title: "Challenge 2",
      passed: true,
      difficulty: 1,
    },
    {
      title: "Challenge 3",
      passed: true,
      difficulty: 2,
    },
    {
      title: "Challenge 4",
      passed: false,
      difficulty: 0,
    },
  ];

  return (
    <div className={`flex flex-col gap-2.5 ${props.className}`}>
      {results.map((result, key) => (
        <ChallengeHistory key={key} {...result} />
      ))}
    </div>
  );
};

export default ChallengeHistoryController;
