import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserPhotoItem from "../../components/item/user/UserPhotoItem";

const UserPhoto = () => {
  const link ="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/356852616_1358926661503486_5818825967484185290_n.jpg?stp=c51.0.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4TBFfSvKQ_EQ7kNvgHi54gV&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfDqxAggsPgHi6sWtL81W6g6diU4gHDVhoaxO1a7x8KC_A&oe=6637EAAB"
  return (
    <div className="bg-dark-bg px-4 py-2 rounded-lg">
      <div className="flex flex-col gap-4 py-2">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[18px]">Ảnh</div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="upldateFile"
              className="text-primary-700 font-medium text-[14px] cursor-pointer"
            >
              Thêm ảnh/video
            </label>
            <input type="file" hidden id="upldateFile" multiple />

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
                        <div className=" font-normal">
                          Xem ảnh bị xóa khỏi dòng thời gian
                        </div>
                      </div>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[15px]">
          <Link
            to={"/user/asd/photos_off"}
            className="py-3 text-center px-4 border-b-2 border-primary-600 text-primary-500 font-medium w-fit"
          >
            Ảnh có mặt bạn
          </Link>
          <Link
            to={"/user/asd/photos_by"}
            className="py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Ảnh của bạn
          </Link>
          <Link
            to={"/user/asd/photos_abums"}
            className="py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Abum
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 py-4">
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        <UserPhotoItem type="image" link={link}/>
        


      </div>
    </div>
  );
};

export default UserPhoto;
