import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  FaBellSlash,
  FaBookmark,
  FaGlobe,
  FaLock,
  FaRegWindowClose,
  FaShare,
  FaTrashAlt,
} from "react-icons/fa";

import { MdFreeCancellation, MdLabelOff } from "react-icons/md";

import Tippy from "@tippyjs/react/headless";
import TippyUserView from "../tippy/TippyUserView";
import { Link } from "react-router-dom";
import GroupImage from "../image/GroupImage";
import icon_like from "../../assets/base/icon/icon_like.svg";
import icon_heart from "../../assets/base/icon/icon_heart.svg";
import icon_haha from "../../assets/base/icon/icon_haha.svg";
import { AiFillLike } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
// import CommentItem from "../comment/CommentItem";
import { IoSend } from "react-icons/io5";
import avatar_user from "../../assets/base/avatar_user.webp";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { DataPost, PostModel } from "../../types/post";
import {
  commentPost,
  deletePost,
  getListComment,
  likePost,
  savePost,
} from "../../services/PostService";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import CommentItem from "../comment/CommentItem";
import bg from "../../assets/base/bg_view_create_group.svg";
import TippyGroupView from "../tippy/TippyGroupView";
import PostAvatar from "../image/PostAvatar";
import { FormMartDateAgo } from "../functions/tool";

type PostProps = {
  post: PostModel;
};
const Post = ({ post }: PostProps) => {
  let type = "user";
  if (post.is_group_post) {
    type = "group";
  } else if (post.is_post_page) {
    type = "page";
  } else {
    type = "user";
  }
  const [isMyPost, setIsMyPost] = useState(false);
  const [isSaved, setIsSaved] = useState(post.is_saved);

  const { user } = useSelector((state: RootState) => state.authReducer);
  const [isLike, setIsLike] = useState(post.isLikePost);
  const [countLike, setCountLike] = useState(post.likes_count);
  const [countComment, setCountComment] = useState(post.comments_count);
  const [listComment, setListComment] = useState([]);
  const [formData, setFormData] = useState<DataPost>({
    post_id: post.id,
    comment: "",
  });
  useEffect(() => {
    if (user.id == post.user_id) {
      setIsMyPost(true);
    }
  }, [post, user]);
  const handleLike = () => {
    likePost(post.id).then((res) => {
      isLike
        ? setCountLike((prev) => prev - 1)
        : setCountLike((prev) => prev + 1);
      res.status && setIsLike(!isLike);
    });
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.comment) {
      commentPost(formData).then((res) => {
        if (res.status) {
          setFormData({ ...formData, comment: "" });
          setCountComment((prev) => prev + 1);
        }
      });
    }
  };
  const handleShowComment = () => {
    getListComment(post.id).then((res) => {
      res.status && setListComment(res.data);
    });
  };
  // save post
  const handleSavePost = () => {
    savePost(post.uuid).then((res) => {
      if (res && res.status) {
        setIsSaved(!isSaved);
      }
    });
  };
  // delete post
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    deletePost(post.uuid).then((res) => {
      if (res && res.status) {
        setIsDeleted(true);
      }
    });
  };
  if (isDeleted) {
    return <></>;
  } else {
    return (
      <div className="bg-dark-bg rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {type == "group" && post.group ? (
              <div className="relative">
                <div className="w-[36px] h-[36px] rounded-lg ">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={post.group?.thumbnail ?? bg}
                    alt="thumbnail"
                  />
                </div>
                <div className="w-[24px] h-[24px] rounded-full border border-input absolute right-[-5px] bottom-[-5px]">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={post.user.avatar ?? avatar_user}
                    alt="avatar user"
                  />
                </div>
              </div>
            ) : (
              <div className="w-[40px] h-[40px] rounded-full border-2 border-primary-500">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={post.user.avatar ?? avatar_user}
                  alt=""
                />
              </div>
            )}

            <div className="flex flex-col">
              <h3 className="font-bold">
                {type == "user" ? (
                  <Tippy
                    // visible={false}
                    interactive
                    placement="bottom"
                    delay={[200, 200]}
                    render={() => <TippyUserView user={post.user} />}
                  >
                    <div className="flex items-end">
                      <Link to={`/user/${post.user.uuid}`}>
                        <button>
                          {post.user.first_name + " " + post.user.last_name}
                        </button>
                      </Link>
                      {post.type && post.type == "change_avatar" && (
                        <a
                          href=""
                          className="text-gray-700 font-normal px-2 leading-[18px]"
                        >
                          - đã thay đổi ảnh đại diện của{" "}
                          {post.user.gender == "male" ? "anh" : "cô"} ấy.
                        </a>
                      )}
                    </div>
                  </Tippy>
                ) : (
                  post.group && (
                    <Tippy
                      // visible={false}
                      interactive
                      placement="bottom"
                      delay={[200, 200]}
                      render={() => <TippyGroupView group={post.group} />}
                    >
                      <Link to={`/groups/${post.group?.uuid}`}>
                        <button>{post.group?.name}</button>
                      </Link>
                    </Tippy>
                  )
                )}
              </h3>
              <div className="flex items-center gap-1 text-[14px] text-text font-medium">
                {type == "group" && post.user && (
                  <h3 className="font-medium">
                    <Tippy
                      // visible={false}
                      interactive
                      placement="bottom"
                      delay={[200, 200]}
                      render={() => <TippyUserView user={post.user} />}
                    >
                      <Link to={"/user/" + post.user.uuid}>
                        <button>
                          {post.user.first_name + " " + post.user.last_name}
                        </button>
                      </Link>
                    </Tippy>
                  </h3>
                )}
                <span>·</span>
                <div>{FormMartDateAgo(post.created_at) || "Vừa xong"}</div>
                <span>·</span>
                <div>
                  {post.is_public ? (
                    <svg
                      viewBox="0 0 16 16"
                      width="12"
                      height="12"
                      fill="currentColor"
                      xlinkTitle="Đã chia sẻ với Công khai"
                    >
                      <title>Đã chia sẻ với Công khai</title>
                      <g fillRule="evenodd" transform="translate(-448 -544)">
                        <g>
                          <path
                            d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                            transform="translate(354 143.5)"
                          ></path>
                          <path
                            d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                            transform="translate(354 143.5)"
                          ></path>
                          <path
                            fillRule="nonzero"
                            d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                            transform="translate(354 143.5)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <FaLock title="Chỉ mình tôi" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className=" flex items-center justify-center cursor-pointer w-[32px] h-[32px]  rounded-full  hover:bg-input scrollbar_hover">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent flex justify-center items-center p-0">
                    <BsThreeDots className="text-[24px] " />
                  </Button>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                  {isSaved ? (
                    <MenuItem
                      onClick={handleSavePost}
                      className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input"
                    >
                      <div className="text-light-1 size-[24px]">
                        <MdLabelOff className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Bỏ lưu bài viết</div>
                        <div className="text-gray-500 font-light text-[14px]">
                          Gỡ mục này khỏi mục đã lưu.
                        </div>
                      </div>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      onClick={handleSavePost}
                      className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input"
                    >
                      <div className="text-light-1 size-[24px]">
                        <FaBookmark className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Lưu bài viết</div>
                        <div className="text-gray-500 font-light text-[14px]">
                          Thêm vào danh sách mục đã lưu.
                        </div>
                      </div>
                    </MenuItem>
                  )}

                  <div className="border-t border-b border-input py-2">
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input">
                      <div className="text-light-1 size-[24px]">
                        {/* <FaBell className="size-[20px]" /> */}
                        <FaBellSlash className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Tắt thông báo về bài viết này</div>
                      </div>
                    </MenuItem>
                  </div>

                  {post.is_public && isMyPost ? (
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input">
                      <div className="text-light-1 size-[24px]">
                        <FaRegWindowClose className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Ẩn bài viết</div>
                        <div className="text-gray-500 font-light text-[14px]">
                          Chỉ có bạn mới có thể xem bài viết này
                        </div>
                      </div>
                    </MenuItem>
                  ) : (
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input">
                      <div className="text-light-1 size-[24px]">
                        <FaGlobe className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Công khai bài viết</div>
                        <div className="text-gray-500 font-light text-[14px]">
                          Bất kì ai cũng có thể thấy bài viết của bạn
                        </div>
                      </div>
                    </MenuItem>
                  )}

                  {isMyPost ? (
                    <MenuItem
                      onClick={handleDelete}
                      className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input"
                    >
                      <div className="text-light-1 size-[24px]">
                        <FaTrashAlt className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Xóa bài viết</div>
                        <div className="text-gray-500 font-light text-[14px]">
                          Bạn sẽ không thể nhìn thấy bài viết này nữa.
                        </div>
                      </div>
                    </MenuItem>
                  ) : (
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input">
                      <div className="text-light-1 size-[24px]">
                        <MdFreeCancellation className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>
                          Bỏ theo dõi{" "}
                          {post?.user.first_name + " " + post.user.last_name}
                        </div>
                        <div className="text-gray-500 font-light text-[14px]">
                          Không nhìn thấy bài viết nữa nhưng vẫn là bạn bè.
                        </div>
                      </div>
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </div>
            <div
              title="Ẩn khỏi hiển thị"
              onClick={handleDelete}
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
            >
              <IoMdClose className="fa-solid fa-ellipsis text-[24px] text-text" />
            </div>
          </div>
        </div>
        <div className="py-2">
          <p className="line-clamp-5">{post.content}</p>

          <div>
            {post.type && post.type == "change_avatar" ? (
              <PostAvatar
                data={post.post_media}
                thumbnail={post.user.thumbnail ?? bg}
              />
            ) : (
              post.post_media.length > 0 && (
                <GroupImage data={post.post_media} />
              )
            )}
          </div>
          <div className="flex items-center justify-between text-text py-4">
            <Link to="" className="flex items-center gap-2 ">
              <div className="flex">
                <div>
                  <img className="w-[18px] h-[18px]" src={icon_like} alt="" />
                </div>
                <div>
                  <img className="w-[18px] h-[18px]" src={icon_heart} alt="" />
                </div>
                <div>
                  <img className="w-[18px] h-[18px]" src={icon_haha} alt="" />
                </div>
              </div>
              <span>{countLike} </span>
            </Link>
            <Link to="/" className="flex gap-2">
              <div>{countComment}</div>
              <span>bình luận</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center py-1 border-t border-b border-input text-text">
          <div
            onClick={handleLike}
            className={
              (isLike ? "text-primary-500 " : "") +
              " font-medium flex items-center gap-2 justify-center flex-1 p-2 hover:bg-input cursor-pointer rounded-md"
            }
          >
            <AiFillLike className="size-[20px]" />
            <span>Thích</span>
          </div>
          <div className=" font-medium flex items-center gap-2 justify-center flex-1 p-2 hover:bg-input cursor-pointer rounded-md">
            <RiMessage3Fill className="size-[20px]" />
            <span>Bình luận</span>
          </div>
          <div className=" font-medium flex items-center gap-2 justify-center flex-1 p-2 hover:bg-input cursor-pointer rounded-md">
            <FaShare className="size-[20px]" />
            <span>Chia sẻ</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          {countComment > 0 && (
            <div
              onClick={handleShowComment}
              className="text-text font-medium cursor-pointer hover:text-gray-400 hover:underline"
            >
              Xem bình luận
            </div>
          )}
          <div className="flex flex-col gap-3">
            {listComment.length > 0 &&
              listComment.map((comment, index) => {
                return <CommentItem key={index} comment={comment} />;
              })}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[32px] h-[32px] rounded-full">
            <img
              className="w-full h-full rounded-full"
              src={user.avatar || avatar_user}
              alt=""
            />
          </div>
          <form
            onSubmit={handleComment}
            className="flex-1 flex items-center bg-input rounded-full px-4 py-1"
          >
            <input
              onChange={handleChangeInput}
              name="comment"
              value={formData.comment}
              type="text"
              placeholder={
                "Bình luận với vai trò " +
                " " +
                user.first_name +
                " " +
                user.last_name
              }
              className="flex-1 bg-transparent"
            />
            <button
              type="submit"
              className={
                (formData.comment &&
                  "text-primary-500 hover:text-primary-500 hover:bg-dark-bg ") +
                "  pr-2 py-2 pl-3 rounded-full flex justify-center items-center"
              }
            >
              <IoSend />
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Post;
