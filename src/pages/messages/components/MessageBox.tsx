import React from "react";
import MessageBoxHeader from "./MessageBoxHeader";

const MessageBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-96 bg-white dark:bg-gray-800 min-h-screen">
      <MessageBoxHeader></MessageBoxHeader>
      {children}
    </div>
  );
};

export default MessageBox;
