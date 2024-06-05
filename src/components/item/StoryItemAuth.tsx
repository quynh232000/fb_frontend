import { Link } from "react-router-dom";
import avatar_user from "../../assets/base/avatar_user.webp";
import { UserModel } from "../../types/post";
type StoryItemProps = {
  active: boolean;
  user:UserModel
};
const StoryItemAuth = ({ active=true, user }: StoryItemProps) => {
  
  return (
    <Link
      to={"/stories/"+user.uuid}
      className={
        "flex gap-3 " + (active?"" : " hover:") + "bg-input p-3 rounded-lg"
      }
    >
      <div className="w-[56px] h-[56px] p-1 border-2 rounded-full border-primary-500">
        <img
          className="w-full h-full rounded-full object-cover"
          src={user.avatar ??avatar_user}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-medium">{user.first_name+" "+user.last_name}</div>
        <div className="flex items-center gap-1 text-text text-[15px]">
          <div className="text-primary-500">1 thẻ mới</div>
          <div>·</div>
          <span>1 giờ</span>
        </div>
      </div>
    </Link>
  );
};

export default StoryItemAuth;
