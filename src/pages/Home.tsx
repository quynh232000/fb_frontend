import { useEffect, useState } from "react";
import CreatePost from "../components/shared/CreatePost";
import Post from "../components/shared/Post";
import Story from "../components/shared/Story";
import SuggestionFriend from "../components/shared/SuggestionFriend";
import { getList } from "../services/PostService";
import { PostModel } from "../types/post";
import { getListUsers, getRequestFriend } from "../services/UserService";
import PostSkeleton from "../components/skeleton/PostSkeleton";

const Home = () => {
  // const [page, getPage] = useState(1);
  const [newPost,setNewPost] = useState<PostModel|null>(null)
  const [posts, setPosts] = useState([]);
  const [friendSuggestion, setFriendSuggestion] = useState([]);
  const [requestFriend, setRequestFriend] = useState([]);
  useEffect(() => {
    getRequestFriend().then((res) => {
      if (res.status) {
        if (res.data.length > 0) {
          setRequestFriend(res.data);
        } else {
          getListUsers().then((res) => {
            res.status && setFriendSuggestion(res.data);
          });
        }
      }
    });
  }, []);
  useEffect(() => {
    getList(1).then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Story />

      <CreatePost type="user" id="" setNewPost={setNewPost} />
      {friendSuggestion.length > 0 && (
        <SuggestionFriend
          type={"suggestionFriend"}
          friends={friendSuggestion}
        />
      )}
      {requestFriend.length > 0 && (
        <SuggestionFriend type={"requestFriend"} friends={requestFriend} />
      )}
      {newPost && <Post post={newPost} />}
      {posts && posts.length > 0 ? (
        posts?.map((post: PostModel) => {
          return <Post key={post.id} post={post} />;
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
  );
};

export default Home;
