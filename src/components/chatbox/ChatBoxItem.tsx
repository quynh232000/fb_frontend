import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
type ChatBoxItemProps = {
  type: string;
};
const ChatBoxItem = ({ type = "left" }: ChatBoxItemProps) => {
  if (type === "left") {
    return (
      <div className="flex gap-2">
        <div className="flex items-end">
          <div className="w-[28px] h-[28px] rounded-full">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex-1 flex items-center gap-2 ">
            <div className="max-w-[200px] bg-input rounded-[20px] px-3 py-2">
              Chú ơi chú nuôi mèo{" "}
            </div>
            <Menu>
              <MenuHandler>
                <div className="p-2 hover:bg-input rounded-full cursor-pointer ">
                  <HiOutlineDotsHorizontal />
                </div>
              </MenuHandler>
              <MenuList className="bg-dark-bg border-none shadow-sm shadow-gray-700 min-w-[84px] w-[26px] p-1">
                <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                  Trả lời
                </MenuItem>
                <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                  Xóa
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="max-w-[200px]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://res.cloudinary.com/dhglwzgm3/image/upload/v1717389002/rdavczysjwkhpzd1f8bu.webp"
                  alt=""
                />
              </div>
              <Menu>
                <MenuHandler>
                  <div className="p-2 hover:bg-input rounded-full cursor-pointer ">
                    <HiOutlineDotsHorizontal />
                  </div>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none shadow-sm shadow-gray-700 min-w-[84px] w-[26px] p-1">
                  <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                    Trả lời
                  </MenuItem>
                  <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                    Xóa
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 ">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex-1 flex items-center gap-2 justify-end ">
            <Menu>
              <MenuHandler>
                <div className="p-2 hover:bg-input rounded-full cursor-pointer ">
                  <HiOutlineDotsHorizontal />
                </div>
              </MenuHandler>
              <MenuList className="bg-dark-bg border-none shadow-sm shadow-gray-700 min-w-[84px] w-[26px] p-1">
                <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                  Trả lời
                </MenuItem>
                <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                  Xóa
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="max-w-[200px] bg-primary-500 rounded-[20px] px-3 py-2">
              Có chứ cho chú mấy con chú nuôi cho đỡ chán
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 justify-end">
              <Menu>
                <MenuHandler>
                  <div className="p-2 hover:bg-input rounded-full cursor-pointer ">
                    <HiOutlineDotsHorizontal />
                  </div>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none shadow-sm shadow-gray-700 min-w-[84px] w-[26px] p-1">
                  <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                    Trả lời
                  </MenuItem>
                  <MenuItem className="text-text-1 hover:bg-input hover:text-text-1 text-center p-2">
                    Xóa
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="max-w-[200px] flex flex-col gap-1">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/nuoi-meo-can-gi-0-1024x713.jpg"
                  alt=""
                />
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/nuoi-meo-can-gi-0-1024x713.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ChatBoxItem;
