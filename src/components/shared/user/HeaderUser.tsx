import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import { FaCamera, FaPen } from "react-icons/fa";
import { IoAddOutline, IoCameraOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const HeaderUser = () => {
  let currentPath = "posts";

  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  if (arrayPath.length == 3) {
    currentPath = "posts";
  } else {
    currentPath = arrayPath[3];
  }
  const [activeTab, setActiveTab] = useState(currentPath);
  const data = [
    {
      label: "Bài viết",
      value: "posts",
      path: "/user/asd",
    },
    {
      label: "Giới thiệu",
      value: "about",
      path: "/user/asd/about",
    },
    {
      label: "Bạn bè",
      value: "friends",
      path: "/user/asd/friends",
    },
    {
      label: "Ảnh",
      value: "photos",
      path: "/user/asd/photos",
    },
    {
      label: "Video",
      value: "videos",
      path: "/user/asd/videos",
    },
    {
      label: "Check in",
      value: "map",
      path: "/user/asd/map",
    },
  ];
  return (
    <div className="bg-[#262828] flex justify-center">
      <div className="w-full md:w-user flex flex-col">
        <div className="w-full h-auto  md:h-[405px] relative rounded-b-lg ">
          <img
            className="w-full h-full object-cover  rounded-b-lg"
            src="https://cdn.pixabay.com/photo/2020/03/17/12/02/vietnam-4940068_1280.jpg"
            alt=""
          />
          <div className="absolute flex items-center bg-white text-black py-2 px-4 gap-1 font-medium hover:opacity-80 cursor-pointer rounded-lg shadow-sm shadow-gray-500 bottom-[16px]  right-[16px]">
            <div>
              <FaCamera />
            </div>
            <span>Chỉnh sửa ảnh</span>
          </div>
        </div>
        <div className="flex   py-[24px] px-[30px] relative">
          <div className="w-[168px] h-[168px] rounded-full flex absolute transition-transform translate-x-50 top-[-30px] right-[35%] md:left-0 border-[3px] border-[#262828]">
            <Link to={"/photo/asds"} className="w-full h-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg"
                alt=""
              />
            </Link>
            <div className="bg-input hover:bg-gray-700 absolute cursor-pointer p-2 text-[20px] rounded-full bottom-[10px] right-[6px]">
              <IoCameraOutline />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:pl-[180px] pt-[140px] md:pt-0 flex-1 items-center">
            <div className="flex flex-col items-center md:items-start flex-1">
              <div className="flex items-center text-[26px] gap-2">
                <h3 className="font-bold">JuJo Bin</h3>
                <div>(Mr Quynh)</div>
              </div>
              <div className="text-text">625 bạn bè</div>
              <div className="flex mt-2">
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                    alt=""
                  />
                </Link>
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                    alt=""
                  />
                </Link>
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                    alt=""
                  />
                </Link>
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-primary-500 py-2 px-3 rounded-lg hover:bg-primary-600">
                  <div>
                    <IoAddOutline />
                  </div>
                  <span>Thêm vào tin</span>
                </button>
                <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                  <div>
                    <FaPen />
                  </div>
                  <span>Chỉnh sửa trang cá nhân</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4  ">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none w-full md:w-[660px]   bg-transparent pb-2 flex "
              indicatorProps={{
                className:
                  "bg-transparent border-b-[3px]   border-primary-500 shadow-none rounded-none h-[40px]",
              }}
            >
              {data.map(({ label, value, path }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    "w-[160px] " + activeTab === value ? "text-gray-900" : ""
                  }
                >
                  <Link
                    to={path}
                    className={
                      " font-medium py-3 " +
                      (activeTab === value
                        ? " text-primary-500"
                        : "text-text-1")
                    }
                  >
                    {label}
                  </Link>
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
