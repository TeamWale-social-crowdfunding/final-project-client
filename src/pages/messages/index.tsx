import HeaderOnly from "@/src/layouts/HeaderOnly/HeaderOnly";
import MessageLayout from "@/src/layouts/MessageLayout/MessageLayout";
import React from "react";
import MessageBox from "./components/MessageBox";
import MessageGroupRecive from "./components/MessageGroupRecive";
import MessageGroupSent from "./components/MessageGroupSent";

const Messages = () => {
  return (
    <MessageLayout>
      <MessageBox>
        <div className=" relative w-full h-16"></div>
        <MessageGroupRecive></MessageGroupRecive>
        <MessageGroupSent></MessageGroupSent>
      </MessageBox>
    </MessageLayout>
  );
};

export default Messages;
