import { useSelector } from "react-redux";
import CreatePost from "../../components/shared/CreatePost";
import SidebarGroupRight from "../../components/shared/SidebarGroupRight";
import HeaderGroup from "../../components/shared/user/HeaderGroup";
import GroupSideBar from "./GroupSideBar";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import { getPostGroup } from "../../services/GroupService";
import Post from "../../components/shared/Post";
import ImageSkeleton from "../../components/skeleton/ImageSkeleton";
import { PostModel } from "../../types/post";

const GroupInfo = () => {
  const { currentGroup } = useSelector((state: RootState) => state.appReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [listPosts, setListPosts] = useState([]);
  const [newPost, setNewPost] = useState<PostModel | null>(null);
  useEffect(() => {
    currentGroup &&
      getPostGroup(currentGroup?.uuid).then((res) => {
        if (res && res.status) {
          setListPosts(res.data);
          setIsLoading(false);
        }
      });
  }, [currentGroup]);

  return (
    <div className="flex h-full">
      <GroupSideBar />
      <div className="flex flex-col w-full justify-between  flex-1  overflow-y-scroll scrollbar_custom ">
        <div>
          <HeaderGroup />
        </div>
        <div className="flex w-full justify-center relative flex-1 py-4 gap-4 ">
          {currentGroup ? (
            <div className="flex w-full 2xl:w-user gap-4 px-2">
              <div className="flex w-full  flex-1">
                <section className="flex-1 ">
                  <div className="flex flex-col gap-4 flex-1">
                    {currentGroup && currentGroup.is_joined && (
                      <CreatePost
                        type="group"
                        id={currentGroup.id + ""}
                        setNewPost={setNewPost}
                      />
                    )}
                    {newPost && <Post post={newPost} />}
                    {listPosts && !isLoading ? (
                      listPosts.length > 0 ? (
                        (currentGroup.is_private && currentGroup.is_joined) ||
                        !currentGroup.is_private ? (
                          listPosts.map((post, index) => {
                            return <Post key={index} post={post} />;
                          })
                        ) : (
                          <div className="text-center py-5">
                            Bạn không thể xem bài viết của nhóm này vì lí do
                            riêng tư
                          </div>
                        )
                      ) : (
                        <div className="text-center py-5">
                          Chưa có bài viết nào!
                        </div>
                      )
                    ) : (
                      <ImageSkeleton />
                    )}
                  </div>
                </section>
              </div>
              <div className="w-[490px]">
                <SidebarGroupRight />
              </div>
            </div>
          ) : (
            <div className="text-center py-5">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupInfo;
