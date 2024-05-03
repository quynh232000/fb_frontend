import { Link } from "react-router-dom";
import map_img from "../../../assets/base/map_img.png";
const CheckinItem = () => {
  return (
    <div className=" shadow-sm shadow-[rgba(22,22,24,1)] flex items-center gap-3 p-4">
      <div className="w-[80px] h-[80px] rounded-e-lg">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={map_img}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold">
          <Link to="/pages/page_name">
            <button>Đà nẵng</button>
          </Link>
        </h3>
        <span className="text-text text-[14px]">Việt nam</span>
        <span className="text-text text-[14px]">
          Đã ghé thăm vòa 11 tháng 7 ,2020
        </span>
      </div>
    </div>
  );
};

export default CheckinItem;
