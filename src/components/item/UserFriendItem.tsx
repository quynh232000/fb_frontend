import Tippy from "@tippyjs/react";
import TippyUserView from "../tippy/TippyUserView";
import { Link } from "react-router-dom";

const UserFriendItem = () => {
  
  return (
      <Tippy
        visible={false}
        interactive
        placement="bottom"
        delay={[200, 200]}
        render={() => <TippyUserView />}
       
      >
    <Link to={"/user/12421"} className="flex flex-col gap-2">
        <div className="rounded-lg">
          <img
            className="rounded-lg w-full h-full object-cover"
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/428699561_314333184970090_54279162792916637_n.jpg?stp=dst-jpg_s148x148&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XKvZt-LOBk8Ab5Uqjfi&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCqQHdF-Pkg97RfJXd1J9wdzUdYVn3IEeaaOKUCI21Eqw&oe=663689F3"
            alt=""
          />
        </div>
      <div className="font-medium text-[14px] text-text-1">Ngân Trần</div>
    </Link>
      </Tippy>
  );
};

export default UserFriendItem;
