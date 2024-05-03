import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import { FaCamera,  FaShare } from "react-icons/fa";
import { FaEarthAsia, FaPeopleGroup } from "react-icons/fa6";
import {  IoAddSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const HeaderGroup = () => {
  let currentPath = "all";

  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  if (arrayPath.length == 3) {
    currentPath = "all";
  } else {
    currentPath = arrayPath[3];
  }
  
  const [activeTab, setActiveTab] = useState(currentPath);
  const group_id =123;
  const data = [
    {
      label: "Thảo luận",
      value: "all",
      path: `/groups/${group_id}/all`,
    },
    {
      label: "Mọi người",
      value: "members",
      path: `/groups/${group_id}/members`,
    },
    {
      label: "Sự kiện",
      value: "events",
      path: `/groups/${group_id}/events`,
    },
    {
      label: "File phương tiện",
      value: "media",
      path: `/groups/${group_id}/media`,
    },
    {
      label: "File",
      value: "files",
      path: `/groups/${group_id}/files`,
    },
  
  ];
  return (
    <div className="bg-[#262828] flex justify-center">
      <div className="w-user flex flex-col">
        <div className="h-[405px] relative rounded-b-lg ">
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
        <div className="flex py-[24px] px-[30px] relative">
          <div className="flex  flex-1 items-center">
            <div className="flex flex-col flex-1">
              <div className="flex items-center text-[26px] gap-2">
                <h3 className="font-bold">
                  IT Remote/Freelancer/Parttime Jobs in Vietnam
                </h3>
              </div>
              <div className="text-text flex items-center gap-2 text-[14px]">
                <div className="flex items-center gap-2">
                  <FaEarthAsia />
                  Công khai
                </div>
                <span>·</span>
                <div>19,9k thành viên</div>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <div className="flex  items-center flex-1">
                  <Link
                    to={"/user/asdsad"}
                    className="w-[36px] h-[36px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                  >
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                      alt=""
                    />
                  </Link>
                  <Link
                    to={"/user/asdsad"}
                    className="w-[36px] h-[36px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                  >
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                      alt=""
                    />
                  </Link>
                  <Link
                    to={"/user/asdsad"}
                    className="w-[36px] h-[36px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                  >
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                      alt=""
                    />
                  </Link>
                  <Link
                    to={"/user/asdsad"}
                    className="w-[36px] h-[36px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                  >
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                      alt=""
                    />
                  </Link>
                  <Link
                    to={"/user/asdsad"}
                    className="w-[36px] h-[36px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                  >
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/232969575_114915294226211_2541529785130672396_n.jpg?stp=cp0_dst-jpg_p32x32&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_oexLA9o1lsQ7kNvgH7_TFJ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfChrkH1kK90PPMAwsst2fHrWQMJKyq6HiWuYmvO22HzvA&oe=66368305"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-primary-500 py-2 px-3 rounded-lg hover:bg-primary-600">
                    <div>
                      <IoAddSharp />
                    </div>
                    <span>Mời</span>
                  </button>
                  <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                    <div>
                      <FaShare />
                    </div>
                    <span>Chia sẻ</span>
                  </button>
                  <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                    <div>
                      <FaPeopleGroup />
                    </div>
                    <span>Đã tham gia</span>
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="p-4  ">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none w-[720px]   bg-transparent pb-2 flex "
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

export default HeaderGroup;
