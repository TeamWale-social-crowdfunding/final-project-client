import React from "react";

const MessageCard = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex items-start px-4 py-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Brad Adams
            </h3>
          </div>
          <small className="text-sm text-gray-700 dark:text-white">
            Hello, How are you? 👋
          </small>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
