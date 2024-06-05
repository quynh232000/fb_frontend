import {
  FaHospitalUser,
  FaUserFriends,
  FaUserPlus,
  FaUserTag,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import AddFriendItem from "../components/item/AddFriendItem";
import { useEffect, useState } from "react";
import { getListUsers, getRequestFriend } from "../services/UserService";

const arrayLinks = [
  {
    title: "Trang chủ",
    link: "all",
    icon: <FaUserFriends />,
  },
  {
    title: "Lời mời kết bạn",
    link: "requests",
    icon: <FaUserTag />,
  },

  {
    title: "Gợi ý",
    link: "suggestions",
    icon: <FaUserPlus />,
  },
  {
    title: "Tất cả bạn bè",
    link: "list",
    icon: <FaHospitalUser />,
  },
];
const Friends = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramType = searchParams.get("type") ?? "all";
  const [users, setUsers] = useState([]);
  const [requestFriend, setRequestFriend] = useState([]);
  useEffect(() => {
    getListUsers().then((res) => {
      if (res.status) setUsers(res.data);
    });
    getRequestFriend().then((res) => {
      if (res.status) setRequestFriend(res.data);
    });
  }, []);

  return (
    <div className=" h-full flex flex-col lg:flex-row">
      <div className="hidden md:block w-full lg:w-sidebar bg-dark-bg border-r border-input p-2">
        <div className="font-bold text-[20px] py-2">Bạn bè</div>
        <div className="flex flex-col gap-1 text-text-1">
          {arrayLinks.map((item, index) => {
            return (
              <Link
                key={index}
                to={"/friends?type=" + item.link}
                className={
                  " flex items-center gap-3 p-3 rounded-lg font-bold " +
                  (paramType == item.link ? " bg-input " : " hover:bg-input")
                }
              >
                <div
                  className={
                    (paramType == item.link
                      ? "bg-primary-500 "
                      : "bg-gray-800 ") + "text-[20px]  p-2 rounded-full"
                  }
                >
                  {item.icon}
                </div>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll scrollbar_custom">
        <div className="flex flex-col gap-4 p-0 md:p-4">
          {paramType != "suggestions" && (
            <div className="flex flex-col">
              <div className="flex justify-between items-center p-4">
                <div className="font-bold text-[20px]">Lời mời kết bạn</div>
                <Link
                  to={"/friends?type=requests"}
                  className="text-primary-700"
                >
                  Xem tất cả
                </Link>
              </div>
              {requestFriend.length > 0 ? (
                requestFriend.map((user, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4   lg:grid-cols-3 gap-2 p-4 "
                    >
                      <AddFriendItem user={user} type="requests" />
                    </div>
                  );
                })
              ) : (
                <div className="text-center w-full py-5">
                  Không có lời mời kết bạn nào!
                </div>
              )}
            </div>
          )}
          {paramType != "requests" && (
            <div className="flex flex-col">
              <div className="flex justify-between items-center p-4">
                <div className="font-bold text-[20px]">
                  Những người bạn có thể biết
                </div>
                <Link
                  to={"/friends?type=suggestions"}
                  className="text-primary-700"
                >
                  Xem tất cả
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-2 p-4">
                {users.length > 0 &&
                  users.map((user, index) => {
                    return (
                      <AddFriendItem
                        key={index}
                        user={user}
                        type="suggestion"
                      />
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
