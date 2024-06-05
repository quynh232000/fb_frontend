import { Link } from "react-router-dom";
import UserFriendItem from "../../item/UserFriendItem";
import { useEffect, useState } from "react";
import { getListFriend } from "../../../services/UserService";

type FriendProfileProps = {
  user_uuid: string;
};
const FriendProfile = ({ user_uuid }: FriendProfileProps) => {
    const [friends,setFriends] = useState([])
  useEffect(() => {
    getListFriend(user_uuid).then((res) => {
      res.status && setFriends(res.data)
    });
  }, [user_uuid]);
  return (
    <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
      <div>
        <div className="flex justify-between">
          <div className="font-bold text-[20px]">Bạn bè</div>
          <Link to={"/user/"+user_uuid+"/friends"} className="text-primary-500">
            Xem tất cả bạn bè
          </Link>
        </div>
        <div className="text-text">678 bạn bè</div>
      </div>
      <div className="grid grid-cols-3 rounded-lg overflow-hidden gap-3">
        {friends.length >0 && friends.map((friend,index) =>{
            return <UserFriendItem key={index} user={friend} />
        })}
       
      </div>
    </div>
  );
};

export default FriendProfile;
