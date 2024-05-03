import { FaClock, FaGraduationCap, FaHeart, FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import UserFriendItem from "../../item/UserFriendItem";

const SidebarUser = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-dark-bg rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[20px]">Giới thiệu</div>
          <span className="text-center text-[15px]">Nothing is impossible</span>
          <button className="bg-input text-center rounded-lg p-2 hover:bg-gray-700 text-[15px] font-medium">
            Chỉnh sửa tiểu sử
          </button>
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
                <span className="text-text-1">Gia Nghĩa</span>
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
                <span className="text-text-1">Tháng 8 năm 2017</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-text">
              <div className="text-[20px]">
                <FaWifi />
              </div>
              <span className="flex gap-2 items-center">
                Có
                <span className="text-text-1">1.2k người theo dõi</span>
              </span>
            </div>
          </div>
          <button className="bg-input text-center rounded-lg p-2 hover:bg-gray-700 text-[15px] font-medium">
            Chỉnh sửa chi tiết
          </button>
        </div>
      </div>

      <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="font-bold text-[20px]">Ảnh</div>
          <Link to={"/user/ssdf/photos"} className="text-primary-500">
            Xem tất cả ảnh
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940054_960_720.jpg"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://thuthuatnhanh.com/wp-content/uploads/2020/01/anh-girl-xinh-cap-3-de-thuong.jpg"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0iiUQoRprkFCNfq04tATr6g1libC8XixiSlwDXbW6A&s"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0iiUQoRprkFCNfq04tATr6g1libC8XixiSlwDXbW6A&s"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://thuthuatnhanh.com/wp-content/uploads/2020/01/anh-girl-xinh-cap-3-de-thuong.jpg"
              alt=""
            />
          </Link>
          <Link to={"/photo/123"}>
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0iiUQoRprkFCNfq04tATr6g1libC8XixiSlwDXbW6A&s"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <div className="font-bold text-[20px]">Bạn bè</div>
            <Link to={"/user/ssdf/friends"} className="text-primary-500">
              Xem tất cả bạn bè
            </Link>
          </div>
          <div className="text-text">678 bạn bè</div>
        </div>
        <div className="grid grid-cols-3 rounded-lg overflow-hidden gap-3">
          <UserFriendItem/>
          <UserFriendItem/>
          <UserFriendItem/>
          <UserFriendItem/>
          <UserFriendItem/>
          <UserFriendItem/>
        </div>
      </div>
    </div>
  );
};

export default SidebarUser;
