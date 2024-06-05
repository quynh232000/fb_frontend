import { useEffect, useState } from "react";
import GroupSideBar from "./GroupSideBar";
import { getPostFeed } from "../../services/GroupService";
import Post from "../../components/shared/Post";
import PostSkeleton from "../../components/skeleton/PostSkeleton";
const Groups = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostFeed().then((res) => {
      if (res && res.status) {
        setPosts(res.data);
      }
    });
  }, []);

  return (
    <div className="flex h-full">
      <GroupSideBar />
      <div className="flex-1 flex justify-center overflow-y-scroll scrollbar_custom">
        <div className="flex flex-col py-4 gap-4 w-full md:w-content ">
          <div className="text-text font-medium py-2">Hoạt động gần đây</div>
          <div className="flex flex-col gap-4">
            {posts && posts.length > 0 ? (
              posts.map((post, index) => {
                return <Post key={index} post={post} />;
              })
            ) : (
              <div className="flex flex-col gap-4">
                <div className="bg-dark-bg rounded-lg p-4">
                  <PostSkeleton />
                </div>
                <div className="bg-dark-bg rounded-lg p-4">
                  <PostSkeleton />
                </div>
                <div className="bg-dark-bg rounded-lg p-4">
                  <PostSkeleton />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
