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
        to={"/user/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <img className="w-[32px] h-[32px] rounded-full object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
          
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
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      <Link
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
          <i
            data-visualcompletion="css-img"
            className="rounded-lg"
            style={{
              backgroundImage:
                "url('https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg')",
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
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      <Link
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      <Link
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">Lập trình PHP - Laravel Việt Nam</div>
      </Link>
      <Link
        to={"/groups/123"}
        className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
      >
        <div>
        <img className="w-[36px] h-[36px] rounded-lg object-cover" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-mu-hong.jpg" alt="image" />
        </div>
        <div className="size-[16px] flex-1 leading-[16px]">IT Inter - Fresher</div>
      </Link>
      </div>



    </div>
  );
};

export default SidebarLeft;
