import { FaUserCheck, FaUserPlus, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserModel } from "../../types/post";
import avatar_user from "../../assets/base/avatar_user.webp";
import { useState } from "react";
import {
  AcceptFriendRequest,
  addFriendRequest,
  cancelRequestFriend,
  cancelSendRequestFriend,
} from "../../services/UserService";

type FriendItemProps = {
  user: UserModel;
  type: string;
};
const FriendItem = ({ user, type }: FriendItemProps) => {
  const [typeBtnSuggest, setTypeBtnSuggest] = useState("add");
  const [btnAccept, setBtnAccept] = useState("waiting");
  const handleAddFriend = () => {
    addFriendRequest(user.id).then((res) => {
      if (res.status) setTypeBtnSuggest("cancelRequest");
    });
  };
  const handleCancelSendRequest = () => {
    cancelSendRequestFriend(user.id).then((res) => {
      if (res.status) setTypeBtnSuggest("add");
    });
  };
  const handleAcceptFriend = () => {
    AcceptFriendRequest(user.id).then((res) => {
      res.status && setBtnAccept("accepted");
    });
  };
  const handleCancelRequest = () => {
    cancelRequestFriend(user.id).then((res) => {
      if (res.status) setBtnAccept("cancelled");
    });
  };
  return (
    <div className="flex-1 border border-input  rounded-lg flex flex-col gap-1">
      <div className="h-[200px]">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={user.avatar ?? avatar_user}
          alt="avatar_user"
        />
      </div>
      <div className="flex flex-col p-3 mb-2">
        <Link to={"/user/" + user.uuid} className="font-medium text-[18px]">
          {user.first_name + " " + user.last_name}
        </Link>
        <div className="text-text text-[14px]">{user.mutual_friends >0 ? user.mutual_friends+ " bạn chung": user.friends_count+ " bạn bè"}</div>
        {type == "suggestionFriend" ? (
          typeBtnSuggest == "add" ? (
            <div
              onClick={handleAddFriend}
              className="flex py-2 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg"
            >
              <div className="text-[18px] ">
                <FaUserPlus />
              </div>
              <span className="font-medium">Thêm bạn bè</span>
            </div>
          ) : (
            <div
              onClick={handleCancelSendRequest}
              className="flex py-2 hover:bg-primary-600 hover:text-text-1 cursor-pointer justify-center items-center mt-4 gap-2 text-primary-700 bg-primary-300 rounded-lg"
            >
              <div className="text-[18px] ">
                <FaUserTimes />
              </div>
              <span className="font-medium">Hủy yêu cầu</span>
            </div>
          )
        ) : (
          <div>
            {btnAccept == "waiting" ? (
              <>
                <div className="flex py-2 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg">
                  <div className="text-[18px] ">
                    <FaUserPlus />
                  </div>
                  <span className="font-medium" onClick={handleAcceptFriend}>
                    Xác nhận
                  </span>
                </div>
                <div className="flex py-2 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 text-primary-700 bg-primary-300 rounded-lg">
                  <div className="text-[18px] ">
                    <FaUserTimes />
                  </div>
                  <span className="font-medium" onClick={handleCancelRequest}>
                    Hủy
                  </span>
                </div>
              </>
            ) : btnAccept == "cancelled" ? (
              <div className={(btnAccept == "cancelled" ?"cursor-not-allowed": "cursor-pointer ")+" flex py-2    justify-center items-center mt-4 gap-2 bg-gray-700 text-gray-500 rounded-lg"}>
                <div className="text-[18px] ">
                <FaUserTimes />
                </div>
                <span className="font-medium">Đã hủy</span>
              </div>
            ) : (
              <div className="flex py-2 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg">
                <div className="text-[18px] ">
                  <FaUserCheck />
                </div>
                <span className="font-medium">Bạn bè</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendItem;
