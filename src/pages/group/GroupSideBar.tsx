import { Link } from "react-router-dom";
import GroupBarItem from "../../components/item/GroupBarItem";
import { IoAdd } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import { useEffect, useState } from "react";
import { getMyGroups, groupJoined } from "../../services/GroupService";
import { GroupModel } from "../../types/app";

const GroupSideBar = () => {
  const [myGroups, setMyGroups] = useState([]);
  const [myGroupJoined, setMyGroupJoined] = useState<GroupModel[]|null>(null)
  useEffect(() => {
    groupJoined().then(res=>{
      if(res && res.status){
        setMyGroupJoined(res.data)
      }
    })
    getMyGroups().then((res) => {
      if (res && res.status) {
        setMyGroups(res.data);
      }
    });
  }, []);

  return (
    <div className="w-sidebar bg-dark-bg h-full">
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
              className="flex gap-2 items-center hover:bg-input rounded-lg p-2"
            >
              {/* bg-primary-500 */}
              <div className="text-[26px]  bg-gray-800 p-2 rounded-full">
                <MdOutlineFeed />
              </div>
              <div className="font-bold text-text-1">Nhóm của bạn</div>
            </Link>

            <Link
              to={"/group/create"}
              className="flex gap-1 items-center justify-center  rounded-lg p-2 bg-primary-300 text-primary-700 hover:opacity-80 mt-2"
            >
              <div className="text-[20px] ">
                <IoAdd />
              </div>
              <div className="font-medium">Tạo nhóm mới</div>
            </Link>
          </div>
          {myGroups && myGroups.length > 0 && (
            <div className="border-t border-input p-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="font-medium text-[18px] text-text-1">
                  Nhóm của bạn
                </div>
                <Link to={"/groups/joins"} className="text-primary-700">
                  Xem tất cả
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                {myGroups.map((group:GroupModel,index:number)=>{
                  return <GroupBarItem key={index} group={group}/>;
                })}
               
              </div>
            </div>
          )}

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
                {myGroupJoined && myGroupJoined.map((group:GroupModel,index:number)=>{
                  return <GroupBarItem key={index} group={group}/>;
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSideBar;
