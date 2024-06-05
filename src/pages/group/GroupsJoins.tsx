
import { useEffect, useState } from "react";
import GroupItem from "../../components/item/GroupItem";
import GroupSideBar from "./GroupSideBar";
import { getSuggestionGroups, groupJoined } from "../../services/GroupService";
import { GroupModel } from "../../types/app";
const GroupsJoins = () => {
  const [suggestionGroups, setSuggestionGroups] = useState<GroupModel[]|null>(null)
  const [myGroupJoined, setMyGroupJoined] = useState<GroupModel[]|null>(null)
  useEffect(()=>{
    groupJoined().then(res=>{
      if(res && res.status){
        setMyGroupJoined(res.data)
      }
    })
    getSuggestionGroups().then(res=>{
      if(res && res.status){
        setSuggestionGroups(res.data)
      }
    })
  },[])
  
  return (
    <div className="flex h-full">
      <GroupSideBar/>
      <div className="flex-1 flex justify-center overflow-y-scroll scrollbar_custom">
        <div className="flex flex-col py-4 gap-4 px-4 lg:px-[40px] max-w-[1140px] ">
          <div className="text-text font-medium py-2">
            <div className="text-text-1 font-bold">
              Nhóm bạn đã tham gia
            </div>
            <span className="text-[14px]">
              Xem các nhóm và kênh bảng feed mà bạn đã yêu cầu tham gia. Có thể
              bạn sẽ phải trả lời câu hỏi thì một số nhóm mới phê duyệt yêu cầu
              tham gia của bạn.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b border-input py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {myGroupJoined && myGroupJoined.map((group,index)=>{
                return <GroupItem key={index} group={group} type='joined'/>;
              })}
             
            </div>
          <div className="text-text-1 font-bold">
            Nhóm gợi ý
          </div>
          <div className="flex flex-col gap-4">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {suggestionGroups && suggestionGroups.map((item:GroupModel,index)=>{
                return <GroupItem key={index} group={item} type='suggestion'/>;
              })}
             
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsJoins;
