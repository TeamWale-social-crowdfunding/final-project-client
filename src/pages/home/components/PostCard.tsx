import MediaGallery from "@/src/components/ui/MediaGallery";
import ReplyPost from "@/src/components/ui/ReplyPost";
import { PostPropI } from "@/src/context/model/post.model";
import { getTimeDiffString } from "@/src/utils/createdDayTransform";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const PostCard = (postData: { data: PostPropI }) => {
  const [showReplyModal, setShowReplyModal] = useState(false);

  const handleReply = () => {
    setShowReplyModal(!showReplyModal);
  };

  return (
    <div className="flex flex-col mb-10 lg:px-0 px-4 max-w-[572px] ">
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-start pt-4">
        <img
          className="w-10 h-10 rounded-full object-cover mr-2 shadow"
          src={
            postData.data.user_id.avatar
              ? postData.data.user_id.avatar
              : "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          alt="avatar"
        />

        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 -mt-1 dark:text-white">
              {postData.data.user_id.firstName +
                " " +
                postData.data.user_id.lastName}
            </h3>
            <small className="text-sm text-gray-700 dark:text-gray-500">
              {getTimeDiffString(postData.data.createdAt)}
            </small>
          </div>

          <div className="relative">
            <div className=" absolute w-[2px] h-[90%] bg-gray-200 dark:bg-gray-700 left-[-30px] top-7"></div>
            <div>
              <p className=" text-gray-700 mb-2 text-sm dark:text-white">
                {postData.data.content}
              </p>
            </div>
            <div>
              {postData.data.media && (
                <MediaGallery data={postData.data.media}></MediaGallery>
              )}
            </div>

            <div className="flex items-center">
              <button
                id="likeBtn"
                type="button"
                className="like-btn inline-flex w-8 h-8 justify-center items-center p-1 text-sm font-medium text-gray-600 bold rounded-full hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <button
                onClick={handleReply}
                type="button"
                className="inline-flex w-8 h-8 justify-center items-center p-1 text-sm font-medium text-gray-600 bold rounded-full hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex w-8 h-8 justify-center items-center p-1 text-sm font-medium text-gray-600 bold rounded-full hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
            <Link href={`/post?postId=${postData.data._id}`}>
              <div className="flex items-center my-2 ">
                <div className="text-gray-600 -mt-1 dark:text-white text-xs">
                  {`${postData.data.comments?.length} reply`}{" "}
                </div>
                <div className="bg-gray-600 w-1 h-1 rounded-full m-2"></div>
                <div className="text-gray-600 -mt-1 dark:text-white text-xs">
                  {`${postData.data.likes?.length} likes`}{" "}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {showReplyModal && <ReplyPost onClose={handleReply} dataPost={postData.data}></ReplyPost>}
    </div>
  );
};

export default PostCard;
