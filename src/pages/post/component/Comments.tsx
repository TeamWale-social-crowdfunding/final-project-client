import { mockAvatarUser } from "@/src/constants/mockAvatarUser";
import { mockComments } from "@/src/constants/mockComments";
import React from "react";
import CommentWithRelies from "./CommentWithRelies";
import Comment from "./Comment";

const Comments = (commentsData: { data: any }) => {
  return (
    <div>
      {/* {commentsData.data.map((comment : any) => {
          {comment.replies.length>0 ? <CommentWithRelies data={comment}></CommentWithRelies> : <Comment data={comment}></Comment> }
      })} */}
      {commentsData.data.map((comment : any) => {
          {comment.replies.length>0 ? <div>aaaaaaa</div> : <div>bbbbbbb</div> }
      })}
    </div>
  );
};

export default Comments;
