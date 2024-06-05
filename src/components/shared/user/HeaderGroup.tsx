import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";
import { ChangeEvent, useEffect, useState } from "react";
import { FaCamera, FaShare } from "react-icons/fa";
import { FaEarthAmericas, FaEarthAsia, FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  deleteGroup,
  getGroupInfo,
  joinGroup,
  leaveGroup,
  saveChangeBgGroup,
} from "../../../services/GroupService";
import bg from "../../../assets/base/bg_view_create_group.svg";
import { GroupModel } from "../../../types/app";
import { MdEdit, MdGroups } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { setCurrentGroup, setNotify } from "../../../redux/reducers/appReducer";
import avatar_user from "../../../assets/base/avatar_user.webp";
import { BsThreeDots } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

const HeaderGroup = () => {
  const navigate = useNavigate();
  const [isJoin, setIsJoin] = useState(false);
  const authState = useSelector((state: RootState) => state.authReducer);
  const [fileBg, setFileBg] = useState<File | null>(null);
  const [urlBg, setUrlBg] = useState<string | null>(null);
  const [isChangeBg, setIsChangeBg] = useState(false);
  const dispatch = useDispatch();
  const [groupInfo, setGroupInfo] = useState<GroupModel | null>(null);
  let currentPath = "all";
  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  if (arrayPath.length == 3) {
    currentPath = "all";
  } else {
    currentPath = arrayPath[3];
  }
  const group_uuid = arrayPath[2];
  const [activeTab, setActiveTab] = useState(currentPath);

  const data = [
    {
      label: "Thảo luận",
      value: "all",
      path: `/groups/${group_uuid}/all`,
    },
    {
      label: "Mọi người",
      value: "members",
      path: `/groups/${group_uuid}/members`,
    },
    {
      label: "Sự kiện",
      value: "events",
      path: `/groups/${group_uuid}/events`,
    },
    {
      label: "File phương tiện",
      value: "media",
      path: `/groups/${group_uuid}/media`,
    },
    {
      label: "File",
      value: "files",
      path: `/groups/${group_uuid}/files`,
    },
  ];
  const handleImageBg = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileBg(file);
      const fileUrl = URL.createObjectURL(file);
      setUrlBg(fileUrl);
      setIsChangeBg(true);
    }
  };
  useEffect(() => {
    getGroupInfo(group_uuid).then((res) => {
      if (res && res.status) {
        setGroupInfo(res.data);
        setUrlBg(res.data?.thumbnail);
        dispatch(setCurrentGroup(res.data));
        setIsJoin(res.data.is_joined);
      }
    });
  }, [group_uuid]);
  // submit change thumbnail
  const handleSaveChangeBg = () => {
    const formData = new FormData();
    fileBg && formData.append("thumbnail", fileBg);
    formData.append("group_uuid", group_uuid);
    groupInfo &&
      saveChangeBgGroup(formData).then((res) => {
        if (res && res.status) {
          setIsChangeBg(false);
          dispatch(
            setNotify({
              type: "success",
              message: "Cập nhật ảnh bìa nhóm thành công!",
            })
          );
        }
      });
  };

  const handleJoinGroup = () => {
    groupInfo &&
      joinGroup(groupInfo?.id).then((res) => {
        if (res && res.status) {
          setIsJoin(true);
        }
      });
  };
  const handleLeaveGroup = () => {
    groupInfo &&
      leaveGroup(groupInfo.id).then((res) => {
        if (res && res.status) {
          setIsJoin(false);
        }
      });
  };
  // handle delete group
  const handleDeleteGroup = () => {
    deleteGroup(group_uuid).then((res) => {
      if (res && res.status) {
        dispatch(
          setNotify({
            type: "success",
            message: "Xóa nhóm thành công!",
          })
        );
        dispatch(setCurrentGroup(null));
        navigate("/");
      }
    });
  };
  return (
    <div className="bg-[#262828] flex justify-center relative">
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
                setUrlBg(groupInfo?.thumbnail ?? bg);
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
      <div className="w-user flex flex-col">
        <div className="h-[405px] relative rounded-b-lg ">
          <img
            className="w-full h-full object-cover  rounded-b-lg"
            src={urlBg ? urlBg : groupInfo?.thumbnail ?? bg}
            alt="thumbnail"
          />
          <input
            type="file"
            onChange={handleImageBg}
            id="file_bg"
            accept="image/*"
            hidden
          />
          {!isChangeBg && authState.user.id == groupInfo?.user_id && (
            <label
              htmlFor="file_bg"
              className="absolute flex items-center bg-white text-black py-2 px-4 gap-1 font-medium hover:opacity-80 cursor-pointer rounded-lg shadow-sm shadow-gray-500 bottom-[16px]  right-[16px]"
            >
              <div>
                <FaCamera />
              </div>
              <span>Chỉnh sửa ảnh</span>
            </label>
          )}
        </div>
        <div className="flex py-[24px] px-[30px] relative">
          <div className="flex  flex-1 items-center">
            <div className="flex flex-col flex-1">
              <div className="flex items-center text-[26px] gap-2">
                <h3 className="font-bold">{groupInfo?.name}</h3>
              </div>
              <div className="text-text flex items-center gap-2 text-[14px]">
                {groupInfo?.is_private ? (
                  <div className="flex items-center gap-2">
                    <MdGroups className="text-[20px]" />
                    Riêng tư
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaEarthAsia />
                    Công khai
                  </div>
                )}
                <span>·</span>
                <div>
                  {groupInfo ? groupInfo?.members.length + " thành viên" : ""}{" "}
                </div>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <div className="flex  items-center flex-1">
                  {groupInfo &&
                    groupInfo.members.map((member, index) => {
                      return (
                        <Link
                          title={
                            member.user.first_name + " " + member.user.last_name
                          }
                          key={index}
                          to={"/user/" + member.user.uuid}
                          className="w-[36px] h-[36px] rounded-full shadow-sm border-2 border-input shadow-gray-500"
                        >
                          <img
                            className="w-full h-full rounded-full object-cover"
                            src={member.user.avatar ?? avatar_user}
                            alt=""
                          />
                        </Link>
                      );
                    })}
                </div>

                <div className="flex gap-2">
                  {authState.user.id == groupInfo?.user_id ? (
                    <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                      <div>
                        <MdEdit />
                      </div>
                      <span>Chỉnh sửa</span>
                    </button>
                  ) : isJoin ? (
                    <>
                      {/* <button className="flex items-center gap-2 bg-primary-500 py-2 px-3 rounded-lg hover:bg-primary-600">
                        <div>
                          <IoAddSharp />
                        </div>
                        <span>Mời</span>
                      </button> */}
                      <button
                        onClick={handleLeaveGroup}
                        className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700"
                      >
                        <div>
                          <FaShare />
                        </div>
                        <span>Rời khỏi nhóm</span>
                      </button>
                      <button className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700">
                        <div>
                          <FaPeopleGroup />
                        </div>
                        <span>Đã tham gia</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleJoinGroup}
                      className="flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700"
                    >
                      <div></div>
                      <span>Tham gia nhóm</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="p-4  flex justify-between items-center border-t border-input">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none w-[720px]   bg-transparent pb-2 flex "
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
                    to={path}
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
          {groupInfo && groupInfo.user_id == authState.user.id && (
            <div className=" flex items-center gap-2 bg-input py-2 px-3 rounded-lg hover:bg-gray-700 scrollbar_hover">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent flex justify-center items-center p-0">
                    <BsThreeDots className="text-[24px] " />
                  </Button>
                </MenuHandler>
                <MenuList className="bg-dark-bg border-none text-light-1 font-bold text-[16px] p-2 max-h-[340px] overflow-y-scroll scrollbar_custom max-w-[328px]">
                  <MenuItem
                    onClick={handleDeleteGroup}
                    className="hover:bg-input flex items-center gap-2 p-2 focus:bg-input"
                  >
                    <div className="text-light-1 size-[24px]">
                      <IoIosLogOut className="size-[20px]" />
                    </div>
                    <div className="text-light-1 flex flex-col gap-1">
                      <div>Xóa nhóm</div>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderGroup;
