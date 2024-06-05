import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import MyFriendItem from "../../components/item/user/MyFriendItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import { getListFriend } from "../../services/UserService";

const UserFriend = () => {
  const stateApp = useSelector((state: RootState) => state.appReducer);
  const user = stateApp.currentUser;
  const [friends,setFriends] = useState([])
  useEffect(()=>{
    user && getListFriend(user.uuid).then((res) => {
      res.status && setFriends(res.data)
    });
  },[user])
  
  return (
    <div className="bg-dark-bg px-4 py-2 rounded-lg">
      <div className="flex flex-col gap-4 py-2">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[18px]">Bạn bè</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center py-2 px-4 bg-input rounded-full gap-2">
              <IoIosSearch className="text-[18px]" />
              <input
                type="text"
                placeholder="Tìm kiếm"
                className=" bg-transparent w-fit"
              />
            </div>
            <Link
              to={"/friends"}
              className="text-primary-700 font-medium text-[14px] hidden md:block"
            >
              Lời mời kết bạn
            </Link>
            <Link
              to={"/friends?key=search"}
              className="text-primary-700 font-medium text-[14px] hidden md:block"
            >
              Tìm bạn bè
            </Link>

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
                        <div className=" font-normal">Chỉnh sửa quyền</div>
                      </div>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[15px] overflow-x-scroll w-full scrollbar_custom">
          <Link
            to={"/user/asd/friends_all"}
            className="py-3 text-center px-4 border-b-2 border-primary-600 text-primary-500 font-medium w-fit"
          >
            Tất cả bạn bè
          </Link>
          <Link
            to={"/user/asd/friends_with_upcoming_birthdays"}
            className="py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Sinh nhật
          </Link>
          <Link
            to={"/user/asd/friends_with_current_city"}
            className="py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Tỉnh/Thành phố hiện tại
          </Link>
          <Link
            to={"/user/asd/friends_with_upcoming_birthdays"}
            className="hidden md:block py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Quên quán
          </Link>
          <Link
            to={"/user/asd/friends_with_upcoming_followers"}
            className="hidden md:block py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Người theo dõi
          </Link>
          <Link
            to={"/user/asd/friends_with_upcoming_following"}
            className="hidden md:block py-3 text-center px-4 border-b-2 border-transparent text-text font-medium w-fit hover:bg-input rounded-lg"
          >
            Người đang theo dõi
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 py-4">
        {friends.length >0 && friends.map((friend,index) =>{
          return <MyFriendItem key={index} user={friend} />
        })}
       
      </div>
    </div>
  );
};

export default UserFriend;
