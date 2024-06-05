import { BsThreeDots } from "react-icons/bs";
import FriendItem from "../item/FriendItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { UserModel } from "../../types/post";
type SuggestionFriendProps ={
  type:string,
  friends:UserModel[]
}
const SuggestionFriend = ({type,friends}:SuggestionFriendProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

 
  return (
    <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="font-medium text-[18px]">
          {type =='suggestionFriend'?"Những người bạn có thể biết":"Lời mời kết bạn"}
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div className="flex gap-2">
        <Swiper
          slidesPerView={isSmallScreen ? 2 : 3}
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
          {friends &&
            friends.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <FriendItem user={item} type={type}/>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <Link
        to={"friends?type="+(type=='suggestionFriend'?"suggestions":"requests")}
        className="text-center text-primary-700 mt-2 font-medium"
      >
        Xem tất cả
      </Link>
    </div>
  );
};

export default SuggestionFriend;
