import { mockAvatarUser } from "@/src/constants/mockAvatarUser";
import { mockComments } from "@/src/constants/mockComments";
import React from "react";
import Comment from "./Comment";
import CommentWithRelies from "./CommentWithRelies";

const Comments = (commentsData: { data: any }) => {
  return (
    <div>
      {commentsData.data.map((comment: any) => (
        <Comment data={comment}></Comment>
      ))}
    </div>
  );
};

export default Comments;
