import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Tippy from "@tippyjs/react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegStar, FaUserMinus } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import TippyUserView from "../../tippy/TippyUserView";

const MyFriendItem = () => {
  return (
    <div className=" shadow-sm shadow-[rgba(22,22,24,1)] flex items-center gap-3 p-4">
      <div className="w-[36px] h-[36px] md:w-[80px] md:h-[80px] rounded-e-lg">
        <img
          className="w-full h-full rounded-lg object-cover"
          src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/431477706_1087539129207478_6689505917464883118_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1fh2uWxvHywQ7kNvgFHYArT&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDu5u1BKoL4dDr7gGKM6PyMEYv1QXDHowXWGnE0Odq5Kw&oe=6637FD87"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold">
          <Tippy
            // visible={false}
            interactive
            placement="bottom"
            delay={[200, 200]}
            render={() => <TippyUserView />}
          >
            <Link to="/user/123">
              <button className="text-[14px] md:text-[16px]">Hoàng Ái Diệu</button>
            </Link>
          </Tippy>
        </h3>
        <span className="text-text text-[14px]">10 bạn chung</span>
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
                <FaRegStar className="size-[20px]" />
              </div>
              <div className="text-light-1 flex flex-col gap-1">
                <div className="text-text-1 font-medium">Yêu thích</div>
              </div>
            </MenuItem>
            <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
              <div className="text-light-1 size-[24px]">
                <MdOutlineCancelPresentation className="size-[20px]" />
              </div>
              <div className="text-light-1 flex flex-col gap-1">
                <div className="text-text-1 font-medium">Bỏ theo dõi</div>
              </div>
            </MenuItem>
            <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
              <div className="text-light-1 size-[24px]">
                <FaUserMinus className="size-[20px]" />
              </div>
              <div className="text-light-1 flex flex-col gap-1">
                <div className="text-text-1 font-medium">Hủy kết bạn</div>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default MyFriendItem;
