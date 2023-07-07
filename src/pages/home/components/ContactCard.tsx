import React from "react";

const ContactCard = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg mx-2 md:mx-auto max-w-md md:max-w-2xl hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex py-2 items-center">
        <div className=" relative">
          <img
            className="w-10 h-10 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <div className="bottom-0 left-7 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></div>
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Brad Adams
        </h3>
      </div>
    </div>
  );
};

export default ContactCard;
