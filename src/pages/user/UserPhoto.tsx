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
import { getMediaUser } from "../../services/UserService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { PostMediaModel } from "../../types/post";

const UserPhoto = () => {
  const stateApp = useSelector((state: RootState) => state.appReducer);
  const user = stateApp.currentUser;
  const [mediaImageUser, setMediaImageUser] = useState([]);
  useEffect(() => {
    user && getMediaUser(user.uuid,'image').then((res) => {
      res.status && setMediaImageUser(res.data);
    });
  }, [user]);
  
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
      {mediaImageUser.length > 0 &&
          mediaImageUser.map((item: PostMediaModel) => {
            const files = JSON.parse(item.file);

            return files.map((file: string, index: number) => {
              return (
                <UserPhotoItem key={index} i={index} uuid={item.uuid} type="image"  link={file}/>
               
              );
            });
          })}
      </div>
    </div>
  );
};

export default UserPhoto;
