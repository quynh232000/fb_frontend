import { Link } from "react-router-dom";
import { UserModel } from "../../types/post";
import avatar_user from "../../assets/base/avatar_user.webp";
import {
  addFriendRequest,
  cancelSendRequestFriend,
} from "../../services/UserService";
import { useState } from "react";
type AddFriendItemProps = {
  type: string;
  user: UserModel;
};
const AddFriendItem = ({ type = "requests", user }: AddFriendItemProps) => {
  const [typeBtn, setTypeBtn] = useState("suggestion");
  const handleAddFriend = () => {
    addFriendRequest(user.id).then((res) => {
      console.log(res);
      setTypeBtn("cancelRequest");
    });
  };
  const handleCancelRequest = () => {
    cancelSendRequestFriend(user.id).then((res) => {
      if (res.status) setTypeBtn("suggestion");
    });
  };

  return (
    <div className="border border-input bg-dark-bg rounded-lg overflow-hidden">
      <div className="w-full h-[240px]">
        <img
          className="w-full h-full object-cover"
          src={user.avatar ?? avatar_user}
          alt=""
        />
      </div>
      <div className="flex flex-col p-3">
        <div className="flex flex-col">
          <Link to={"/user/" + user.uuid} className="font-bold text-[18px]">
            {user.first_name + " " + user.last_name}
          </Link>
          <div className="text-text text-[14px]">3 bạn chung</div>
        </div>
        <div className="flex flex-col gap-2 pt-4 text-text-1 font-medium">
          {type == "requests" ? (
            <button className="bg-primary-500 p-2 rounded-lg hover:opacity-80">
              Xác nhận
            </button>
          ) : (typeBtn == "suggestion" ? (
            <button
              onClick={handleAddFriend}
              className="bg-primary-300 text-primary-700 p-2 rounded-lg hover:opacity-80"
            >
              Thêm bạn bè
            </button>
          ) : (
            <button
              onClick={handleCancelRequest}
              className="bg-primary-300 text-primary-700 p-2 rounded-lg hover:opacity-80"
            >
              Hủy yêu cầu
            </button>
          ))}

          <button className="bg-input p-2 rounded-lg hover:opacity-80">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFriendItem;
