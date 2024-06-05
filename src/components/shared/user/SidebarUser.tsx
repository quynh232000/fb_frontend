import { FaClock, FaGraduationCap, FaHeart, FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RootState } from "../../../redux/reducers";
import { useSelector } from "react-redux";
import ImageProfile from "./ImageProfile";
import FriendProfile from "./FriendProfile";

const SidebarUser = () => {
  const stateApp = useSelector((state: RootState) => state.appReducer);
  const authState = useSelector((state: RootState) => state.authReducer);
  const user = stateApp.currentUser;

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-dark-bg rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[20px]">Giới thiệu</div>
          <span className="text-center text-[15px]">
            {user?.description ?? "---"}
          </span>
          {stateApp.currentUser?.id == authState.user.id ? (
            <button className="bg-input text-center rounded-lg p-2 hover:bg-gray-700 text-[15px] font-medium">
              Chỉnh sửa tiểu sử
            </button>
          ) : (
            ""
          )}

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-2 text-text">
              <div className="text-[20px]">
                <FaGraduationCap />
              </div>
              <span className="flex gap-2 items-center">
                Học tại
                <span className="text-text-1">Cao đăng FPT Polytechnic</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <div className="text-[20px]">
                <FaLocationDot />
              </div>
              <span className="flex gap-2 items-center">
                Sống tại
                <span className="text-text-1">{stateApp?.currentUser?.location ?? '--'}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <div className="text-[20px]">
                <FaHeart />
              </div>
              <span className="flex gap-2 items-center">Độc thân</span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <div className="text-[20px]">
                <FaClock />
              </div>
              <span className="flex gap-2 items-center">
                Tham gia vào
                <span className="text-text-1">{stateApp.currentUser?.created_at.split("T")[0]}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <div className="text-[20px]">
                <FaWifi />
              </div>
              <span className="flex gap-2 items-center">
                Có
                <span className="text-text-1">{stateApp.currentUser?.friends_count} người theo dõi</span>
              </span>
            </div>
          </div>
          {stateApp.currentUser?.id == authState.user.id ? (
            <button className="bg-input text-center rounded-lg p-2 hover:bg-gray-700 text-[15px] font-medium">
              Chỉnh sửa chi tiết
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {user && <ImageProfile user_uuid={user.uuid} />}

      {user && <FriendProfile user_uuid={user.uuid} />}
    </div>
  );
};

export default SidebarUser;
