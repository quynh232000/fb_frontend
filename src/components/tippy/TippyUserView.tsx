import { BsBackpack4Fill } from "react-icons/bs";
import { FaUser, FaUserCheck, FaUserFriends } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import avatar_user from "../../assets/base/avatar_user.webp";
import { UserModel } from "../../types/post";
type TippyUserViewProps = {
  user: UserModel;
};
const TippyUserView = ({ user}: TippyUserViewProps) => {
  return (
    <div className="flex flex-col shadow-sm shadow-gray-500 p-4 rounded-lg bg-dark-bg gap-4">
      <div className="flex gap-4">
        <div className="w-[90px] h-[90px] rounded-full relative border-4 border-primary-500">
          <img
            className="w-full h-full object-cover rounded-full"
            src={user?.avatar ?? avatar_user}
            alt=""
          />
          <span className="absolute w-[18px] h-[18px] border-2 border-dark-bg bg-green-500  rounded-full right-[4px] bottom-0 "></span>
        </div>
        <div className="flex flex-col gap-3 ">
          <Link to={"/user/" + user?.uuid}>
            <h4 className="font-bold text-[20px] ">
              {user?.first_name + " " + user?.last_name}
            </h4>
          </Link>
          <div className="flex flex-col gap-3 ">
            {user?.mutual_friends > 0 && (
              <div className="flex gap-2 items-center text-text-1 font-medium">
                <div className="text-[24px] text-gray-500 mr-1">
                  <FaUserFriends />
                </div>
                <div>
                  {user?.mutual_friends} bạn bè chung
                  {/* <Link to={"/"} className="font-bold px-2">
                    Hoàng Hoa
                  </Link> */}
                </div>
              </div>
            )}
            {user?.friends_count > 0 && (
              <div className="flex gap-2 items-center text-text-1 font-medium">
                <div className="text-[24px] text-gray-500 mr-1">
                  <FaUser />
                </div>
                <div>
                  {user?.friends_count} bạn bè
                  {/* <Link to={"/"} className="font-bold px-2">
                    Hoàng Hoa
                  </Link> */}
                </div>
              </div>
            )}
            <div className="flex gap-2 items-center text-text-1 font-medium">
              <div className="text-[24px] text-gray-500 mr-1">
                <BsBackpack4Fill />
              </div>
              <div>
                Học tập tại
                <Link to={"/"} className="font-bold px-2 ">
                  FT Polytechnic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 gap-2">
        <div className="flex items-center gap-2 flex-1 justify-center rounded-lg font-medium bg-input p-2 cursor-pointer hover:bg-gray-600">
          <FaUserCheck className="size-[20px]" />
          <span>Bạn bè</span>
        </div>
        <div className="flex items-center justify-center gap-2 hover:opacity-80 flex-1 rounded-lg font-medium bg-primary-500 p-2 cursor-pointer">
          <FiMessageCircle className="size-[20px]" />
          <span>Tin nhắn</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg hover:opacity-80 font-medium bg-input p-2 cursor-pointer hover:bg-gray-600">
          <HiDotsHorizontal className="size-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default TippyUserView;
