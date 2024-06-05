import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Link,  useLocation,  useNavigate } from "react-router-dom";
import StoryItem from "../components/item/StoryItem";

import { useEffect, useState } from "react";
import { getListStories } from "../services/StoryService";
import { StoryModel } from "../types/app";
import ViewStory from "../components/shared/ViewStory";


const Stories = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  const uuid = arrayPath[2];
  
  const [stories, setStories] = useState([]);
  useEffect(() =>{
      getListStories(1).then((res) =>{
          if(res.status) setStories(res.data)
      })
     
  },[])
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10 ">
      <div className="flex h-full">
        <div className="hidden lg:flex w-sidebar bg-dark-bg  flex-col">
          <div className="flex flex-col h-full">
            <div className="flex gap-2 py-2 px-4 border-b border-input items-center">
              <div
                onClick={handleBack}
                className="bg-black h-fit p-2  text-text-1 hover:bg-input cursor-pointer text-[26px] rounded-full"
              >
                <IoMdClose />
              </div>
              {/* <Link to={"/"} className="w-[42px] h-[42px]">
                <img src={logo} alt="" />
              </Link> */}
            </div>
            <div className="flex flex-col gap-2 p-3 overflow-y-scroll scrollbar_custom">
              <div className="flex flex-col gap-3">
                <div className="font-bold text-[26px] ">Tin</div>
                <div className="flex gap-1 items-center text-primary-500">
                  <Link to={"/"}>Kho lưu chữ</Link>
                  <div>·</div>
                  <Link to={"/"}>Cài đặt</Link>
                </div>
                <div className="font-medium text-[18px]">Tin của bạn</div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <div className="bg-input text-[26px] text-primary-500 rounded-full p-4">
                      <IoMdAdd />
                    </div>
                    <Link
                      to={"/story/create"}
                      className="flex flex-col gap-1 cursor-pointer"
                    >
                      <div className="font-medium">Tạo tin</div>
                      <span className="text-[14px] text-text">
                        Bạn có thể chia sẻ ảnh hoặc viết gì đó
                      </span>
                    </Link>
                  </div>
                  {/* <StoryItem active={false} /> */}
                </div>
              </div>
              <div className="flex flex-col pt-4 gap-2">
                <div className="font-bold">Tất cả tin</div>
                <div className="flex flex-col gap-1">
                  {stories && stories.map((story:StoryModel,index)=>{
                    return <StoryItem active={uuid == story.user.uuid} key={index} story={story}/>
                  })}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <ViewStory />
      </div>
    </div>
  );
};

export default Stories;
