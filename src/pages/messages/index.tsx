import MessageLayout from "@/src/layouts/MessageLayout/MessageLayout";
import React from "react";
import MessageBox from "./components/MessageBox";
import MessageChatFooter from "./components/MessageChatFooter";
import MessageGroupRecive from "./components/MessageGroupRecive";
import MessageGroupSent from "./components/MessageGroupSent";
import MessageTime from "./components/MessageTime";

const Messages = () => {
  return (
    <MessageLayout>
      <MessageBox>
        <div className=" relative w-full h-16"></div>
        <MessageGroupRecive></MessageGroupRecive>
        <MessageTime></MessageTime>
        <MessageGroupSent></MessageGroupSent>
        <div className=" relative w-full h-16"></div>
        <MessageChatFooter></MessageChatFooter>
      </MessageBox>
    </MessageLayout>
  );
};

export default Messages;
