import { mockAvatarUser } from "@/src/constants/mockAvatarUser";
import React from "react";
import { getTimeDiffString } from "@/src/utils/createdDayTransform";

const Comment = (commentData: { data: any }) => {
  console.log(commentData);
  return (
    <div className="flex flex-col lg:px-0 mb-3">
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-start pt-4">
        <img
          className="w-10 h-10 rounded-full object-cover mr-2 shadow"
          src={mockAvatarUser[1]}
          alt="avatar"
        />
        <div className=" w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 -mt-1 dark:text-white">
              {commentData.data.author_id.firstName +
                " " +
                commentData.data.author_id.lastName}
            </h3>
            <small className="text-sm text-gray-700 dark:text-gray-500">
              {getTimeDiffString(commentData.data.createdAt)}
            </small>
          </div>

          <div className="relative">
            <p className=" text-gray-700 mb-2 text-sm dark:text-white">
              {commentData.data.content}
            </p>
            <div className="flex items-center">
              <div className="flex text-gray-700 text-sm dark:text-white">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="flex text-gray-700 text-sm dark:text-white">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
