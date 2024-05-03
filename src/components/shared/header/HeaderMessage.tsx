import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import HeaderMessageItem from "../../item/HeaderMessageItem";

const HeaderMessage = () => {
  return (
    <div className="flex h-[80vh] w-sidebar relative">
      <div className="flex flex-col h-full  flex-1 overflow-y-scroll scrollbar_custom_hidden scrollbar_custom scrollbar_hover gap-4">
        <div className="flex items-center justify-between">
          <div className="text-[24px] font-bold">Đoạn chat</div>
          <div className="text-text">
            <div className=" flex items-center justify-center cursor-pointer w-[32px] h-[32px]  rounded-full hover:bg-input scrollbar_hover">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent flex justify-center items-center p-0">
                    <BsThreeDots className="text-[24px] " />
                  </Button>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                  <button className="hover:bg-input flex items-center gap-2 p-2 rounded-lg">
                    <div className="text-light-1 size-[24px]">
                      <MdModeEdit className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Chỉnh sửa thông tin</div>
                    </div>
                  </button>
                  <button className="hover:bg-input flex items-center gap-2 p-2 rounded-lg">
                    <div className="text-light-1 size-[24px]">
                      <FaTrashAlt className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Xóa thông tin</div>
                    </div>
                  </button>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-input rounded-full px-4 py-2">
            <IoIosSearch className="text-[20px]" />
            <input
              type="text"
              placeholder="Tìm kiếm trên Message"
              className="w-full bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary-300 text-primary-700 px-3 py-2 rounded-full font-bold">
            Hộp thư
          </button>
          <button className="hover:bg-input px-3 py-2 rounded-full font-bold">
            Cộng đồng
          </button>
        </div>
        <div className="flex flex-col gap-1 hover:bg-dark-bg">
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
          <HeaderMessageItem />
        </div>
      </div>
      <button className="absolute bg-dark-bg bottom-0 text-center right-0 left-0 pb-2 pt-4 text-primary-700 font-bold hover:underline">
        Xem tất cả trong Messenger
      </button>
    </div>
  );
};

export default HeaderMessage;
