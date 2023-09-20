import React from "react";
import MediaGallery from "./MediaGallery";
import { getTimeDiffString } from "@/src/utils/createdDayTransform";
import { data } from "autoprefixer";

interface ChildProps {
  onClose: (data: any) => void;
  dataPost: any;
}

const ReplyPost = (props: ChildProps) => {
  return (
    <div className="fixed flex items-center justify-center bg-slate-800 bg-opacity-50 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-opacity-100 bg-white rounded-[30px] shadow dark:bg-gray-700 p-4 max-h-[800px] overflow-auto">
          <div className=" absolute right-0 flex items-start justify-between p-4">
            <button
              onClick={props.onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="flex flex-col lg:px-0 px-4 max-w-[572px] ">
            <div className="flex items-start pt-4">
              <img
                className="w-10 h-10 rounded-full object-cover mr-2 shadow"
                src={
                  props.dataPost.user_id.avatar
                    ? props.dataPost.user_id.avatar
                    : "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                }
                alt="avatar"
              />

              <div className="">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900 -mt-1 dark:text-white">
                    {props.dataPost.user_id.firstName +
                      " " +
                      props.dataPost.user_id.lastName}
                  </h3>
                  <small className="text-sm text-gray-700 dark:text-gray-500">
                    {getTimeDiffString(props.dataPost.createdAt)}
                  </small>
                </div>

                <div className="relative">
                  <div className=" absolute w-[2px] h-[100%] bg-gray-200 dark:bg-gray-700 left-[-30px] top-7"></div>
                  <div>
                    <p className=" text-gray-700 mb-2 text-sm dark:text-white">
                      {props.dataPost.content}
                    </p>
                  </div>
                  <div>
                    {props.dataPost.media && (
                      <MediaGallery data={props.dataPost.media}></MediaGallery>
                    )}
                  </div>
                </div>

                <form className="mb-6">
                  <label className="sr-only">Your message</label>
                  <div className="flex items-center py-1 rounded-lg">
                    <input
                      id="chat"
                      className="block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-none  dark:text-white border-none focus:ring-0 "
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReplyPost;
