import { useSelector } from "react-redux";
import CreatePost from "../../components/shared/CreatePost";
// import Post from "../../components/shared/Post";
import SidebarUser from "../../components/shared/user/SidebarUser";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import { getPostUser } from "../../services/PostService";
import Post from "../../components/shared/Post";
import PostSkeleton from "../../components/skeleton/PostSkeleton";
import { PostModel } from "../../types/post";

const UserProfile = () => {
  const stateApp = useSelector((state: RootState) => state.appReducer);
  const authState = useSelector((state: RootState) => state.authReducer);
  const user = stateApp.currentUser;
  const [newPost,setNewPost] = useState<PostModel|null>(null)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    user &&
      getPostUser(user.uuid).then((res) => {
        res.status && setPosts(res.data);
      });
  }, [user]);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full  lg:w-sidebar_user">
        <SidebarUser />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        {authState.user.id == stateApp.currentUser?.id ? (
          <CreatePost type="user" id="" setNewPost={setNewPost} />
        ) : (
          ""
        )}

        {newPost && <Post post={newPost} />}
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
  );
};

export default UserProfile;
