import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaGraduationCap,
  FaHeart,
  FaLink,
  FaPhoneAlt,
  FaTrashAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { FaEarthAsia, FaLocationDot } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { IoHome, IoLocationOutline } from "react-icons/io5";
import UserFriend from "./UserFriend";
import UserPhoto from "./UserPhoto";
import UserVideo from "./UserVideo";
const dataAbout = [
  {
    keyMap: "work_and_education",
    data: [
      {
        title: "Đại học",
        add: "Thêm trường cao đẳng đại học",
        items: [
          {
            link: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/430011579_807261194776968_37586727289020207_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jLLAOY_7f70Q7kNvgF-YuyA&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDV60b15AS_-i-Y1D80IPs61XbPBay5F21aj1g3yED3nQ&oe=6637C25F",
            icon: "",
            name: "Từng học tại",
            value: "Cao đẳng FPT Polytechnic",
            info: "11 tháng 8, 2018-nay",
          },
          {
            link: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/430011579_807261194776968_37586727289020207_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jLLAOY_7f70Q7kNvgF-YuyA&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDV60b15AS_-i-Y1D80IPs61XbPBay5F21aj1g3yED3nQ&oe=6637C25F",
            icon: "",
            name: "Từng học tại",
            value: "Cao đẳng FPT Polytechnic",
            info: "11 tháng 8, 2018-nay",
          },
          {
            link: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/430011579_807261194776968_37586727289020207_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jLLAOY_7f70Q7kNvgF-YuyA&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDV60b15AS_-i-Y1D80IPs61XbPBay5F21aj1g3yED3nQ&oe=6637C25F",
            icon: "",
            name: "Từng học tại",
            value: "FPT University HCM",
            info: "",
          },
        ],
      },
    ],
  },
  {
    keyMap: "overview",
    data: [
      {
        title: "Tổng quan",
        add: "",
        items: [
          {
            link: "",
            icon: <BiSolidShoppingBags />,
            name: "",
            value: "Làm việc tại Sài Gòn",
            info: "23 tháng 6, 2021 đến nay",
          },
          {
            link: "",
            icon: <FaGraduationCap />,
            name: "Từng học tại ",
            value: "Cao đẳng FPT Polytechnic",
            info: "",
          },
          {
            link: "",
            icon: <IoHome />,
            name: "Sống tại",
            value: "Gia Nghĩa",
            info: "",
          },
          {
            link: "",
            icon: <FaLocationDot />,
            name: "Đến từ",
            value: "Nam Định",
            info: "",
          },
          {
            link: "",
            icon: <FaHeart />,
            name: "Độc thân",
            value: "",
            info: "",
          },
          {
            link: "",
            icon: <FaPhoneAlt />,
            name: "",
            value: "0358723520",
            info: "Di động",
          },
        ],
      },
    ],
  },
  {
    keyMap: "places",
    data: [
      {
        title: "Nơi từng sống",
        add: "Thêm thành phố",
        items: [
          {
            link: "",
            icon: <IoLocationOutline />,
            name: "",
            value: "Gia nghĩa",
            info: "Tỉnh/Thành phố hiện tại",
          },
          {
            link: "",
            icon: <IoLocationOutline />,
            name: "",
            value: "Nam Định",
            info: "Quê quán",
          },
        ],
      },
    ],
  },
  {
    keyMap: "contact_and_basic_info",
    data: [
      {
        title: "Thông tin liên hệ",
        add: "Thêm số điện thoại",
        items: [
          {
            link: "",
            icon: <FaPhoneAlt />,
            name: "",
            value: "0358723520",
            info: "Di động",
          },
        ],
      },
      {
        title: "Các trang web liên kết xã hội",
        add: "Thêm liên kết xã hội",
        items: [
          {
            link: "",
            icon: <FaLink />,
            name: "",
            value: "https://mr-quynh.com",
            info: "Trang Web",
          },
        ],
      },
    ],
  },
  {
    keyMap: "family_and_relationships",
    data: [
      {
        title: "Mối quan hệ",
        add: "",
        items: [
          {
            link: "",
            icon: <FaHeart />,
            name: "Độc thân",
            value: "",
            info: "",
          },
        ],
      },
      {
        title: "Thành viên trong gia đình",
        add: "Thêm người thân",
        items: [
          {
            link: "https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940054_1280.jpg",
            icon: "",
            name: "",
            value: "Hoàng Yến",
            info: "Chị gái",
          },
          {
            link: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474014YrD/anh-gai-xinh-cute-de-thuong-hot-girl-26.jpg",
            icon: "",
            name: "",
            value: "Thiên Hoàng",
            info: "Em trai",
          },
        ],
      },
    ],
  },
  {
    keyMap: "details",
    data: [
      {
        title: "Giới thiệu về bạn",
        add: "",
        items: [
          {
            link: "",
            icon: "",
            name: '"Không có gì khó tới mức người ta làm được mà mình không làm được".',
            value: "",
            info: "",
          },
        ],
      },
      {
        title: "Cách phát âm tên",
        add: "Thêm cách đọc tên",
        items: [],
      },
      {
        title: "Các tên khác",
        add: "Thêm biệt danh, tên thường gọi..",
        items: [
          {
            link: "",
            icon: "",
            name: "Mr Quynh",
            value: "",
            info: "Biệt danh - Hiển thị ở đầu trang cá nhân",
          },
        ],
      },
      {
        title: "Trích dẫn yêu thích",
        add: "",
        items: [
            {
                link: "",
                icon: "",
                name: 'Thành công không phải là do may mắn, mà thành công là sự nỗ lực từng ngày, hành động có mục tiêu, có hoài bão.',
                value: "",
                info: "",
              }
        ],
      },
    ],
  },
  {
    keyMap: "life_events",
    data: [
      {
        title: "Sự kiện trong đời",
        add: "Thêm sự kiện trong đời",
        items: [
         
        ],
      },
      {
        title: "2018",
        add: "",
        items: [
          {
            link: "",
            icon: <FaUserGraduate />,
            name: "Bắt đầu học tại",
            value: " FPT University HCM",
            info: "",
          },
         
          
        ],
      },
    ],
  },
];

const UserAbout = () => {
  const arrayLinks = [
    {
      title: "Tổng quan",
      link: "overview",
    },
    {
      title: "Công việc và học vấn",
      link: "work_and_education",
    },
    {
      title: "Nơi từng sống",
      link: "places",
    },
    {
      title: "Thông tin liên hệ cơ bản",
      link: "contact_and_basic_info",
    },
    {
      title: "Gia đình và các mối quan hệ",
      link: "family_and_relationships",
    },
    {
      title: "Chi tiết về bạn",
      link: "details",
    },
    {
      title: "Sự kiện trong đời",
      link: "life_events",
    },
  ];
  const user_id = 123;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramType = searchParams.get("type") ?? "overview";
  const data = dataAbout.filter((item) => item.keyMap == paramType);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-dark-bg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-[288px] border-r border-input p-2 flex flex-col gap-2">
          <div className="font-bold text-[18px] py-2 px-2">Giới thiệu</div>
          <div className="flex flex-col gap-2">
            {arrayLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/user/${user_id}/about?type=${item.link}`}
                  className={
                    (item.link == paramType
                      ? " text-primary-500 bg-primary-300"
                      : " hover:bg-input text-text") +
                    "  py-2 px-3 rounded-lg text-left"
                  }
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1 py-3 px-4 flex flex-col gap-4 border-t border-input">
          {data[0].data.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                {item.title && <div className="font-bold">{item.title}</div>}

                {item.add && (
                  <div className="flex gap-2 items-center">
                    <div className="text-[30px] text-primary-300">
                      <IoIosAddCircleOutline />
                    </div>
                    <span className="text-primary-500 font-medium text-[15px]">
                      {item.add}
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  {item.items.map((item, index) => {
                    return (
                      <div key={index} className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[40px] h-[40px] rounded-full">
                            {item.icon && (
                              <div className="text-[24px] text-text">
                                {item.icon}
                              </div>
                            )}
                            {item.link && (
                              <img
                                className="w-full h-full rounded-full object-cover"
                                src={item.link}
                                alt=""
                              />
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-2 text-[15px]">
                              {item.name && item.name}
                              <span className="font-medium">{item.value}</span>
                            </div>
                            <div className="text-[12px] text-text">
                              {item.info}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <button>
                            <FaEarthAsia />
                          </button>
                          <div className=" flex items-center justify-center cursor-pointer w-[32px] h-[32px]  rounded-full hover:bg-input scrollbar_hover">
                            <Menu>
                              <MenuHandler>
                                <Button className="bg-transparent flex justify-center items-center p-0">
                                  <BsThreeDots className="text-[24px] " />
                                </Button>
                              </MenuHandler>
                              <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                                <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                                  <div className="text-light-1 size-[24px]">
                                    <MdModeEdit className="size-[20px]" />
                                  </div>
                                  <div className="text-light-1 flex flex-col gap-1">
                                    <div>Chỉnh sửa thông tin</div>
                                  </div>
                                </MenuItem>
                                <MenuItem className="hover:bg-input flex items-center gap-2 p-2">
                                  <div className="text-light-1 size-[24px]">
                                    <FaTrashAlt className="size-[20px]" />
                                  </div>
                                  <div className="text-light-1 flex flex-col gap-1">
                                    <div>Xóa thông tin</div>
                                  </div>
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <UserFriend/>
      <UserPhoto/>
      <UserVideo/>
    </div>
  );
};

export default UserAbout;
