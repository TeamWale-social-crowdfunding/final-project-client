import React from "react";
import Header from "../components/Header";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        {/* <SideBar></SideBar> */}
        {children}
        {/* <RightBar></RightBar> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
