import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
const Story = () => {
  const ServiceData = [
    {
      img: "https://i.pinimg.com/736x/29/b9/15/29b915747f6faebd28cc74e8f67324e9.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/03/17/12/02/vietnam-4940070_1280.jpg",
    },
    {
      img: "https://wallpapers.com/images/hd/winking-cute-girl-shen9t2b3lrcv8he.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZCu7-b1doJhi2JObN7Emsjlgmn6XbKeR5LiwdoYGYA&s",
    },
    {
      img: "https://i.pinimg.com/736x/29/b9/15/29b915747f6faebd28cc74e8f67324e9.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/03/17/12/02/vietnam-4940070_1280.jpg",
    },
    {
      img: "https://wallpapers.com/images/hd/winking-cute-girl-shen9t2b3lrcv8he.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZCu7-b1doJhi2JObN7Emsjlgmn6XbKeR5LiwdoYGYA&s",
    },
  ];
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  return (
    <div className="py-4">
      <Swiper
        slidesPerView={isSmallScreen ? 2 : 4}
        spaceBetween={10}
        breakpoints={{
          340: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next",
        }}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="w-full"
      >
        <SwiperSlide>
          <div className="h-[250px] rounded-lg relative group overflow-hidden cursor-pointer bg-dark-bg">
            <Link to={"/story/create"}>
              <img
                className="w-full object-cover  h-[200px] group-hover:scale-[1.03] transition-all duration-300"
                src={ServiceData[0].img}
                alt=""
              />
              <div className="absolute bg-transparent top-0 left-0 right-0 bottom-0 rounded-lg flex flex-col justify-end p-2 items-center">
                <div className="text-[30px] border-4 border-dark-bg w-fit rounded-full bg-primary-500 p-1">
                  <svg
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <g fillRule="nonzero">
                        <path
                          d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                          transform="translate(354.5 159.5)"
                        ></path>
                        <path
                          d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                          transform="translate(354.5 159.5)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="text-center">Tạo tin</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[250px] rounded-lg relative group overflow-hidden cursor-pointer">
              <Link to={"/stories/user_id/story_id"}>
                <img
                  className="w-full object-cover rounded-lg h-full group-hover:scale-[1.03] transition-all duration-300"
                  src={item.img}
                  alt=""
                />
                <div className="absolute bg-transparent top-0 left-0 right-0 bottom-0 rounded-lg flex flex-col justify-between p-2">
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-primary-500">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/241449366_2836732613253181_2678351927315389215_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UdGrpMyMEv8Ab4c6j0l&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCrNqkF-BRTbEmEutZXiVm3DSdK1kOC93BpVog5uSjpLg&oe=6632E5EF"
                      alt=""
                    />
                  </div>
                  <span>Từ Mỹ Ân</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;
