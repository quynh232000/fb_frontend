import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SidebarPhoto from "../components/shared/SidebarPhoto";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Photo = () => {
const type  ="image";
const link ="https://i.pinimg.com/736x/ef/50/5c/ef505c7189912b5b30478dd129cfebb9.jpg"
    const location = useLocation();
    console.log(location.pathname);
    
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10">
      <div className="flex h-full flex-col md:flex-row ">
        <div className=" relative flex flex-0 flex-1 justify-center h-80 md:h-full ">
          <div
            onClick={handleBack}
            className="bg-black h-fit p-2  text-text-1  hover:bg-input cursor-pointer text-[26px] rounded-full absolute left-[10px] top-[10px]"
          >
            <IoMdClose />
          </div>
          <div className="flex p-2 items-center ">
            <div className="bg-[rgba(22,22,24,1)] text-text hover:tex-text-1 hover:bg-input cursor-pointer p-4 rounded-full text-[22px]">
              <FaAngleLeft />
            </div>
          </div>
          <div className=" flex-1 justify-center flex">
            <div className="  flex-1 flex justify-center items-end">
              {type == "image"?(<img
                className="w-full h-full object-contain"
                src={link}
                alt=""
              />):(<video className="h-full w-full rounded-lg" controls autoPlay>
              <source
                src={link}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>)}
            </div>
          </div>
          <div className="flex items-center p-2">
            <div className="bg-[rgba(22,22,24,1)] text-text hover:tex-text-1 hover:bg-input cursor-pointer p-4 rounded-full text-[22px]">
              <FaAngleRight />
            </div>
          </div>
        </div>
        <div className="w-full md:w-sidebar  bg-dark-bg border-t border-input relative ">
          <SidebarPhoto />
        </div>
      </div>
    </div>
  );
};

export default Photo;
