import { Carousel, Progress } from "@material-tailwind/react";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import icon_like from "../../assets/base/icon/icon_like.svg";
import icon_heart from "../../assets/base/icon/icon_heart.svg";
import icon_haha from "../../assets/base/icon/icon_haha.svg";
import icon_woa from "../../assets/base/icon/icon_woa.svg";
import { useEffect, useState } from "react";
import { getUserStory } from "../../services/PostService";
import { UserModel } from "../../types/post";
import { StoryModel } from "../../types/app";
type UserStory = {
  user: UserModel;
  stories: StoryModel[];
};
const ViewStory = () => {
  const [userStory, setUserStory] = useState<UserStory | null>();
  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  const uuid = arrayPath[2];
  useEffect(() => {
    getUserStory(uuid).then((res) => {
      if (res.status) setUserStory(res.data);
    });
  }, [uuid]);
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex">
        <div className="flex-1 flex items-center justify-end pr-[40px]"></div>
        <div className="flex justify-center  bg red py-4 rounded-lg">
          <div className="w-[425px] bg-dark-bg rounded-lg flex items-center justify-center relative">
            <div className="absolute top-0 left-0 right-0 p-2 bg-[rgba(22,22,24,.04)] z-10">
              <div className="flex gap-1">
                {userStory &&
                  userStory.stories.map((story, index) => {
                    return (
                      <Progress
                        key={index}
                        className="bg-gray-400 h-[4px]"
                        color="gray"
                        size="sm"
                        value={0}
                        variant="gradient"
                      />
                    );
                  })}
              </div>
              <div className="flex">
                <div className="flex gap-4 py-3">
                  <div className="w-[40px] h-[40px] rounded-full">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={userStory ? userStory.user.avatar : ""}
                      alt=""
                    />
                  </div>
                  <Link to={"/user/"+userStory?.user.uuid} className="flex items-center gap-2">
                    <h4 className="font-bold">
                      {userStory &&
                        userStory.user.first_name +
                          " " +
                          userStory.user.last_name}
                    </h4>
                    <div className="flex items-center text-[14px] gap-1">
                      <span>2 giờ</span>
                      <div>
                        <FaEarthAfrica />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Carousel
              className="rounded-xl"
              loop
              autoplayDelay={2000}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {userStory ? (
                userStory.stories.map((story, index) => {
                  return (
                    <div className="h-full w-full relative flex flex-col" key={index}>
                      {story.story.includes("video") ? (
                        <video
                       
                          className="h-full w-full rounded-lg"
                          controls
                        >
                          <source
                            src={story.story}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                         
                          src={story.story}
                          alt="image 1"
                          className="h-full w-full object-cover"
                        />
                      )}

                      <div className=" absolute bottom-[50px] text-center left-0 right-0 h-[100px] bg-[rgba(22,22,24,.12)] pt-4">
                        {story.content}
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}

            
            </Carousel>
          </div>
        </div>
        <div className="flex-1 flex items-center pl-[40px]"></div>
      </div>
      <div className=" py-4 flex justify-center items-center">
        <div className="flex items-center">
          <div className="w-[268px] flex items-center border-2 py-2 px-3 rounded-full border-input ">
            <input
              type="text"
              className="w-full bg-transparent"
              placeholder="Trả lời..."
            />
            <div className=" rounded-full hover:text-primary-500 cursor-pointer">
              <IoSend />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
              <img src={icon_like} alt="" />
            </div>
            <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
              <img src={icon_heart} alt="" />
            </div>
            <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
              <img src={icon_haha} alt="" />
            </div>
            <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
              <img src={icon_woa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStory;
