import { Link } from "react-router-dom";
type StoryItemProps = {
  active: boolean;
};
const StoryItem = ({ active=true }: StoryItemProps) => {
  return (
    <Link
      to={"/stories/user_id/story_id"}
      className={
        "flex gap-3 " + (active?"" : " hover:") + "bg-input p-3 rounded-lg"
      }
    >
      <div className="w-[56px] h-[56px] p-1 border-2 rounded-full border-primary-500">
        <img
          className="w-full h-full rounded-full"
          src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/321997781_2345804922262134_8302450490560899743_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k_Zq3e6uVdsAb4s0LeK&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDStpqbpVHezhDDEA8ILfozoY6jsjf9JpueR9XhosHHkA&oe=6635941C"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-medium">Phạm Dịu</div>
        <div className="flex items-center gap-1 text-text text-[15px]">
          <div className="text-primary-500">1 thẻ mới</div>
          <div>·</div>
          <span>1 giờ</span>
        </div>
      </div>
    </Link>
  );
};

export default StoryItem;
