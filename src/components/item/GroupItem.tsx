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

const GroupItem = () => {
  return (
    <div className="flex flex-col bg-dark-bg p-4 rounded-lg">
      <div className="flex gap-3 items-center">
        <div className="w-[80px] h-[80px] rounded-lg">
          <img
            className="w-full h-full rounded-lg"
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/135922493_455251288811461_3029056172203992631_n.jpg?stp=c68.0.80.80a_cp0_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=olNh8ZKObVoQ7kNvgH5vSnx&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCgxEXV_C73Nzk93LvTw_9k5eMc3SzQd8AjUfO3nH60BQ&oe=665A2607"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <Link to={"/groups/ádasd"} className="text-[14px] font-bold">Lập tình viên PHP - Laravel</Link>
          <span className="text-[12px] text-text">Lần truy cập gần nhất 2 tuần trước</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Link to={"/groups/12321"} className="flex items-center justify-center flex-1 bg-primary-300 rounded-lg text-primary-700 font-bold text-[14px]">Xem nhóm</Link>
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
                  <IoIosLogOut  className="size-[20px]" />
                </div>
                <div className="text-light-1 flex flex-col gap-1">
                  <div className="text-text-1 font-medium">Rời khỏi nhóm</div>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
