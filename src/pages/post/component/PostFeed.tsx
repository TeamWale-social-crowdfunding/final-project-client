import { PostPropI } from "@/src/context/model/post.model";
import { FeedHttpService } from "@/src/services/newfeed/httpFeed.service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Post from "./Post";
const PostFeed = () => {
  const router = useRouter();

  const feedApiService = new FeedHttpService();
  const [feedPost, setFeedPost] = useState<PostPropI>();

  useEffect(() => {
    const { postId } = router.query;
    feedApiService.getPost(String(postId)).subscribe((data) => {
      setFeedPost(data);
    });
  }, [router.query]);

  return <div>{feedPost && <Post data={feedPost}></Post>}</div>;
};

export default PostFeed;
