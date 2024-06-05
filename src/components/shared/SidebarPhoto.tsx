import { Link } from "react-router-dom";
import { BsPostcard, BsThreeDots } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  FaBell,
  FaBookmark,
  FaClock,
  FaHistory,
  FaRegWindowClose,
  FaShare,
} from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import { TbLockExclamation } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import icon_like from "../../assets/base/icon/icon_like.svg";
import icon_heart from "../../assets/base/icon/icon_heart.svg";
import icon_haha from "../../assets/base/icon/icon_haha.svg";
import { IoSend } from "react-icons/io5";
import { ChangeEvent, FormEvent, useState } from "react";
import avatar_user from "../../assets/base/avatar_user.webp";
import {
  commentPost,
  getListComment,
  likePost,
} from "../../services/PostService";
import { DataPost, PostModel } from "../../types/post";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import CommentItem from "../comment/CommentItem";
type SidebarPhotoProps = {
  // postMediaId: string;
  post: PostModel;
};
const SidebarPhoto = ({ post }: SidebarPhotoProps) => {
  const stateAuth = useSelector((state: RootState) => state.authReducer);
  
  const [isLike, setIsLike] = useState(post.isLikePost);
  const [countLike, setCountLike] = useState(post.likes_count);
  const [countComment, setCountComment] = useState(post.comments_count);
  const [listComment, setListComment] = useState(post.comments);
  
  const [formData, setFormData] = useState<DataPost>({
    post_id: post.id,
    comment: "",
  });
  const handleLike = () => {
    post &&
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
      setFormData({...formData})
      commentPost(formData).then((res) => {
        if (res.status) {
          setFormData({ ...formData, comment: "" });
          setCountComment((prev) => prev + 1);
          post &&
            getListComment(post.id).then((res) => {
              res.status && setListComment(res.data);
            });
        }
      });
    }
  };
  const handleShowComment = () => {
    post &&
      getListComment(post.id).then((res) => {
        res.status && setListComment(prev=>[...res.data,...prev]);
      });
  };

  return (
    <div className="flex flex-col h-full overflow-y-scroll pt-4  scrollbar_custom_hidden ">
      <div className="flex flex-col px-4 ">
        <div className="flex justify-between border-b  border-input pb-3">
          <div className="flex items-center gap-2 text-text">
            <div>
              <BsPostcard />
            </div>
            <span className=" text-[13px]">Ảnh này nằm trong 1 bài viết.</span>
          </div>
          <Link
            to={"/post/" + post?.uuid}
            className="text-text-1 text-[12px] hover:underline font-bold"
          >
            Xem bài viết
          </Link>
        </div>
        <div className="flex gap-3 py-2">
          <div className="w-[40px] h-[40px] rounded-full ">
            <img
              className="rounded-full w-full h-full object-cover"
              src={post?.user?.avatar ?? avatar_user}
              alt=""
            />
          </div>
          <div className="flex gap-2 flex-1 ">
            <div className="flex flex-col flex-1">
              <Link to={"/user/" + post?.user.uuid}>
                {post ? post?.user.first_name + " " + post?.user.last_name : ""}
              </Link>
              <div className="flex items-center gap-1 text-[14px] text-text font-medium">
                <div>{post?.created_at.split("T")[0]}</div>
                <span>·</span>
                <div>
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
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center cursor-pointer w-[32px] h-[32px]  rounded-full hover:bg-input scrollbar_hover">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent flex justify-center items-center p-0">
                    <BsThreeDots className="text-[24px] " />
                  </Button>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                  <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
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

                  <div className="border-t border-b border-input py-2">
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                      <div className="text-light-1 size-[24px]">
                        <FaHistory className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Xem lịch sử chỉnh sửa</div>
                      </div>
                    </MenuItem>
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                      <div className="text-light-1 size-[24px]">
                        <FaBell className="size-[20px]" />
                      </div>
                      <div className="text-light-1 flex flex-col gap-1">
                        <div>Bật thông báo về bài viết này</div>
                      </div>
                    </MenuItem>
                  </div>

                  <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                    <div className="text-light-1 size-[24px]">
                      <FaRegWindowClose className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Ẩn bài viết</div>
                      <div className="text-gray-500 font-light text-[14px]">
                        Ẩn bớt các bài viết tương tự.
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                    <div className="text-light-1 size-[24px]">
                      <FaClock className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Tạm ẩn Hải Yến trong 30 ngày</div>
                      <div className="text-gray-500 font-light text-[14px]">
                        Tạm thời không nhìn thấy bài viết nữa nữa.
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                    <div className="text-light-1 size-[24px]">
                      <MdFreeCancellation className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Bỏ theo dõi Hải Yến</div>
                      <div className="text-gray-500 font-light text-[14px]">
                        Không nhìn thấy bài viết nữa nhưng vẫn là bạn bè.
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                    <div className="text-light-1 size-[24px]">
                      <TbLockExclamation className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Chặn trang cá nhân của Hải Yến</div>
                      <div className="text-gray-500 font-light text-[14px]">
                        Bạn sẽ không thể liên hệ với người này.
                      </div>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>

        {/* like */}
        <div className="py-2">
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
              {/* <span>K</span> */}
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
            <span>Like</span>
          </div>
          <div className=" font-medium flex items-center gap-2 justify-center flex-1 p-2 hover:bg-input cursor-pointer rounded-md">
            <RiMessage3Fill className="size-[20px]" />
            <span>Comment </span>
          </div>
          <div className=" font-medium flex items-center gap-2 justify-center flex-1 p-2 hover:bg-input cursor-pointer rounded-md">
            <FaShare className="size-[20px]" />
            <span>Share</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-2">
          {post && post?.comments?.length > 10 && (
            <div
              onClick={handleShowComment}
              className="text-text font-medium cursor-pointer hover:text-gray-400 hover:underline"
            >
              Xem thêm bình luận
            </div>
          )}

          <div className="mt-4">
            {(listComment.length >0) &&
              listComment.map((comment, index) => {
                return <CommentItem key={index} comment={comment} />;
              })}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center absolute bottom-0 bg-dark-bg right-0 left-0 p-4">
        <div className="w-[32px] h-[32px] rounded-full">
          <img
            className="w-full h-full rounded-full"
            src={stateAuth.user.avatar ?? avatar_user}
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
            type="text"
            value={formData.comment}
            placeholder={
              "Bình luận với vai trò " +
              stateAuth.user.first_name +
              " " +
              stateAuth.user.last_name
            }
            className="flex-1 bg-transparent"
          />
          <button
            type="submit"
            className="hover:bg-dark-bg hover:text-primary-500 pr-2 py-2 pl-3 rounded-full flex justify-center items-center"
          >
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarPhoto;
