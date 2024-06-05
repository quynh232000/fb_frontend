import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { GroupModel } from "../../types/app";
import bg from "../../assets/base/bg_view_create_group.svg";
import { joinGroup, leaveGroup } from "../../services/GroupService";
import { useState } from "react";
type GroupItemProps = {
  group: GroupModel;
  type: string;
};
const GroupItem = ({ group, type }: GroupItemProps) => {
  const [isJoin, setIsJoin] = useState(false);
  const handleJoinGroup = () => {
    joinGroup(group.id).then((res) => {
      if (res && res.status) {
        setIsJoin(true);
      }
    });
  };
  const handleLeaveGroup = () => {
    leaveGroup(group.id).then((res) => {
      if (res && res.status) {
        setIsJoin(false);
      }
    });
  };
  return (
    <div className="flex flex-col bg-dark-bg p-4 rounded-lg">
      <div className="flex gap-3 items-center">
        <div className="w-[80px] h-[80px] rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={group.thumbnail ?? bg}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <Link to={"/groups/" + group.uuid} className="text-[14px] font-bold">
            {group.name}
          </Link>
          <span className="text-[12px] text-text">
            Lần truy cập gần nhất 2 tuần trước
          </span>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        {type == "suggestion" ? (
          !isJoin ? (
            <button
              onClick={handleJoinGroup}
              className="flex items-center py-2 justify-center flex-1 bg-input rounded-lg text-text-1 font-bold text-[14px] hover:opacity-80"
            >
              Tham gia nhóm
            </button>
          ) : (
            <button
              onClick={handleLeaveGroup}
              className="flex items-center py-2 justify-center flex-1 bg-input rounded-lg text-text-1 font-bold text-[14px] hover:opacity-80"
            >
              Hủy yêu cầu
            </button>
          )
        ) : (
          <>
            <Link
              to={"/groups/" + group.uuid}
              className="flex items-center py-2 justify-center flex-1 bg-primary-300 rounded-lg text-primary-700 font-bold text-[14px]"
            >
              Xem nhóm
            </Link>
            <div className=" flex items-center px-3 py-2 justify-center cursor-pointer   rounded-lg bg-input scrollbar_hover">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent flex justify-center items-center p-0">
                    <BsThreeDots className="text-[20px] " />
                  </Button>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                  <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                    <div className="text-light-1 size-[24px]">
                      <IoIosLogOut className="size-[20px]" />
                    </div>
                    <div
                      onClick={handleLeaveGroup}
                      className="text-light-1 flex flex-col gap-1"
                    >
                      <div className="text-text-1 font-medium">
                        Rời khỏi nhóm
                      </div>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GroupItem;
