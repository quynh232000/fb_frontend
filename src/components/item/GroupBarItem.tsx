
import { Link } from "react-router-dom";

const GroupBarItem = () => {
  return (
    <Link
      to={"/groups/:groupId"}
      className="flex hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer items-center "
    >
      <div className="w-[48px] h-[48px] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="text-[16px] flex-1 font-medium">
          Lập trình PHP - Laravel Việt Nam
        </div>
        <span className="text-text text-[14px] font-normal">Hoạt động gần nhất: 15 ngày trước</span>
      </div>
    </Link>
  );
};

export default GroupBarItem;
