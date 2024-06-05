import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { ChangeEvent, useEffect, useState } from "react";
import {
  FaCamera,
  FaPen,
  FaUserCheck,
  FaUserMinus,
  FaUserPlus,
  FaUserTimes,
} from "react-icons/fa";
import { IoAddOutline, IoCameraOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import thumbnail_user from "../../../assets/base/thumbnail_user.avif";
import avatar_user from "../../../assets/base/avatar_user.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { AiFillMessage } from "react-icons/ai";
import {
  AcceptFriendRequest,
  addFriendRequest,
  cancelRequestFriend,
  cancelSendRequestFriend,
  changeAvatarUser,
  updateThumbnailUser,
} from "../../../services/UserService";
import { FaEarthAmericas } from "react-icons/fa6";
import { setNotify } from "../../../redux/reducers/appReducer";
import ModalUpateAvatarPost from "../../modal/ModalUpateAvatarPost";

const HeaderUser = () => {
  let currentPath = "posts";
  const { currentUser } = useSelector((state: RootState) => state.appReducer);
  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  if (arrayPath.length == 3) {
    currentPath = "posts";
  } else {
    currentPath = arrayPath[3];
  }
  const [activeTab, setActiveTab] = useState(currentPath);
  const data = [
    {
      label: "Bài viết",
      value: "posts",
      path: "",
    },
    {
      label: "Giới thiệu",
      value: "about",
      path: "/about",
    },
    {
      label: "Bạn bè",
      value: "friends",
      path: "/friends",
    },
    {
      label: "Ảnh",
      value: "photos",
      path: "/photos",
    },
    {
      label: "Video",
      value: "videos",
      path: "/videos",
    },
    {
      label: "Check in",
      value: "map",
      path: "/map",
    },
  ];
  const { user } = useSelector((state: RootState) => state.authReducer);

  const [typeBtnSuggest, setTypeBtnSuggest] = useState("");

  const [btnAccept, setBtnAccept] = useState("waiting");
  const handleAddFriend = () => {
    currentUser &&
      addFriendRequest(currentUser.id).then((res) => {
        if (res.status) setTypeBtnSuggest("cancelRequest");
      });
  };
  const handleCancelSendRequest = () => {
    currentUser &&
      cancelSendRequestFriend(currentUser.id).then((res) => {
        if (res.status) setTypeBtnSuggest("add");
      });
  };
  const handleAcceptFriend = () => {
    currentUser &&
      AcceptFriendRequest(currentUser.id).then((res) => {
        res.status && setBtnAccept("accepted");
      });
  };
  const handleCancelRequest = () => {
    currentUser &&
      cancelRequestFriend(currentUser.id).then((res) => {
        if (res.status) setBtnAccept("cancelled");
      });
  };
  // change thumbnail
  const [fileBg, setFileBg] = useState<File | null>(null);
  const [urlBg, setUrlBg] = useState<string | null>(null);
  const [avatar, setAvatar] = useState("");
  const [fileAvatar, setFileAvatar] = useState<File | null>(null);
  const [urlAvatar, setUrlAvatar] = useState<string | null>(null);
  const [contentAvatar, setContentAvatar] = useState("");
  const [isChangeBg, setIsChangeBg] = useState(false);
  const [isModalUpdateAvatar, setIsModalUpdateAvatar] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
      setAvatar(currentUser?.avatar ?? avatar_user)
  },[currentUser])

  const handleImageBg = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileBg(file);
      const fileUrl = URL.createObjectURL(file);
      setUrlBg(fileUrl);
      setIsChangeBg(true);
    }
  };
  const handleSaveChangeBg = () => {
    const formData = new FormData();
    fileBg && formData.append("thumbnail", fileBg);
    fileBg &&
      updateThumbnailUser(formData).then((res) => {
        if (res && res.status) {
          setIsChangeBg(false);
          dispatch(
            setNotify({
              type: "success",
              message: "Cập nhật ảnh bìa thành công!",
            })
          );
        }
      });
  };
  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileAvatar(file);
      const fileUrl = URL.createObjectURL(file);
      setUrlAvatar(fileUrl);
      setIsModalUpdateAvatar(true);
    }
  };

  const handleSaveAvatar = () => {
    const formData = new FormData();
    fileAvatar && formData.append("avatar", fileAvatar);
    contentAvatar && formData.append("content", contentAvatar);
    fileAvatar &&
      changeAvatarUser(formData).then((res) => {
        if (res && res.status) {
          setIsModalUpdateAvatar(false);
          urlAvatar && setAvatar(urlAvatar);
        }
        dispatch(
          setNotify({
            type: "success",
            message: "Cập nhật ảnh đại diện thành công!",
          })
        );
      });
  };
  return (
    <div className="bg-[#262828] flex justify-center">
      {isModalUpdateAvatar && urlAvatar && (
        <ModalUpateAvatarPost
          link={urlAvatar}
          isModalUpdateAvatar={isModalUpdateAvatar}
          handleSaveAvatar={handleSaveAvatar}
          setIsModalUpdateAvatar={setIsModalUpdateAvatar}
          setContentAvatar={setContentAvatar}
        />
      )}
      <div className="w-full md:w-user flex flex-col relative">
        {isChangeBg && (
          <div className="bg-[rgba(22,22,24,.4)] py-4 px-2 absolute top-0 left-0 right-0  z-10 flex justify-between">
            <div className="flex gap-2 items-center">
              <FaEarthAmericas />
              <span>Hiển thị công khai.</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsChangeBg(false);
                  setUrlBg(currentUser?.thumbnail ?? thumbnail_user);
                }}
                className="bg-input px-5 py-2 rounded-lg hover:opacity-80"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveChangeBg}
                className="bg-primary-500 px-5 py-2 rounded-lg hover:opacity-80"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        )}
        <div className="w-full h-auto  md:h-[405px] relative rounded-b-lg ">
          <img
            className="w-full h-full object-cover  rounded-b-lg"
            src={
              urlBg
                ? urlBg
                : currentUser
                ? currentUser?.thumbnail || thumbnail_user
                : thumbnail_user
            }
            alt=""
          />
          {!isChangeBg && user.id == currentUser?.id ? (
            <label
              htmlFor="input_thumnail"
              className="absolute flex items-center bg-white text-black py-2 px-4 gap-1 font-medium hover:opacity-80 cursor-pointer rounded-lg shadow-sm shadow-gray-500 bottom-[16px]  right-[16px]"
            >
              <div>
                <FaCamera />
              </div>
              <span>Chỉnh sửa ảnh</span>
              <input
                onChange={handleImageBg}
                type="file"
                hidden
                id="input_thumnail"
              />
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="flex   py-[24px] px-[30px] relative">
          <div className="w-[168px] h-[168px] rounded-full flex absolute transition-transform translate-x-50 top-[-30px] right-[35%] md:left-0 border-[3px] border-[#262828]">
            <Link to={"/photo/asds"} className="w-full h-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src={avatar}
                alt=""
              />
            </Link>
            {user.id == currentUser?.id ? (
              <div className="bg-input hover:bg-gray-700 absolute cursor-pointer p-2 text-[20px] rounded-full bottom-[10px] right-[6px]">
                <label htmlFor="inputvatar">
                  <IoCameraOutline />
                </label>
              </div>
            ) : (
              ""
            )}
          </div>
          <input
            onChange={handleChangeAvatar}
            hidden
            type="file"
            id="inputvatar"
          />
          <div className="flex flex-col md:flex-row md:pl-[180px] pt-[140px] md:pt-0 flex-1 items-center">
            <div className="flex flex-col items-center md:items-start flex-1">
              <div className="flex items-center text-[26px] gap-2">
                <h3 className="font-bold">
                  {currentUser
                    ? currentUser?.first_name + " " + currentUser?.last_name
                    : ""}
                </h3>
                {/* <div>(Mr Quynh)</div> */}
              </div>
              <div className="text-text flex gap-4">
                {currentUser && currentUser?.friends_count > 0 && (
                  <div>{currentUser?.friends_count} bạn bè</div>
                )}
                {currentUser &&(currentUser.id != user.id) &&(currentUser &&
                  currentUser?.friends_count > 0 &&
                  currentUser &&
                  currentUser?.mutual_friends > 0 && <span>•</span>)}
                {currentUser &&(currentUser.id != user.id) &&(currentUser && currentUser?.mutual_friends > 0 && (
                  <div>{currentUser?.friends_count} bạn chung</div>
                ))}
              </div>
              <div className="flex mt-2">
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://www.shutterstock.com/image-vector/cute-anime-kawaii-girl-cartoon-260nw-2297419277.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://www.shutterstock.com/image-vector/cute-anime-kawaii-girl-cartoon-260nw-2297419277.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://www.shutterstock.com/image-vector/cute-anime-kawaii-girl-cartoon-260nw-2297419277.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  to={"/user/asdsad"}
                  className="w-[32px] h-[32px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                >
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://www.shutterstock.com/image-vector/cute-anime-kawaii-girl-cartoon-260nw-2297419277.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex gap-2">
                {user.id == currentUser?.id ? (
                  <>
                    <button className="flex items-center gap-2 bg-primary-500 py-2 px-3 rounded-lg hover:bg-primary-600">
                      <div>
                        <IoAddOutline />
                      </div>
                      <span>Thêm vào tin</span>
                    </button>
                    <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                      <div>
                        <FaPen />
                      </div>
                      <span>Chỉnh sửa trang cá nhân</span>
                    </button>
                  </>
                ) : (
                  <>
                    {currentUser?.is_friend == "new" ? (
                      typeBtnSuggest == "add" || typeBtnSuggest == "" ? (
                        <div
                          onClick={handleAddFriend}
                          className="flex py-2 px-3 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg"
                        >
                          <div className="text-[18px] ">
                            <FaUserPlus />
                          </div>
                          <span className="font-medium">Thêm bạn bè</span>
                        </div>
                      ) : (
                        <div
                          onClick={handleCancelSendRequest}
                          className="flex py-2 px-3 hover:bg-primary-600 hover:text-text-1 cursor-pointer justify-center items-center mt-4 gap-2 text-primary-700 bg-primary-300 rounded-lg"
                        >
                          <div className="text-[18px] ">
                            <FaUserTimes />
                          </div>
                          <span className="font-medium">Hủy yêu cầu</span>
                        </div>
                      )
                    ) : currentUser?.is_friend == "accepted" ? (
                      <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                        <div>
                          <FaUserCheck />
                        </div>
                        <span>Bạn bè</span>
                      </button>
                    ) : currentUser?.is_friend == "you_send" ? (
                      typeBtnSuggest == "cancelRequest" ||
                      typeBtnSuggest == "" ? (
                        <div
                          onClick={handleCancelSendRequest}
                          className="flex py-2 px-3 hover:bg-primary-600 hover:text-text-1 cursor-pointer justify-center items-center mt-4 gap-2 text-primary-700 bg-primary-300 rounded-lg"
                        >
                          <div className="text-[18px] ">
                            <FaUserTimes />
                          </div>
                          <span className="font-medium">Hủy yêu cầu</span>
                        </div>
                      ) : (
                        <div
                          onClick={handleAddFriend}
                          className="flex py-2 px-3 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg"
                        >
                          <div className="text-[18px] ">
                            <FaUserPlus />
                          </div>
                          <span className="font-medium">Thêm bạn bè</span>
                        </div>
                      )
                    ) : btnAccept == "waiting" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={handleAcceptFriend}
                          className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700"
                        >
                          <div>
                            <FaUserCheck />
                          </div>
                          <span>Xác nhận</span>
                        </button>
                        <button
                          onClick={handleCancelRequest}
                          className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700"
                        >
                          <div>
                            <FaUserMinus />
                          </div>
                          <span>Từ chối</span>
                        </button>
                      </div>
                    ) : btnAccept == "cancelled" ? (
                      <div
                        onClick={handleAddFriend}
                        className="flex py-2 px-3 hover:bg-primary-600 cursor-pointer justify-center items-center mt-4 gap-2 bg-primary-500 rounded-lg"
                      >
                        <div className="text-[18px] ">
                          <FaUserPlus />
                        </div>
                        <span className="font-medium">Thêm bạn bè</span>
                      </div>
                    ) : (
                      <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                        <div>
                          <FaUserCheck />
                        </div>
                        <span>Bạn bè</span>
                      </button>
                    )}
                    {currentUser?.is_friend == "accepted" && (
                      <button className="flex items-center gap-2 bg-primary-500 py-2 px-3 rounded-lg hover:bg-primary-600">
                        <div>
                          <AiFillMessage />
                        </div>
                        <span>Nhắn tin</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4  ">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none w-full md:w-[660px]   bg-transparent pb-2 flex "
              indicatorProps={{
                className:
                  "bg-transparent border-b-[3px]   border-primary-500 shadow-none rounded-none h-[40px]",
              }}
            >
              {data.map(({ label, value, path }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    "w-[160px] " + activeTab === value ? "text-gray-900" : ""
                  }
                >
                  <Link
                    to={"/user/" + currentUser?.uuid + path}
                    className={
                      " font-medium py-3 " +
                      (activeTab === value
                        ? " text-primary-500"
                        : "text-text-1")
                    }
                  >
                    {label}
                  </Link>
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
