import { useEffect, useState } from "react";
import sidebarIcon from "../../assets/base/sidebar_left-icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import avatar_user from "../../assets/base/avatar_user.webp";
import { GroupModel } from "../../types/app";
import { getMyGroups, groupJoined } from "../../services/GroupService";
import bg from "../../assets/base/bg_view_create_group.svg"
const sidebarItems = [
  {
    id: 1,
    title: "Bạn bè",
    position: 32 * 8 - 1,
    link: "/friends",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 2,
    title: "Nhóm",
    position: 34 * 1 - 1,
    link: "/groups",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 3,
    title: "Kỉ niệm",
    position: 34 * 12 - 2,
    link: "/onthisday",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 4,
    title: "Đã lưu",
    position: 30 * 5 - 3,
    link: "/saved",
    type: "icon",
    img: sidebarIcon,
  },

  {
    id: 5,
    title: "Video",
    position: 34 * 14 - 0,
    link: "/watch",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 6,
    title: "Chơi game",
    position: 34 * 2 + 3,
    link: "/gaming",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 7,
    title: "Chiến dịch gây quỹ",
    position: 33 * 9 - 0,
    link: "/fundraisers",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 8,
    title: "Marketplace",
    position: 34 * 11 - 6,
    link: "/marketplace",
    type: "icon",
    img: sidebarIcon,
  },
  {
    id: 9,
    title: "Live",
    position: 33 * 10 - 0,
    link: "/live",
    type: "icon",
    img: sidebarIcon,
  },
];
const SidebarLeft = () => {
  const [myGroupJoined, setMyGroupJoined] = useState<GroupModel[] >([]);
  const [sidebar, setSidebar] = useState(false);
  const stateAuth = useSelector((state: RootState) => state.authReducer);
  const user = stateAuth.user;
  useEffect(() => {
    getMyGroups().then((res) => {
      if (res && res.status) {
        groupJoined().then((res2) => {
          if (res2 && res2.status) {
            setMyGroupJoined([...res.data,...res2.data]);
          }
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col h-full overflow-y-scroll pt-4 scrollbar_custom">
      <Link
        to={"/user/" + user.uuid}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <img
            className="w-[32px] h-[32px] rounded-full object-cover"
            src={user.avatar ?? avatar_user}
            alt="avatar"
          />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">
          {user.first_name + " " + user.last_name}
        </div>
      </Link>
      {sidebarItems.map((item, index) => {
        if (!sidebar && index >= 5) {
          return;
        }
        return (
          <Link
            to={item.link}
            key={index}
            className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer"
          >
            <div>
              <i
                data-visualcompletion="css-img"
                className=""
                style={{
                  backgroundImage: "url('" + item.img + "')",
                  backgroundPosition: "0 -" + item.position + "px",
                  backgroundSize: "auto",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </div>
            <div className="size-[16px] flex-1 leading-[16px]">
              {item.title}
            </div>
          </Link>
        );
      })}

      <div
        onClick={() => {
          setSidebar(!sidebar);
        }}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div className="rounded-full bg-input w-[36px] h-[36px] flex items-center justify-center">
          <i
            className={
              "fa-solid fa-chevron-" +
              (sidebar ? "up" : "down") +
              " text-[18px]"
            }
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">
          {sidebar ? "Ẩn bớt" : "Xem thêm"}
        </div>
      </div>
      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300 border-t border-gray-700 py-3 font-semibold">
          Lối tắt của bạn
        </div>
      </div>

      <div>
        {myGroupJoined &&
          myGroupJoined.length > 0 ?
          myGroupJoined.map((group, index) => {
            return (
              <Link
              key={index}
                to={"/groups/"+group.uuid}
                className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
              >
                <div>
                  <img
                    className="w-[36px] h-[36px] rounded-lg object-cover"
                    src={group.thumbnail ?? bg}
                    alt="image"
                  />
                </div>
                <div className=" flex-1 ">
                 {group.name}
                </div>
              </Link>
            );
          }):<div className="flex justify-center">...</div>}
      </div>
    </div>
  );
};

export default SidebarLeft;
