import { BsBackpack4Fill } from "react-icons/bs";
import { FaUser, FaUserCheck, FaUserFriends } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import bg from "../../assets/base/bg_view_create_group.svg"
import { GroupModel } from "../../types/app";
type TippyUserGroupProps = {
  group: GroupModel;
};
const TippyGroupView = ({ group}: TippyUserGroupProps) => {
  return (
    <div className="flex flex-col shadow-sm shadow-gray-500 p-4 rounded-lg bg-dark-bg gap-4">
      <div className="flex gap-4">
        <div className="w-[90px] h-[90px] rounded-full relative border-4 border-primary-500">
          <img
            className="w-full h-full object-cover rounded-full"
            src={group.thumbnail ??bg}
            alt=""
          />
          <span className="absolute w-[18px] h-[18px] border-2 border-dark-bg bg-green-500  rounded-full right-[4px] bottom-0 "></span>
        </div>
        <div className="flex flex-col gap-3 ">
          <Link to={"/groups/" + group?.uuid}>
            <h4 className="font-bold text-[20px] ">
              {group.name}
            </h4>
          </Link>
          <div className="flex flex-col gap-3 ">
            {/* {user?.mutual_friends > 0 && (
              <div className="flex gap-2 items-center text-text-1 font-medium">
                <div className="text-[24px] text-gray-500 mr-1">
                  <FaUserFriends />
                </div>
                <div>
                  {user?.mutual_friends} bạn bè chung
                </div>
              </div>
            )} */}
            {/* {user?.friends_count > 0 && (
              <div className="flex gap-2 items-center text-text-1 font-medium">
                <div className="text-[24px] text-gray-500 mr-1">
                  <FaUser />
                </div>
                <div>
                  {user?.friends_count} bạn bè
                </div>
              </div>
            )} */}
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
        <div className="flex items-center gap-2 flex-1 justify-center rounded-lg font-medium bg-primary-300 p-2 cursor-pointer hover:opacity-80">
          
          <Link to={"/groups/"+group.uuid} className="text-primary-700">Tuy cập vào nhóm</Link>
        </div>
        
        <div className="flex items-center gap-2 rounded-lg hover:opacity-80 font-medium bg-input p-2 cursor-pointer hover:bg-gray-600">
          <HiDotsHorizontal className="size-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default TippyGroupView;
