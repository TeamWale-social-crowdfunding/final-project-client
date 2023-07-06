import React from "react";

const PostCard = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-4 md:mx-auto mb-10 max-w-md md:max-w-2xl ">
      <div className="flex items-start px-4 pt-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 -mt-1 dark:text-white">
              Brad Adams
            </h3>
          </div>
          <small className="text-sm text-gray-700 dark:text-white">
            22h ago
          </small>
        </div>
      </div>
      <div className="">
        <p className="px-4 py-2 text-gray-700 text-sm dark:text-white">
          Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
          amet!
        </p>

        <img
          className="h-auto max-w-full"
          src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
          alt="image description"
        />

        <div className="px-4 py-4 flex items-center">
          <div className="flex mr-2 text-gray-700 text-sm mr-3 dark:text-white">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>12</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm mr-8 dark:text-white">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>8</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm mr-4 dark:text-white">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span>share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
