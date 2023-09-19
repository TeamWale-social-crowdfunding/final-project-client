import MediaGallery from "@/src/components/ui/MediaGallery";
import { mockComments } from "@/src/constants/mockComments";
import { PostPropI } from "@/src/context/model/post.model";
import { getTimeDiffString } from "@/src/utils/createdDayTransform";
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { FeedHttpService } from "@/src/services/newfeed/httpFeed.service";

const Post = (postData: { data: PostPropI }) => {
  const feedApiService = new FeedHttpService();

  const [comments, setComments] = useState()

  useEffect(() => {
    feedApiService.getAllPostCommets(postData.data._id).subscribe((data) => {
      setComments(data)
    })
  },[])

  return (
    <div className="flex flex-col mb-10 lg:px-0 px-4 ">
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

        <div className="w-full">
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
        </div>
      </div>
      <div className="relative">
        <p className=" text-gray-700 mb-2 text-sm dark:text-white">
          {postData.data.content}
        </p>

        <div>
          {postData.data.media && (
            <MediaGallery data={postData.data.media}></MediaGallery>
          )}
        </div>
      </div>
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center my-2 ">
        <div className="text-gray-600 -mt-1 dark:text-white text-xs">
          {`${postData.data.comments?.length} reply`}{" "}
        </div>
        <div className="bg-gray-600 w-1 h-1 rounded-full m-2"></div>
        <div className="text-gray-600 -mt-1 dark:text-white text-xs">
          {`${postData.data.likes?.length} likes`}{" "}
        </div>
      </div>
      <Comments data={comments}></Comments>
    </div>
  );
};

export default Post;
