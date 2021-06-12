import React from "react";

const PageContainer: React.FC = ({ children }) => {
  return (
    <div className="container myb-5 mt-16 flex flex-col gap-24 md:max-w-4xl lg:max-w-7xl">
      {children}
    </div>
  );
};

export default PageContainer;
