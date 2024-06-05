import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { ChangeEvent } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
interface ModalUpateAvatarPostProps {
  isModalUpdateAvatar: boolean;
  setIsModalUpdateAvatar: React.Dispatch<boolean>;
  link:string;
  handleSaveAvatar:()=>void;
  setContentAvatar:(a:string)=>void;
 
}
export default function ModalUpateAvatarPost({
  isModalUpdateAvatar,
  setIsModalUpdateAvatar,
  handleSaveAvatar,
  setContentAvatar,
  link
}: ModalUpateAvatarPostProps) {

  const handleClose = () => {
    setIsModalUpdateAvatar(false);
    
  };
  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    setContentAvatar(e.target.value);
  };
  
  return (
    <form>
      <Dialog
        className="bg-dark-bg text-white shadow-sm shadow-gray-700 relative "
        open={isModalUpdateAvatar}
        handler={setIsModalUpdateAvatar}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-text-1 flex justify-center p-2">
          Chọn ảnh đại diện
          <div
            onClick={handleClose}
            className="absolute top-4 right-4 w-[32px] h-[32px] bg-input rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer text-text"
          >
            <IoClose />
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="border-t border-input py-4 text-text-1  ">
            <div>
              <input
                className="w-full border border-input p-3 rounded-lg bg-transparent focus:outline"
                type="text"
                placeholder="Mô tả.."
                name="description"
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[300px] h-[300px] my-5">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={link}
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-2 items-center border-b border-input p-2">
              <FaEarthAfrica />
              <span>Ảnh đại diện của bạn hiển thị công khai.</span>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="mt-0 pt-0 flex gap-2">
          <button  onClick={handleClose} className="hover:bg-input py-2 px-5 text-primary-700 rounded-lg hover:opacity-80">Hủy</button>
          <button
          className="bg-primary-500 py-2 px-[38px] text-white rounded-lg hover:opacity-80"
          onClick={handleSaveAvatar}
          // onClick={handleClose}
          // className={
          //   (formData.content && !isLoading
          //     ? "bg-primary-500 text-text-1 hover:opacity-80 "
          //     : " cursor-not-allowed ") +
          //   "w-full bg-gray-700  text-gray-500    font-bold p-2 rounded-lg text-[18px] "
          // }
          >
            Đăng
          </button>
        </DialogFooter>
      </Dialog>
    </form>
  );
}
