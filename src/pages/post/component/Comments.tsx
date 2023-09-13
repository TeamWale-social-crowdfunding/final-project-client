import { mockAvatarUser } from "@/src/constants/mockAvatarUser";
import { mockComments } from "@/src/constants/mockComments";
import React from "react";
import CommentWithRelies from "./CommentWithRelies";

const Comments = (commentsData: { data: any }) => {
  return (
    <div>
      <CommentWithRelies></CommentWithRelies>
    </div>
  );
};

export default Comments;
