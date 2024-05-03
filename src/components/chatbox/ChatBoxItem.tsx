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
              src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/352116379_582416770685979_473319283735363550_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WxQN5W6UObkAb4vo9uK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDvYzIMSg1rWnOR--9WThqvWQAZ6Cb7tiCgFv6qwnsBcQ&oe=663525CB"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxegV219s_yTxjgOCnMxocPr6uOuFDRn0d66AtBUmFuP4X5mVTV3V2io4KvqDeX-PmGHs&usqp=CAU"
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
