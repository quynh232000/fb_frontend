import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FriendItem = () => {
  return (
    <div className="flex-1 border border-input  rounded-lg flex flex-col gap-1">
      <div className="">
        <img
          className="w-full rounded-t-lg"
          src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/429946112_422472147015984_2310587132865632506_n.jpg?stp=dst-jpg_s240x240&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GUzCL0vYAeYQ7kNvgFUDiQ6&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBHSxUgEzhkeH7HXNRNz-XZmFTu_nip398sZHmhp1Fvgw&oe=663663BB"
          alt=""
        />
      </div>
      <div className="flex flex-col p-3 mb-2">
        <Link to={"/user"} className="font-medium text-[18px]">Diễm Diễm</Link>
        <div className="text-text text-[14px]">16 bạn chung</div>
        <div className="flex py-2 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg">
          <div className="text-[18px] ">
            <FaUserPlus />
          </div>
          <span className="font-medium">Thêm bạn bè</span>
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
