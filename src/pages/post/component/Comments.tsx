import React from "react";
import Comment from "./Comment";

const Comments = (commentsData: { data: any }) => {
  return (
    <div>
      {commentsData.data && commentsData.data.map((comment: any) => (
        <Comment data={comment}></Comment>
      ))}
    </div>
  );
};

export default Comments;
