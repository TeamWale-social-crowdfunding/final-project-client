import { FeedHttpService } from "@/src/services/newfeed/httpFeed.service";
import React, { useEffect, useState } from "react";
import PostCard from "../../home/components/PostCard";

const ProfilePosts = (profilePosts: { data: string }) => {
  const feedService = new FeedHttpService();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    feedService.getProfilePosts(profilePosts.data).subscribe((data) => {
      setPosts(data);
    });
    console.log(profilePosts.data);
  }, []);

  return <div> 
    { posts[0] !== null && posts.map((post) => <PostCard data={post}></PostCard>)}
  </div>
};

export default ProfilePosts;
