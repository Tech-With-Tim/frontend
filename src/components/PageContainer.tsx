import React from "react";

const PageContainer: React.FC = ({ children }) => {
  return <div className="container my-5 flex flex-col gap-24 mdlg:max-w-4xl">{children}</div>;
};

export default PageContainer;
