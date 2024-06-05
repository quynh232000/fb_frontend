import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";
import { getListStories } from "../../services/StoryService";
import { StoryModel } from "../../types/app";
import avatar_user from "../../assets/base/avatar_user.webp";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
const Story = () => {
  const stateAuth = useSelector((state: RootState) => state.authReducer);

  const [stories, setStories] = useState([]);
  useEffect(() => {
    getListStories(1).then((res) => {
      if (res.status) setStories(res.data);
    });
  }, []);

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
                src={stateAuth.user.avatar ?? avatar_user}
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
        {stories &&
          stories.map((item: StoryModel, index) => (
            <SwiperSlide key={index}>
              <div className="h-[250px] rounded-lg relative group overflow-hidden cursor-pointer">
                <Link to={`/stories/${item.user.uuid}`}>
                  {item.story.includes("video") ? (
                    <div className="h-full bg-text">
                      <video
                        className="h-full w-full rounded-lg "
                        controls
                      >
                        <source src={item.story} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <img
                      className="w-full object-cover rounded-lg h-full group-hover:scale-[1.03] transition-all duration-300"
                      src={item.story}
                      alt=""
                    />
                  )}

                  <div className="absolute bg-transparent top-0 left-0 right-0 bottom-0 rounded-lg flex flex-col justify-between p-2">
                    <div className="w-[40px] h-[40px] rounded-full border-2 border-primary-500">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={item.user.avatar ?? avatar_user}
                        alt=""
                      />
                    </div>
                    <span>
                      {item.user.first_name + " " + item.user.last_name}
                    </span>
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
