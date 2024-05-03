import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AiFillFolderAdd } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import GroupImage from "../image/GroupImage";
import {useState } from "react";
interface ModalCreatePostProps {
  isModalCreatePost: boolean;
  setIsModalCreatePost: React.Dispatch<boolean>;
}
export default function ModalCreatePost({
  isModalCreatePost,
  setIsModalCreatePost,
}: ModalCreatePostProps) {
  const [files, setFiles] = useState<string[]>([]);
  
  const handleOpen = () => {
    setIsModalCreatePost(!isModalCreatePost);
    setFiles([])
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      Promise.all(
        filesArray.map((file) => {
          return new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target && e.target.result) {
                resolve(e.target.result+"");
              }
            };
            reader.readAsDataURL(file);
          });
        })
      ).then((images) => {
        setFiles(images);
      });
    }
  };
  return (
    <>
      <Dialog
        className="bg-dark-bg text-white shadow-sm shadow-gray-700 relative "
        open={isModalCreatePost}
        handler={setIsModalCreatePost}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader
          
          className="text-text-1 flex justify-center p-3"
        >
          Tạo bài viết
          <div onClick={handleOpen} className="absolute top-4 right-4 w-[32px] h-[32px] bg-input rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer text-text">
            <IoClose />
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="border-t border-input py-4 text-text-1  ">
            <div className="flex gap-3 text-text-1 font-bold">
              <div className="w-[40px] h-[40px] rounded-full">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="https://vsmall.vn/wp-content/uploads/2022/06/hinh-anh-con-gai-cute-de-thuong-cute-anime-hoat-hinh-xinh.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <span>JuJo Bin</span>
                <div className="">
                  <select
                    name=""
                    id=""
                    className="bg-input cursor-pointer text-text-1 font-medium px-2 py-1 rounded-lg text-[14px]"
                  >
                    <option value="1">Công khai</option>
                    <option value="2">Chỉ mình tôi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="h-80 overflow-y-scroll scrollbar_custom my-2">
              <div className="flex mt-3">
                <textarea
                  className="w-full bg-transparent text-[20px] text-text-1"
                  name=""
                  id=""
                  rows={2}
                  placeholder="Bin ơi, bạn đang nghĩ gì thế?"
                ></textarea>
              </div>
              <div className="relative border border-input my-2 rounded-lg p-2 ">
                <div className=" bg-input rounded-lg flex flex-col items-center justify-center min-h-[180px]  cursor-pointer hover:bg-gray-800">
                  <div className="flex">
                    {files && files.length > 0 && (
                      <GroupImage arrayImg={files} />
                    )}
                    {/* <GroupImage arrayImg={data}/> */}
                  </div>
                  <input
                    type="file"
                    id="inputsImg"
                    multiple
                    accept="image/*,video/*"
                    hidden
                    onInput={handleImage}
                  />
                  <label
                    htmlFor="inputsImg"
                    className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col cursor-pointer"
                  >
                    <div className="text-[28px] bg-gray-700 rounded-full p-2 ">
                      <AiFillFolderAdd />
                    </div>
                    <div className="font-bold pt-2">Thêm ảnh/video</div>
                    <span className="text-[14px] text-gray-500">
                      hoặc kéo thả
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="mt-0 pt-0">
          <button
            onClick={handleOpen}
            className="w-full bg-primary-500 text-text-1 font-bold p-2 rounded-lg text-[18px] hover:opacity-80"
          >
            Đăng
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
