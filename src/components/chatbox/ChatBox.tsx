
import { FaAngleDown, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import ChatBoxItem from "./ChatBoxItem";
import { useDispatch } from "react-redux";
import { closeChat } from "../../redux/reducers/chatBoxReducer";
type chatBoxProps ={
  id:number
}
const ChatBox = ({id}:chatBoxProps) => {
  const dispatch = useDispatch();
  const handleCloseChat =()=>{
    dispatch(closeChat(id))
  }
  return (
    <div className="">
      <div className="flex flex-col h-[450px] w-[330px] bg-dark-bg shadow-sm shadow-gray-700 rounded-lg">
        <div className="flex justify-between items-center border-b border-input">
          <div className="flex gap-2 items-center p-1 hover:bg-input rounded-lg cursor-pointer">
            <div className="w-[32px] h-[32px] rounded-full">
              <img
              className="w-full h-full rounded-full"
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/83786509_586639818947009_1582074134311993344_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ztnuFRZrYowAb4aSpP9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDbGTttdOW_Uv75L3m3J0DbWlbAqa0LCwYUvSjeSRkrXQ&oe=6656D339"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="font-bold text-text-1">Trần Minh Sang</h4>
              <div className="text-[13px] text-text">Đang hoạt động</div>
            </div>
            <div className="text-text mx-1">
              <FaAngleDown />
            </div>
          </div>
          <div className="flex items-center gap-1 p-1 text-primary-500 text-[16px]">
            <div className="rounded-full p-2 hover:bg-input cursor-pointer">
              <FaPhoneAlt />
            </div>
            <div className="rounded-full p-2 hover:bg-input cursor-pointer">
              <FaVideo />
            </div>
            <div onClick={handleCloseChat} className="rounded-full p-2 font-bold hover:bg-input cursor-pointer  ">
              <IoMdClose  className="text-[22px] font-bold"/>
              
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-scroll scrollbar_custom scrollbar_hover flex flex-col gap-3 p-2">
                <ChatBoxItem type="left"/>
                <ChatBoxItem type="right"/>
                <ChatBoxItem type="left"/>

                <ChatBoxItem type="left"/>
                <ChatBoxItem type="right"/>
              
        </div>
        <div className="flex items-center justify-between p-2 gap-2">
            <div className="text-[24px] hover:bg-input hover:text-primary-500 p-1 cursor-pointer rounded-full text-text">
                <IoMdAddCircleOutline/>
            </div>
            <div className="flex-1 bg-input rounded-full py-2 px-3">
                <input type="text" placeholder="Aa" className="w-full bg-transparent"/>
            </div>
            <div className="text-[20px] hover:bg-input hover:text-primary-500 p-2 cursor-pointer rounded-full text-text">
                <IoSend/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
