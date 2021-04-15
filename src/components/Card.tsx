import React, { HTMLAttributes } from "react";
import cb from "classnames";

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={cb(className, "bg-white border border-b-4 px-3 py-2 bg-opacity-10")} {...props}>
      {children}
    </div>
  );
};

export default Card;
