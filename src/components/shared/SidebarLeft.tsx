import { useState } from "react";
import sidebarIcon from "../../assets/base/sidebar_left-icon.png";
import { Link } from "react-router-dom";
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
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex flex-col h-full overflow-y-scroll pt-4 scrollbar_custom" >
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-full"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">JoJo Bin</div>
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

      <div onClick={()=>{setSidebar(!sidebar)}} className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer ">
        <div className="rounded-full bg-input w-[36px] h-[36px] flex items-center justify-center">
          <i className={"fa-solid fa-chevron-"+(sidebar?"up":"down")+" text-[18px]"}></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">{sidebar?"Ẩn bớt":"Xem thêm"}</div>
      </div>
      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300 border-t border-gray-700 py-3 font-semibold">Lối tắt của bạn</div>
      </div>

      <div>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/416584392_122134126508074007_1075186232136014295_n.jpg?stp=c20.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UrTmjq7s-cUAb5WAq_l&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCUh83a02lHhDkDpYFZNEKqdSDm4jGQbW_sKkZbmzHaPQ&oe=6632AFAC')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/289619036_109944845090430_8265022046274594962_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yuY8f6F0UBcAb5qIibv&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAeCS8jNcAhwNsW-7upJevphSPQaQiKgWQtZN2rIlS81g&oe=6632A2EF')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/289619036_109944845090430_8265022046274594962_n.jpg?stp=c23.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yuY8f6F0UBcAb5qIibv&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAeCS8jNcAhwNsW-7upJevphSPQaQiKgWQtZN2rIlS81g&oe=6632A2EF')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/profile"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/416584392_122134126508074007_1075186232136014295_n.jpg?stp=c20.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UrTmjq7s-cUAb5WAq_l&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCUh83a02lHhDkDpYFZNEKqdSDm4jGQbW_sKkZbmzHaPQ&oe=6632AFAC')",
              backgroundPosition: "0 -0px",
              backgroundSize: "auto",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      </div>



    </div>
  );
};

export default SidebarLeft;
