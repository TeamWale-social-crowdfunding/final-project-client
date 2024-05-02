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

  const [feedPosts, setFeedPosts] = useState<PostPropDisplayI[]>([]);

  const [page, setPage] = useState(1);

  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useState<any>({});
  const authHttpService = new AuthHttpService();

  const transformPostData = (data: PostPropI[]): PostPropDisplayI[] => {
    if (data) {
      const setFeedPostsData: PostPropDisplayI[] = data.map(
        (feedPost: PostPropI): PostPropDisplayI => {
          const isLiked =
            feedPost.likes.some((like) => like.author_id === currentUser.id) ||
            false;
          const likeCount =
            feedPost.likes.filter((like) => like.unliked === false).length || 0;
          return {
            ...feedPost,
            isLiked: isLiked,
            likeCount: likeCount,
          };
        }
      );
      console.log("setFeedPostsData");
      console.log(setFeedPostsData);
      return setFeedPostsData;
    } else {
      return [];
    }
  };

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
      setFeedPosts(transformPostData(data));
    });
  }, []);

  const loadMore = () => {
    console.log(feedPosts);
    feedApiService.getPublicPosts(page + 1, postsPerPage).subscribe((data) => {
      setFeedPosts((prev: PostPropDisplayI[]) => {
        return [...prev, ...transformPostData(data)];
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
      {feedPosts.map((post: PostPropDisplayI, index: number) => (
        <PostCard data={post} key={post._id}></PostCard>
      ))}
    </div>
  );
};

export default Feed;
