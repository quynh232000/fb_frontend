import Tippy from "@tippyjs/react";
import TippyUserView from "../tippy/TippyUserView";
import { Link } from "react-router-dom";
import { UserModel } from "../../types/post";
import avatar_user from "../../assets/base/avatar_user.webp"
type UserFriendItemProps ={
  user:UserModel
}
const UserFriendItem = ({user}:UserFriendItemProps) => {
  
  return (
      <Tippy
        visible={false}
        interactive
        placement="bottom"
        delay={[200, 200]}
        render={() => <TippyUserView user={user}/>}
       
      >
    <Link to={"/user/"+user.uuid} className="flex flex-col gap-2">
        <div className="rounded-lg h-[160px]">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={user.avatar ?? avatar_user}
            alt=""
          />
        </div>
      <div className="font-medium text-[14px] text-text-1">{user.first_name+" "+user.last_name}</div>
    </Link>
      </Tippy>
  );
};

export default UserFriendItem;
