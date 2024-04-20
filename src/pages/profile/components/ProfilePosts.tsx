import { FeedHttpService } from "@/src/services/newfeed/httpFeed.service";
import React, { useEffect, useState } from "react";
import PostCard from "../../home/components/PostCard";
import Loading from "@/src/components/ui/Loading";
const ProfilePosts = (profilePosts: { data: string }) => {
  const feedService = new FeedHttpService();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    feedService.getProfilePosts(profilePosts.data).subscribe({
      next: (data) => {
        setPosts(data);
      },
      complete: () => {
        setLoading(false);
      },
    });
  }, []);

  return (
    <div>
      {posts[0] !== null &&
        posts.map((post) => <PostCard data={post}></PostCard>)}
      {loading && <Loading background={false}></Loading>}
    </div>
  );
};

export default ProfilePosts;
