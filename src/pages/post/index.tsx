import DefaultLayout from "@/src/layouts/DefaultLayout";
import { ThemeProvider } from "next-themes";
import React from "react";
import Feed from "../home/components/Feed";
import FeedBody from "../home/components/FeedBody";
import PostFeed from "./component/PostFeed";

const PostContainer = () => {
  return (
    <ThemeProvider attribute="class">
      <DefaultLayout>
        <FeedBody>
          <PostFeed></PostFeed>
        </FeedBody>
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default PostContainer;
