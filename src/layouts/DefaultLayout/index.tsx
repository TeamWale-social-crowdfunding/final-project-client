import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
      {children}
    </div>
  );
};

export default DefaultLayout;
