import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AiFillFolderAdd } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import avatar_user from "../../assets/base/avatar_user.webp";
import { FormDataPost, PostModel, UserModel } from "../../types/post";
import { createPost } from "../../services/PostService";
import { useDispatch } from "react-redux";
import { setNotify } from "../../redux/reducers/appReducer";
import GroupImagePost from "../image/GroupImagePost";
import { FileType } from "../../types/app";
interface ModalCreatePostProps {
  isModalCreatePost: boolean;
  setIsModalCreatePost: React.Dispatch<boolean>;
  user: UserModel;
  type: string;
  id:string;
  setNewPost:(a:PostModel)=>void;
}

export default function ModalCreatePost({
  isModalCreatePost,
  setIsModalCreatePost,
  user,
  type='user',
  id,
  setNewPost
}: ModalCreatePostProps) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormDataPost>({
    type: type,
    is_public: "1",
  });
  const [files, setFiles] = useState<FileType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setIsModalCreatePost(!isModalCreatePost);
    setFiles([]);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      Promise.all(
        filesArray.map((file) => {
          const type =(file.type.split('/')[0]);
          
          return new Promise<FileType>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target && e.target.result) {
                resolve({file:e.target.result + "",type:type});
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
  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };
  // handle submit create post
  const handleSubmit = () => {
    setIsLoading(true);
    if (formData.content) {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        const value = formData[key];
        if (value instanceof FileList) {
          for (let i = 0; i < value.length; i++) {
            data.append(key + "[]", value[i]);
          }
        } else {
          data.append(key, value as string);
        }
      });
      if(type != 'user'){
        data.append('id',id)
      }
      // send post data
      createPost(data).then((res) => {
        setIsLoading(false);
        if (res.status) {
          setIsModalCreatePost(false);
          setNewPost(res.data)
        }
        dispatch(
          setNotify({
            type: "success",
            message: res.message,
          })
        );
      });
    }
  };
  
  return (
    <form>
      <Dialog
        onSubmit={handleSubmit}
        className="bg-dark-bg text-white shadow-sm shadow-gray-700 relative "
        open={isModalCreatePost}
        handler={setIsModalCreatePost}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-text-1 flex justify-center p-3">
          Tạo bài viết
          <div
            onClick={handleOpen}
            className="absolute top-4 right-4 w-[32px] h-[32px] bg-input rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer text-text"
          >
            <IoClose />
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="border-t border-input py-4 text-text-1  ">
            <div className="flex gap-3 text-text-1 font-bold">
              <div className="w-[40px] h-[40px] rounded-full">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user.avatar || avatar_user}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <span>{user.first_name + " " + user.last_name}</span>
                <div className="">
                  <select
                    id=""
                    name="is_public"
                    onChange={handleChangeInput}
                    className="bg-input cursor-pointer text-text-1 font-medium px-2 py-1 rounded-lg text-[14px]"
                  >
                    <option value="1">Công khai</option>
                    <option value="0">Chỉ mình tôi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="h-80 overflow-y-scroll scrollbar_custom my-2">
              <div className="flex mt-3">
                <textarea
                  className="w-full bg-transparent text-[20px] text-text-1"
                  id=""
                  name="content"
                  onChange={handleChangeInput}
                  rows={2}
                  placeholder={user.last_name + " ơi, bạn đang nghĩ gì thế?"}
                ></textarea>
              </div>
              <div className="relative border border-input my-2 rounded-lg p-2 ">
                <div className=" bg-input rounded-lg flex flex-col items-center justify-center min-h-[180px]  cursor-pointer hover:bg-gray-800">
                  <div className="flex">
                    {files && files.length > 0 && (
                      <GroupImagePost data={files} />
                    )}
                    {/* <GroupImage arrayImg={data}/> */}
                  </div>
                  <input
                    type="file"
                    id="inputsImg"
                    multiple
                    accept="image/*,video/*"
                    hidden
                    name="images"
                    onChange={handleChangeInput}
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
            onClick={handleSubmit}
            // onClick={handleOpen}
            className={
              (formData.content && !isLoading
                ? "bg-primary-500 text-text-1 hover:opacity-80 "
                : " cursor-not-allowed ") +
              "w-full bg-gray-700  text-gray-500    font-bold p-2 rounded-lg text-[18px] "
            }
          >
            Đăng
          </button>
        </DialogFooter>
      </Dialog>
    </form>
  );
}
