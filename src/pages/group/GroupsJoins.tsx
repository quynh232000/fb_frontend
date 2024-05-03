import { GrSearch } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import { Link } from "react-router-dom";
import GroupBarItem from "../../components/item/GroupBarItem";
import GroupItem from "../../components/item/GroupItem";
const GroupsJoins = () => {
  return (
    <div className="flex h-full">
      <div className="hidden lg:flex w-sidebar bg-dark-bg h-full">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-2 p-4">
            <div className="font-bold text-[26px]">Nhóm</div>
            <div className="flex items-center gap-2 bg-input rounded-full p-2">
              <GrSearch className="text-[20px] text-text ml-2" />
              <input
                type="text"
                placeholder="Tìm kiếm nhóm"
                className="w-full bg-transparent"
              />
            </div>
          </div>
          <div className="  overflow-y-scroll scrollbar_custom  scrollbar_custom_hidden flex-1 p-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link
                to={"/groups"}
                className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
              >
                <div className="text-[26px] bg-gray-800  p-2 rounded-full">
                  <HiUserGroup />
                </div>
                <div className="font-bold text-text-1">Bảng feed của bạn</div>
              </Link>
              <Link
                to={"/groups/joins"}
                className="flex gap-2 items-center bg-input rounded-lg p-2"
              >
                <div className="text-[26px] bg-primary-500 p-2 rounded-full">
                  <MdOutlineFeed />
                </div>
                <div className="font-bold text-text-1">Nhóm của bạn</div>
              </Link>

              <Link
                to={"/group/create"}
                className="flex gap-1 items-center justify-center  rounded-lg p-2 bg-primary-300 text-primary-700 hover:opacity-80"
              >
                <div className="text-[20px] ">
                  <IoAdd />
                </div>
                <div className="font-medium">Tạo nhóm mới</div>
              </Link>
            </div>
            <div className="border-t border-input p-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="font-medium text-[18px] text-text-1">
                  Nhóm bạn đã tham gia
                </div>
                <Link to={"/groups/joins"} className="text-primary-700">
                  Xem tất cả
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <GroupBarItem />
                <GroupBarItem />
                <GroupBarItem />
                <GroupBarItem />
                <GroupBarItem />
                <GroupBarItem />
                <GroupBarItem />
                <GroupBarItem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center overflow-y-scroll scrollbar_custom">
        <div className="flex flex-col py-4 gap-4 px-4 lg:px-[40px] max-w-[1140px] ">
          <div className="text-text font-medium py-2">
            <div className="text-text-1 font-bold">
              Yêu cần tham gia nhóm (4)
            </div>
            <span className="text-[14px]">
              Xem các nhóm và kênh bảng feed mà bạn đã yêu cầu tham gia. Có thể
              bạn sẽ phải trả lời câu hỏi thì một số nhóm mới phê duyệt yêu cầu
              tham gia của bạn.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b border-input py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <GroupItem />
              <GroupItem />
              <GroupItem />
            </div>
          <div className="text-text-1 font-bold">
            Tất cả các nhóm bạn đã tham gia (139)
          </div>
          <div className="flex flex-col gap-4">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsJoins;
