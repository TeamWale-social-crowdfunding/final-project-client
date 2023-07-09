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
          <div className="header flex flex-row justify-between items-center flex-none">
            <div className="w-8 h-8 relative"></div>
            <h2 className="text-2xl hidden md:block group-hover:block text-gray-800 dark:text-white">
              Chat
            </h2>
            <a
              href="#"
              className="block rounded-full text-gray-800 dark:text-white h-10 p-2 md:block group-hover:block"
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
              </svg>
            </a>
          </div>
          <div className="search-box p-4 flex-none">
            <form>
              <div className="relative">
                <label>
                  <input
                    className="rounded-full py-2 pr-6 pl-10 w-full bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none text-gray-800 focus:shadow-md transition duration-300 ease-in"
                    type="text"
                    placeholder="Search Messenger"
                  />
                  <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill="#bbb"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </span>
                </label>
              </div>
            </form>
          </div>
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
