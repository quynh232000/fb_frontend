import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { AiOutlinePicture } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

type UserPhotoItemProps = {
  link: string;
  uuid: string;
  i: number;
  type:string
};
const UserPhotoItem = ({ type,i, uuid, link }: UserPhotoItemProps) => {
  
  return (
    <div className="w-full relative">
      {type == "image" ? (
        <Link to={"/photo/" + uuid + "?i=" + (i+1)} className="w-full rounded-lg h-[180px]">
          <img className="w-full rounded-lg  h-[180px] object-cover" src={link} alt="" />
        </Link>
      ) : (
        <Link to={"/photo/ádasd"} className="w-full rounded-lg">
          <video
            className="h-full w-full rounded-lg object-contain"
            controls
            autoPlay
          >
            <source src={link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      )}
      <div className="bg-input hover:bg-gray-700 cursor-pointer p-2 rounded-full absolute top-[10px] right-[10px]">
        <Menu>
          <MenuHandler>
            <Button className="bg-transparent flex justify-center items-center p-0">
              <MdModeEdit className="text-[20px]" />
            </Button>
          </MenuHandler>
          <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
            <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
              <div className="text-light-1 size-[24px]">
                <FaRegUserCircle className="size-[20px]" />
              </div>
              <div className="text-light-1 flex flex-col gap-1">
                <div className="text-text-1 font-medium">
                  Đặt làm ảnh đại diện
                </div>
              </div>
            </MenuItem>
            <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
              <div className="text-light-1 size-[24px]">
                <AiOutlinePicture className="size-[20px]" />
              </div>
              <div className="text-light-1 flex flex-col gap-1">
                <div className="text-text-1 font-medium">Đặt làm ảnh bìa</div>
              </div>
            </MenuItem>
            <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
              <div className="text-light-1 size-[24px]">
                <FaRegTrashCan className="size-[20px]" />
              </div>
              <div className="text-light-1 flex flex-col gap-1">
                <div className="text-text-1 font-medium">Xóa ảnh</div>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default UserPhotoItem;
