import React from "react";
import Header from "../components/Header";
import MessageSideBar from "../components/MessageSideBar";

const MessageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <MessageSideBar></MessageSideBar>
      {children}
    </div>
  );
};

export default MessageLayout;
