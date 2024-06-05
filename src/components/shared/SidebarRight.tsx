import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openChat } from "../../redux/reducers/chatBoxReducer";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/reducers";
import { getListFriend } from "../../services/UserService";
import { UserModel } from "../../types/post";
import avatar_user from "../../assets/base/avatar_user.webp"
const SidebarRight = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authReducer);
  const [friends, setFriends] = useState<UserModel[]|null>(null);

  const handleOpenChat = (friend: UserModel) => {
    dispatch(openChat(friend));
  };
  useEffect(() => {
    getListFriend(user.uuid).then((res) => {
      if (res && res.status) {
        setFriends(res.data);
      }
    });
  }, [user]);

  return (
    <div className="flex flex-col h-full overflow-y-scroll pt-4  scrollbar_custom_hidden">
      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300  pb-3 font-semibold">
          Được tài trợ
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 items-center w-100 hover:bg-input p-2 rounded-lg cursor-pointer relative">
          <div className="w-30  object-cover rounded-lg">
            <img
              className=" rounded-lg w-100"
              src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474056CSk/anh-avatar-viet-nam-cute-ngau-tuyet-dep-18.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1">
            <span>Nhận 100.000 VND vòa tài khoản khi mở thành công</span>
            <Link to={"#"}>
              <span className="text-[14px] text-gray-400">
                forms.uob.com.vn
              </span>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center w-100 hover:bg-input p-2 rounded-lg cursor-pointer">
          <div className="w-30 object-cover rounded-lg">
            <img
              className=" rounded-lg w-100"
              src="https://bizweb.dktcdn.net/100/330/208/files/hinh-nen-anime-mau-hong-cute-7.jpg?v=1649317713788"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1">
            <span>📽️ Enhance Footage in Seconds</span>
            <Link to={"#"}>
              <span className="text-[14px] text-gray-400">topazlabs.com</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300 border-t border-gray-700 py-3 font-semibold flex items-center justify-between">
          <span>Trang và trang cá nhân của bạn</span>
          <div
            title="Tùy chọn"
            className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
          >
            <i className="fa-solid fa-ellipsis text-[16px]"></i>
          </div>
        </div>
      </div>

      <div>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div>
            <img
              className="w-[36px]  h-[36px] rounded-lg object-cover"
              src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg"
              alt=""
            />
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">
            Lập trình PHP - Laravel Việt Nam
          </div>
        </Link>

        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 cursor-pointer text-gray-400 font-medium"
        >
          <div className="w-[36px] flex justify-end ">
            <i className="fa-solid fa-repeat text-[16px]"></i>
          </div>
          <div className="size-[14px] flex-1 leading-[16px] ">
            Chuyển sang Trang
          </div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 cursor-pointer text-gray-400 font-medium "
        >
          <div className="w-[36px] flex justify-end">
            <i className="fa-solid fa-volume-high text-[16px]"></i>
          </div>
          <div className="size-[14px] flex-1 leading-[16px] ">
            Tạo bài quảng cáo
          </div>
        </Link>
      </div>

      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300 border-t border-gray-700 py-3 font-semibold flex justify-between">
          <span>Người liên hệ</span>
          <div className="flex gap-4">
            <div
              title="Tìm kiếm theo tên hoặc nhóm"
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
            >
              <i className="fa-solid fa-magnifying-glass text-[16px]"></i>
            </div>
            <div
              title="Tùy chọn"
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
            >
              <i className="fa-solid fa-ellipsis text-[16px]"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {friends && friends.length >0 ? friends.map((friend,index)=>{
          return <div
          key={index}
          onClick={() => handleOpenChat(friend)}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <img
              className="w-[36px] h-[36px] rounded-full object-cover"
              src={friend.avatar ?? avatar_user}
              alt="avatar user"
            />
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">{friend.first_name+" "+friend.last_name}</div>
        </div>
        }):<div className="text-center py-5">...</div>}
      </div>
    </div>
  );
};

export default SidebarRight;
