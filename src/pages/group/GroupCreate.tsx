import { FaEarthAmericas } from "react-icons/fa6";
import bg from "../../assets/base/bg_view_create_group.svg";
import { FaRegEye } from "react-icons/fa";
import CreatePost from "../../components/shared/CreatePost";
import React, { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import avatar_user from "../../assets/base/avatar_user.webp";
import { createGroup } from "../../services/GroupService";
import { useNavigate } from "react-router-dom";
import { setNotify } from "../../redux/reducers/appReducer";
const GroupCreate = () => {
  const stateAuth = useSelector((state: RootState) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [nameGroup, setNameGroup] = useState("");
  const [type, setType] = useState("0");
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameGroup(e.target.value);
  };
  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  // create group
  const handleSubmit = () => {
    setLoading(true)
    createGroup({ name: nameGroup, is_private: type }).then((res) => {
      if (res && res.status) {
        navigate("/groups/" + res.data.uuid);
        dispatch(
          setNotify({
            type: "success",
            message: "Tạo nhóm thành công!",
          })
        );
      }
      setLoading(false)
    });
  };
  return (
    <div className=" h-full flex">
      <div className="w-full md:w-sidebar bg-dark-bg border-r border-input p-4 flex flex-col">
        <div className="font-bold text-[20px] py-2">Tạo nhóm</div>
        <div className="flex gap-3 items-center py-4">
          <div className="w-[40px] h-[40px] rounded-full">
            <img
              className="w-full h-full rounded-full object-cover"
              src={stateAuth.user.avatar ?? avatar_user}
              alt=""
            />
          </div>
          <div className="text-text">
            <div className="font-bold">
              {stateAuth.user.first_name + " " + stateAuth.user.last_name}
            </div>
            <span className="text-[14px]">Quản trị viên</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col border border-input rounded-lg py-2 px-4 gap-2 ">
            <label htmlFor="" className="text-text text-[14px]">
              Tên nhóm
            </label>
            <div className="w-full">
              <input
                type="text"
                name="name"
                className="w-full bg-transparent"
                onChange={handleSetName}
                placeholder="Aa.."
              />
            </div>
          </div>
          <div className="flex flex-col border border-input rounded-lg py-2 px-4 gap-2 ">
            <label htmlFor="" className="text-text text-[14px]">
              Chọn quyền riêng tư
            </label>
            <div className="w-full">
              <select
                name="is_private"
                id=""
                onChange={handleChangeType}
                className="w-full bg-transparent "
              >
                <option
                  value="0"
                  className="text-text-1 p-2 bg-input hover:bginput"
                >
                  Công khai
                </option>
                <option
                  value="1"
                  className="text-text-1 p-2 bg-input hover:bginput"
                >
                  Riêng tư
                </option>
              </select>
            </div>
          </div>
          <div className="text-text text-[14px]">
            Thành viên và khách truy cập có thể đăng bài trong nhóm. Quản trị
            viên có thể xét duyệt người lần đầu tham gia. Mời bạn bè (không bắt
            buộc)
          </div>
        </div>
        <div className="flex-1 flex items-end ">
          {/* hover:opacity-90 bg-primary-500 */}
          {(nameGroup && !loading) ? (
            <button
              onClick={handleSubmit}
              className={
                "hover:opacity-90 bg-primary-500   w-full p-2 font-medium rounded-lg "
              }
            >
              Tạo
            </button>
          ) : (
            <button className="bg-gray-800 text-gray-500 cursor-not-allowed w-full p-2 font-medium rounded-lg ">
              Tạo
            </button>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-1 p-[30px] ">
        <div className="  w-full rounded-lg  bg-dark-bg p-4 flex flex-col gap-4">
          <div>Xem trước</div>
          <div className="border flex flex-col border-input rounded-lg flex-1  scrollbar_custom overflow-y-scroll text-gray-600">
            <div className="h-[340px]">
              <img src={bg} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col ">
              <div className="text-[26px] font-bold p-4">
                {nameGroup ? nameGroup : "Tên Nhóm"}
              </div>
              <div className="flex px-4 gap-2 items-center text-gray-500">
                <FaEarthAmericas />
                Nhóm {type == "0" ? "Công khai" : "Riêng tư"} - 1 thành viên
              </div>
              <div className=" p-4">
                <div className="flex border-t border-input">
                  <div className="p-4 text-text font-medium">Giới thiệu</div>
                  <div className="p-4 text-text font-medium">Bài viết</div>
                  <div className="p-4 text-text font-medium">Thành viên</div>
                  <div className="p-4 text-text font-medium">Sự kiện</div>
                </div>
              </div>
            </div>
            <div className="bg-dark-1 flex-1 py-4 px-[40px] flex-col gap-4 text-text-1">
              <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
                <div className="text-[20px] font-bold">Giới thiệu</div>
                {type == "1" ? (
                  <div className="flex gap-4 items-center">
                    <div className="text-[20px]">
                      <IoLockClosed />
                    </div>
                    <div>
                      <div className="text-[20px] font-bold">Riêng tư</div>
                      <span>
                        Chỉ thành viên mới nhìn thấy mọi người trong nhóm và
                        những gì họ đăng.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center">
                    <div className="text-[20px]">
                      <FaEarthAmericas />
                    </div>
                    <div>
                      <div className="text-[20px] font-bold">Công khai</div>
                      <span>
                        Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và
                        những gì họ đăng.
                      </span>
                    </div>
                  </div>
                )}
                {/* <div className="flex gap-4 items-center">
                  <div className="text-[20px]">
                    <FaEarthAmericas />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold">Công khai</div>
                    <span>
                      Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và
                      những gì họ đăng.
                    </span>
                  </div>
                </div> */}
                <div className="flex gap-4 items-center">
                  <div className="text-[20px]">
                    <FaRegEye />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold">Hiển thị</div>
                    <span>Ai cũng có thể nhìn thấy trong nhóm này</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-1 flex-1 py-4 px-[40px] flex-col gap-4 text-text-1 relative">
              <CreatePost />
              <div className="absolute top-0 right-0 left-0 bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCreate;
