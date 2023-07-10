import HeaderOnly from "@/src/layouts/HeaderOnly/HeaderOnly";
import MessageLayout from "@/src/layouts/MessageLayout/MessageLayout";
import React from "react";
import MessageBox from "./components/MessageBox";
import MessageGroupRecive from "./components/MessageGroupRecive";

const Messages = () => {
  return (
    <MessageLayout>
      <MessageBox>
        <MessageGroupRecive></MessageGroupRecive>
      </MessageBox>
    </MessageLayout>
  );
};

export default Messages;
