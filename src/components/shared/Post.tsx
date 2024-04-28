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
  FaBell,
  FaBookmark,
  FaClock,
  FaHistory,
  FaRegWindowClose,
  FaShare,
} from "react-icons/fa";

import { MdFreeCancellation } from "react-icons/md";
import { TbLockExclamation } from "react-icons/tb";

import Tippy from "@tippyjs/react/headless";
import TippyUserView from "../tippy/TippyUserView";
import { Link } from "react-router-dom";
import GroupImage from "../image/GroupImage";
import icon_like from "../../assets/base/icon/icon_like.svg";
import icon_heart from "../../assets/base/icon/icon_heart.svg";
import icon_haha from "../../assets/base/icon/icon_haha.svg";
import { AiFillLike } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import CommentItem from "../comment/CommentItem";

const Post = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-dark-bg rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full border-2 border-primary-500">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/426520609_402030988976166_4423746547630129466_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IWBEXxvlKqsAb4FYSLQ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCCR8nD9ssYBVF2jmmcOBk__baiYMeq4WSksjr1YJ7qAA&oe=6632F79D"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">
              <Tippy
                // visible={false}
                interactive
                placement="bottom"
                delay={[200, 200]}
                render={() => <TippyUserView />}
              >
                <Link to="">
                  <button>Lê Thị Hải Yến</button>
                </Link>
              </Tippy>
            </h3>
            <div className="flex items-center gap-1 text-[14px] text-text font-medium">
              <div>2 giờ</div>
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
        </div>
        <div className="flex gap-1">
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
          <div
            title="Tùy chọn"
            className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
          >
            <IoMdClose className="fa-solid fa-ellipsis text-[24px] text-text" />
          </div>
        </div>
      </div>
      <div className="py-2">
        <p className="line-clamp-5">
          Chào mọi người, chào các nhà tuyển dụng. Hiện tại em đang là sinh viên
          năm cuối chuyên ngành Kỹ Thuật Phần Mềm. Em đang tìm kiếm 1 công việc
          thực tập phù hợp với năng lực bản thân. Bên dưới là CV của em. Rất
          mong sẽ tìm thấy vị trí phù hợp ạ. Nhân tiện em xin một vài nhận xét
          và góp ý về cv của em với ạ, cảm ơn mọi người!!
        </p>
        <div>
          <GroupImage />
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
            <span>28 Phương Uyên và 27 người khác </span>
          </Link>
          <Link to="/" className="flex gap-2">
            <div>14</div>
            <span>bình luận</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-b border-input text-text">
        <div className=" font-medium flex items-center gap-2 justify-center flex-1 p-2 hover:bg-input cursor-pointer rounded-md">
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
        <div className="text-text font-medium">Xem thêm bình luận</div>
        <div>
          <CommentItem/>
        </div>
      </div>
    </div>
  );
};

export default Post;
