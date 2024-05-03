import { useDispatch } from "react-redux";
import { openChat } from "../../redux/reducers/chatBoxReducer";

const HeaderMessageItem = () => {
  const dispatch = useDispatch();
  
  
  const handleOpenChat = (id:number) => {
    dispatch(
      openChat(id)
    );
  }
  return (
    <div onClick={()=>handleOpenChat(8)} className="flex items-center gap-2 p-2 hover:bg-input rounded-lg cursor-pointer ">
      <div className="w-[56px] h-[56px] rounded-full">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/356242096_118102127991831_4363206265247744893_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=byWlWZ4gHpkQ7kNvgH2Uyq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCy_3k2HNbcIhqeaQ7F7brJe9Gi3FU686NLe1eBNliS-w&oe=663913A5"
          alt="image"
        />
      </div>
      <div className="flex-1">
        <div className="font-bold text-text-1">Bùi Kim Như</div>
        <div className="flex items-center text-text text-[14px]">
          <div className="line-clamp-1 flex-1">
            Cảm ơn bạn đã tin tưởng và ủng hộ chúng tôi, sự hiện diện của các
            bạn...
          </div>
          <span>· 1 tuần </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMessageItem;
