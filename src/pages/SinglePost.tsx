import { useLocation } from "react-router-dom";
import Post from "../components/shared/Post";
import { useEffect, useState } from "react";
import { PostModel } from "../types/post";
import { getSinglePost } from "../services/PostService";
import PostSkeleton from "../components/skeleton/PostSkeleton";

const SinglePost = () => {
  // const location = useLocation();
  // const arrayPath = location.pathname.split("/");
  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  const post_uuid = arrayPath[2];
  const [postInfo, setPostInfo] = useState<PostModel | null>(null);
  useEffect(() => {
    getSinglePost(post_uuid).then((res) => {
      if (res && res.status) {
        setPostInfo(res.data);
      }
    });
  }, [post_uuid]);

  return (
    <div className="flex justify-center py-4">
      <div className="w-content">
        {postInfo ? (
          <Post post={postInfo} />
        ) : (
          <div className="bg-dark-bg rounded-lg p-4">
            <PostSkeleton />
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
