import React from "react";
import cb from "classnames";

interface Props {
  title: string;
  passed: boolean;
  difficulty: 0 | 1 | 2;
}

const ChallengeHistory = (props: Props): JSX.Element => {
  return (
    <div className={cb("flex tracking-wider text-base items-center w-full gap-2")}>
      <span
        className={cb("rounded-lg flex-grow py-1 px-3", {
          "bg-red-500": !props.passed,
          "bg-green-500": props.passed,
        })}
      >
        {props.title} - {props.passed ? "Passed" : "Failed"}
      </span>

      <div className="flex gap-1.5">
        <div className={cb("block w-5 h-5 rounded-full bg-green-500")}></div>
        <div
          className={cb(
            "bock w-5 h-5 rounded-full",
            props.difficulty > 0 ? "bg-yellow-500" : "bg-light-gray"
          )}
        ></div>
        <div
          className={cb(
            "block w-5 h-5 rounded-full",
            props.difficulty > 1 ? "bg-red-500" : "bg-light-gray"
          )}
        ></div>
      </div>
    </div>
  );
};

export default ChallengeHistory;
