import { postsPerPage } from "@/src/constants";
import { PostPropDisplayI, PostPropI } from "@/src/context/model/post.model";
import { AuthHttpService } from "@/src/services/authentication/httpAuth.service";
import { FeedHttpService } from "@/src/services/newfeed/httpFeed.service";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import PostCard from "./PostCard";

const Feed = () => {
  const feedApiService = new FeedHttpService();

  const [feedPosts, setFeedPosts] = useState<PostPropI[]>([]);

  const [page, setPage] = useState(1);

  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useState<any>({});
  const authHttpService = new AuthHttpService();

  // const setFeedPostsData = (data: PostPropI[]): PostPropDisplayI[] => {

  // };

  useEffect(() => {
    if (session) {
      authHttpService.getCurrentUser().subscribe((data) => {
        setCurrentUser(data);
      });
    }
  }, [session]);

  useEffect(() => {
    feedApiService.getPublicPosts(page, postsPerPage).subscribe((data) => {
      console.log(data);
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
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
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
      {session && <NewPost data={{ avatar: currentUser.avatar }}></NewPost>}
      {feedPosts.map((post: PostPropI, index: number) => (
        <PostCard data={post} key={post._id}></PostCard>
      ))}
    </div>
  );
};

export default Feed;
