import React from "react";

const NewPost = (newpostData: { data: any }) => {
  return (
    <form className="mb-6">
      <label className="sr-only">Your message</label>
      <div className="flex items-center py-1 rounded-lg">
        <img
          className="w-10 h-10 rounded-full"
          src={newpostData.data.avatar}
          alt="Rounded avatar"
        />
        <input
          id="chat"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 rounded-lg bg-none  dark:text-white border-none focus:ring-0 "
          placeholder="Your message..."
        ></input>
        <button
          type="button"
          className="inline-flex w-[60px] h-7 justify-center items-center px-4 py-2 text-sm font-medium text-gray-400 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50 border border-gray-400"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default NewPost;
