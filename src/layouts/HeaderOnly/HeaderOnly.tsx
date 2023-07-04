import React from "react";
import Header from "../components/Header";

const HeaderOnly = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default HeaderOnly;
