import { BsThreeDots } from "react-icons/bs";
import FriendItem from "../item/FriendItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
const SuggestionFriend = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  return (
    <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="font-medium text-[18px]">
          Những người bạn có thể biết
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div className="flex gap-2">
        <Swiper
          slidesPerView={isSmallScreen?2:3}
          spaceBetween={5}
          breakpoints={{
            340: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 5,
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
            <FriendItem />
          </SwiperSlide>
          <SwiperSlide>
            <FriendItem />
          </SwiperSlide>
          <SwiperSlide>
            <FriendItem />
          </SwiperSlide>
          <SwiperSlide>
            <FriendItem />
          </SwiperSlide>
          <SwiperSlide>
            <FriendItem />
          </SwiperSlide>
          <SwiperSlide>
            <FriendItem />
          </SwiperSlide>
        </Swiper>
      </div>
      <Link to={"friends"} className="text-center text-primary-700 mt-2 font-medium">
        Xem tất cả
      </Link>
    </div>
  );
};

export default SuggestionFriend;
