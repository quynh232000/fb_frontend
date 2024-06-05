import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import logo from "../../assets/base/logo-no-text.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderMessage from "./header/HeaderMessage";
import HeaderNotification from "./header/HeaderNotification";
import HeaderUser from "./header/HeaderUser";
import { CiMenuBurger } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import avatar_user from "../../assets/base/avatar_user.webp";

const headerIcons = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Video",
    path: "/watch",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
        <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Marketplace",
    path: "/marketplace",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Nhóm",
    path: "/groups",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
        <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Trò chơi",
    path: "/gaming",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path>
        <path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path>
      </svg>
    ),
  },
];
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleActiveBookmark = () => {
    if (location.pathname == "/bookmarks") {
      navigate(-1);
    } else {
      navigate("/bookmarks");
    }
  };
  const stateAuth = useSelector((state: RootState) => state.authReducer);
  const user = stateAuth.user;
  return (
    <header className="flex justify-between w-full bg-header-1 px-[16px] py-[10px] fixed z-50">
      <div className="flex flex-1 gap-2">
        <Link to={"/"} className="w-[40px] h-[40px]">
          <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
        </Link>
        <div className="flex bg-input rounded-[20px] items-center px-3 gap-4 flex-1]">
          <i className="fa-solid fa-magnifying-glass text-[16px] text-text"></i>
          <input
            className="bg-input flex-1 w-full hidden sm:block"
            placeholder="Tìm kiếm trên Quinsocial"
          />
        </div>
        <div
          onClick={handleActiveBookmark}
          className={
            (location.pathname == "/bookmarks"
              ? "bg-primary-500 "
              : " bg-input ") +
            "flex cursor-pointer rounded-[20px] items-center px-3 gap-4 max-w-sidebar] lg:hidden"
          }
        >
          <CiMenuBurger />
        </div>
      </div>
      <div className=" hidden md:flex-2 lg:w-content w-content lg:flex justify-around gap-2">
        {headerIcons.map((icon, index) => {
          const classCus =
            location.pathname == icon.path
              ? " text-primary-500"
              : " hover:bg-input";
          return (
            <Link
              title={icon.title}
              key={index}
              to={icon.path}
              className={
                "flex items-center flex-1 justify-center rounded-lg relative  py-2  " +
                classCus
              }
            >
              {/* <i className={icon.icon}></i> */}
              {icon.icon}
              {location.pathname == icon.path && (
                <div className="absolute w-full h-[4px] rounded-lg bg-primary-500 bottom-[-7px]"></div>
              )}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <div
          title="Menu"
          className=" w-[40px] h-[40px] bg-input rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          </svg>
        </div>

        <Menu>
          <MenuHandler>
            <div
              title="Tin nhắn"
              className=" w-[40px] h-[40px] bg-input rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500"
            >
              <svg
                viewBox="0 0 12 13"
                width="20"
                height="20"
                fill="currentColor"
                className=""
              >
                <g fillRule="evenodd" transform="translate(-450 -1073)">
                  <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path>
                </g>
              </svg>
            </div>
          </MenuHandler>
          <MenuList className="bg-dark-bg border-transparent text-text-1 shadow-md shadow-gray-700 border-t border-input">
            <>
              <HeaderMessage />
            </>
          </MenuList>
        </Menu>
        <Menu>
          <MenuHandler>
            <div
              title="Thông báo"
              className=" w-[40px] h-[40px] bg-input rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
              </svg>
            </div>
          </MenuHandler>
          <MenuList className="bg-dark-bg border-transparent text-text-1 shadow-md shadow-gray-700 border-t border-input">
            <>
              {" "}
              <HeaderNotification />
            </>
          </MenuList>
        </Menu>

        <Menu>
          <MenuHandler>
            <div title="Tài khoản" className="relative w-fit cursor-pointer">
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src={user.avatar || avatar_user}
                alt=""
              />
              <div className="absolute w-[14px] h-[14px] rounded-full right-[-2px] bottom-[0px] bg-input flex items-center justify-center">
                <i className="fa-solid fa-chevron-down text-[12px] "></i>
              </div>
            </div>
          </MenuHandler>
          <MenuList className="bg-dark-bg border-transparent text-text-1 shadow-md shadow-gray-700 border-t border-input">
            <>
              <HeaderUser
                uuid={user.uuid}
                name={user.first_name + " " + user.last_name}
                avatar={user.avatar || avatar_user}
              />
            </>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
