import { FaRegEye } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import { getImagesGroup } from "../../services/GroupService";
import { PostMediaModel } from "../../types/post";

const SidebarGroupRight = () => {
  const { currentGroup } = useSelector((state: RootState) => state.appReducer);
  const [listImages, setListImages] = useState([]);
  useEffect(() => {
    currentGroup &&
      getImagesGroup(currentGroup?.uuid).then((res) => {
        if (res && res.status) {
          setListImages(res.data);
        }
      });
  }, [currentGroup]);

  if (currentGroup) {
    return (
      <div className="flex flex-col gap-4 ">
        <div className="bg-dark-bg rounded-lg p-4">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[20px]">Giới thiệu</div>
            <span className=" text-center text-[15px]">
              {currentGroup?.description ?? "--"}
            </span>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-start gap-2 text-text">
                <div className="text-[20px]">
                  <FaEarthAsia />
                </div>
                <span className="flex flex-col">
                  <span className="text-text-1 font-bold">Công khai</span>
                  <div className="text-text text-[14px]">
                    Bất kì ai cũng có thể nhìn thấy mọi người trong nhóm và
                    những gì họ đăng.
                  </div>
                </span>
              </div>

              <div className="flex items-start gap-2 text-text">
                <div className="text-[20px]">
                  <FaRegEye />
                </div>
                <span className="flex flex-col">
                  <span className="text-text-1 font-bold">Hiển thị</span>
                  <div className="text-text text-[14px]">
                    Ai cũng có thể tìm thấy nhóm này.
                  </div>
                </span>
              </div>
            </div>
            <button className="bg-input text-center rounded-lg p-2 hover:bg-gray-700 text-[15px] font-medium">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="font-bold text-[20px]">
              File phương tiện gần đây
            </div>
            <Link to={"/user/ssdf/photos"} className="text-primary-500">
              Xem tất cả ảnh
            </Link>
          </div>
          {listImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
              {listImages.map((item: PostMediaModel) => {
                const files = JSON.parse(item.file);

                return files.map((file: string, index: number) => {
                  return (
                    <Link
                      className="h-[160px]"
                      key={index}
                      to={"/photo/" + item.uuid + "?i=" + (index + 1)}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={file}
                        alt=""
                      />
                    </Link>
                  );
                });
              })}
            </div>
          ) : (
            <div className="text-center py-5 w-full">
              Không tìm thấy hình ảnh nào!
            </div>
          )}
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default SidebarGroupRight;
