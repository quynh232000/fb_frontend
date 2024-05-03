import { FaUser } from "react-icons/fa";

const HeaderNotificationItem = () => {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-input rounded-lg cursor-pointer ">
      <div className="w-[56px] h-[56px] rounded-full relative">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/356242096_118102127991831_4363206265247744893_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=byWlWZ4gHpkQ7kNvgH2Uyq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCy_3k2HNbcIhqeaQ7F7brJe9Gi3FU686NLe1eBNliS-w&oe=663913A5"
          alt="image"
        />
        <div className="bg-primary-500 absolute p-2 rounded-full right-0 bottom-0">
          <FaUser />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-end gap-2">
          <div className="font-bold">Hoa Bằng Lăng</div>
          <span>đã đăng 3 liên kết</span>
        </div>
        <div className="text-primary-500 text-[14px]">7 giờ trước</div>
      </div>
      <div>
        <div className="w-[10px] h-[10px] rounded-full bg-primary-500">

        </div>
      </div>
    </div>
  );
};

export default HeaderNotificationItem;
