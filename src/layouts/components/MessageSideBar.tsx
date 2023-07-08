import MessageCard from "@/src/pages/messages/components/MessageCard";
import React from "react";

const MessageSideBar = () => {
  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h2 className=" p-3 text-xl text-gray-800 dark:text-white">Chat</h2>
          <ul className=" font-medium">
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
            <li className="">
              <MessageCard></MessageCard>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MessageSideBar;
