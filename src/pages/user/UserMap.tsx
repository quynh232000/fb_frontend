import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";

import CheckinItem from "../../components/item/user/CheckinItem";

const UserMap = () => {
  return (
    <div className="bg-dark-bg px-4 py-2 rounded-lg">
      <div className="flex flex-col gap-4 py-2">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[18px]">Check in</div>
          <div className="flex items-center gap-3">
            <div>
              <div className=" flex items-center justify-center cursor-pointer px-3 py-2  rounded-lg bg-input scrollbar_hover">
                <Menu>
                  <MenuHandler>
                    <Button className="bg-transparent flex justify-center items-center p-0">
                      <BsThreeDots className="text-[20px] " />
                    </Button>
                  </MenuHandler>
                  <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                    <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                      <div className="text-light-1 flex flex-col gap-1">
                        <div className=" font-normal">Ẩn mục</div>
                      </div>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[15px]">
          <button
            className="py-3 text-center px-4 border-b-2 border-primary-600 text-primary-500 font-medium w-fit"
          >
            Gần đây
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <CheckinItem />
        <CheckinItem />
        
      </div>
    </div>
  );
};

export default UserMap;
