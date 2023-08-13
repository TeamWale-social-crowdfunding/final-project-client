import { postsPerPage } from "@/src/constants";
import { PostPropI } from "@/src/context/model/post.model";
import { FeedHttpService } from "@/src/services/newfeed/httpFeed.service";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Feed = () => {
  const feedApiService = new FeedHttpService();

  const [feedPosts, setFeedPosts] = useState<PostPropI[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    feedApiService.getPublicPosts(page, postsPerPage).subscribe((data) => {
      setFeedPosts(data);
    });
  }, []);

  const loadMore = () => {
    console.log(feedPosts);
    feedApiService.getPublicPosts(page, postsPerPage).subscribe((data) => {
      setFeedPosts((prev: PostPropI[]) => {
        return [...prev, ...data];
      });
      setPage((prevPage) => prevPage + 1);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (isAtBottom) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore]);

  return (
    <div>
      {feedPosts.map((post: PostPropI, index: number) => (
        <PostCard data={post} key={post._id}></PostCard>
      ))}
    </div>
  );
};

export default Feed;
