import { FaAngleRight, FaMoon } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

type HeaderUserProps={
  uuid:string,
  name:string,
  avatar:string
}
const HeaderUser = ({uuid,name,avatar}:HeaderUserProps) => {
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('TOKEN_TYPE')
    localStorage.removeItem('USER_TOKEN')
    navigate("/signin")
  }
  return (
    <div className="flex  w-sidebar relative text-[16px]">
      <div className="flex flex-col h-full  flex-1 overflow-y-scroll scrollbar_custom_hidden scrollbar_custom scrollbar_hover gap-4">
        <div className="border-b border-input py-3">
          <Link
            to={"/user/"+uuid}
            className="flex items-center gap-2 hover:bg-input rounded-lg p-2"
          >
            <div className="w-[36px] h-[36px] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src={avatar}
                alt=""
              />
            </div>
            <div className="font-bold">{name}</div>
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-text-1">
          <Link
            to={"/user/123"}
            className="flex items-center gap-2 hover:bg-input rounded-lg px-2 py-1"
          >
            <div className=" p-2 text-[24px] rounded-full bg-input">
              <IoSettingsSharp />
            </div>
            <div className="font-bold flex-1">Cài đặt & quyền riêng tư</div>
            <div>
              <FaAngleRight />
            </div>
          </Link>

          <Link
            to={"/user/123"}
            className="flex items-center gap-2 hover:bg-input rounded-lg px-2 py-1"
          >
            <div className=" p-2 text-[22px] rounded-full bg-input">
              <FaMoon />
            </div>
            <div className="font-bold flex-1">Màn hình & trợ năng</div>
          </Link>

          <Link
            to={"/user/123"}
            className="flex items-center gap-2 hover:bg-input rounded-lg px-2 py-1"
          >
            <div className=" p-2 text-[24px] rounded-full bg-input">
              <IoMdHelpCircle />
            </div>
            <div className="font-bold flex-1">Đóng góp ý kiến</div>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center justify-start gap-2 hover:bg-input rounded-lg px-2 py-1"
          >
            <div className=" p-2 text-[24px] rounded-full bg-input">
              <IoLogOut />
            </div>
            <div className="font-bold flex-1 text-left">Đăng xuất</div>
          </button>
        </div>
        <div className="text-text text-[12px] px-2">
          Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo · Cookie
          · · Meta © 2024
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
