import React from "react";

const Title: React.FC = (props) => {
  return (
    <div className="flex items-center justify-end max-w-xs bg-primary py-1.5 text-2xl font-bold tracking-widest px-5 rounded-r-xl">
      {props.children}
    </div>
  );
};

export default Title;
