import React from "react";
import Header from "../components/Header";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <SideBar></SideBar>
        {children}
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default DefaultLayout;
