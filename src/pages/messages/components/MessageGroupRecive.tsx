import React from "react";

const MessageGroupRecive = () => {
  return (
    <div className="flex flex-row justify-start pl-4 pt-4">
      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
        <img
          className="shadow-md rounded-full w-full h-full object-cover"
          src="https://randomuser.me/api/portraits/women/33.jpg"
          alt=""
        />
      </div>
      <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
        <div className="flex items-center group">
          <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-100 dark:bg-gray-600 max-w-xs lg:max-w-md text-gray-800 dark:text-white">
            Hey! How are you?
          </p>
          <button
            type="button"
            className=" group-hover:block  flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path
                d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
              />
            </svg>
          </button>
          <button
            type="button"
            className=" group-hover:block  flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
            </svg>
          </button>
          <button
            type="button"
            className=" group-hover:block  flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center group">
          <p className="px-6 py-3 rounded-r-full bg-gray-100 dark:bg-gray-600 max-w-xs lg:max-w-md text-gray-800 dark:text-white">
            Shall we go for Hiking this weekend?
          </p>
          <button
            type="button"
            className=" group-hover:block  flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path
                d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
              />
            </svg>
          </button>
          <button
            type="button"
            className=" group-hover:block flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
            </svg>
          </button>
          <button
            type="button"
            className=" group-hover:block flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center group">
          <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-100 dark:bg-gray-600 max-w-xs lg:max-w-md text-gray-800 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            lacus laoreet non curabitur gravida.
          </p>
          <button
            type="button"
            className=" group-hover:block flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path
                d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
              />
            </svg>
          </button>
          <button
            type="button"
            className=" group-hover:block  flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
            </svg>
          </button>
          <button
            type="button"
            className=" group-hover:block  flex-shrink-0 focus:outline-none mx-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray hidden hover:block hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 w-8 h-8 p-2"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageGroupRecive;
