
import { Link } from "react-router-dom";
import { GroupModel } from "../../types/app";
import bg from "../../assets/base/bg_view_create_group.svg"
type GroupBarItemProps ={
  group:GroupModel
}
const GroupBarItem = ({group}:GroupBarItemProps) => {
  return (
    <Link
      to={"/groups/"+group.uuid}
      className="flex hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer items-center"
    >
      <div className="w-[48px] h-[48px] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={group.thumbnail ?? bg}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="text-[16px] flex-1 font-medium">
          {group.name}
        </div>
        <span className="text-text text-[14px] font-normal">Hoạt động gần nhất: 15 ngày trước</span>
      </div>
    </Link>
  );
};

export default GroupBarItem;
