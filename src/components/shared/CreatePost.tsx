import live from "../../assets/base/video_live.png";
import img from "../../assets/base/img.png";
import emotion from "../../assets/base/emotion.png";
import { useState } from "react";
import ModalCreatePost from "../modal/ModalCreatePost";
const CreatePost = () => {
  const [isModalCreatePost, setIsModalCreatePost] = useState(false);
  const handleModalCreatePost = () => {
    setIsModalCreatePost(!isModalCreatePost);
    
    
  };
  // 
  return (
    <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
      <ModalCreatePost isModalCreatePost={isModalCreatePost} setIsModalCreatePost={setIsModalCreatePost}/>
      <div className="flex gap-2 items-center">
        <img
        className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://vsmall.vn/wp-content/uploads/2022/06/hinh-anh-con-gai-cute-de-thuong-cute-anime-hoat-hinh-xinh.jpg"
          alt=""
        />
        <div className="flex-1 bg-input flex items-center px-4 py-3 rounded-full ">
          <div onClick={handleModalCreatePost} className="w-full bg-transparent text-border-1 cursor-pointer">Bin ơi, bạn đang nghĩ gì thế?</div>
          {/* <input readOnly onClick={handleModalCreatePost()} className="w-full bg-transparent" type="text" placeholder="Bin ơi, bạn đang nghĩ gì thế?" /> */}
        </div>
      </div>
      <div className="flex justify-between pt-2 border-t-2 border-input">
        <div className="flex gap-3 items-center rounded-lg hover:bg-input p-3 justify-center flex-1 cursor-pointer">
            <img className="" src={live} alt="" />
            <span className="text-text font-medium">Video trực tiếp</span>
        </div>
        <div onClick={handleModalCreatePost} className="flex gap-3 items-center rounded-lg hover:bg-input p-3 justify-center flex-1 cursor-pointer">
            <img className="" src={img} alt="" />
            <span className="text-text font-medium">Ảnh/video</span>
        </div>
        <div className="hidden sm:flex  gap-3 items-center rounded-lg hover:bg-input p-3 justify-center flex-1 cursor-pointer">
            <img className="" src={emotion} alt="" />
            <span className="text-text font-medium">Cảm xúc/hoạt động</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
