import live from "../../assets/base/video_live.png";
import img from "../../assets/base/img.png";
import emotion from "../../assets/base/emotion.png";
const CreatePost = () => {
  return (
    <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <img
        className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBsQBhjgHgi6GytRyTz-9N-5qa73VcJA2exSS3rzf3s9w&oe=6632FF0B"
          alt=""
        />
        <div className="flex-1 bg-input flex items-center px-4 py-3 rounded-full">
          <input className="w-full bg-transparent" type="text" placeholder="Bin ơi, bạn đang nghĩ gì thế?" />
        </div>
      </div>
      <div className="flex justify-between pt-2 border-t-2 border-input">
        <div className="flex gap-3 items-center rounded-lg hover:bg-input p-3 justify-center flex-1 cursor-pointer">
            <img className="" src={live} alt="" />
            <span className="text-text font-medium">Video trực tiếp</span>
        </div>
        <div className="flex gap-3 items-center rounded-lg hover:bg-input p-3 justify-center flex-1 cursor-pointer">
            <img className="" src={img} alt="" />
            <span className="text-text font-medium">Ảnh/video</span>
        </div>
        <div className="flex gap-3 items-center rounded-lg hover:bg-input p-3 justify-center flex-1 cursor-pointer">
            <img className="" src={emotion} alt="" />
            <span className="text-text font-medium">Cảm xúc/hoạt động</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
