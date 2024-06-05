import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CommentModel } from "../../types/comment";
import avatar_user from "../../assets/base/avatar_user.webp"
 
type CommentItemProps={
  comment:CommentModel
}
const CommentItem = ({comment}:CommentItemProps) => {
  
  return (
    <div className="flex gap-2">
      <div className="w-[32px] h-[32px] rounded-full">
        <img
          className="w-full h-full object-cover rounded-full"
          src={comment.user.avatar ?? avatar_user}
          alt=""
        />
      </div>
      <div>
        <div className=" group flex text-text-1 items-center gap-2">
          <div className="flex flex-col bg-input py-2 px-4 rounded-[20px]">
            <Link to={"/user/"+comment.user.uuid}>
              <h4 className="font-bold">{comment.user.first_name+" "+comment.user.last_name}</h4>
            </Link>
            <p>{comment.comment}</p>
          </div>
          <div className="">
            <Menu>
              <MenuHandler>
                <Button className="flex cursor-pointer bg-transparent  hover:bg-input w-[32px] h-[32px] rounded-full  items-center justify-center p-0">
                  <HiOutlineDotsHorizontal className="size-[20px] " />
                </Button>
              </MenuHandler>
              <MenuList className="bg-dark-bg p-2 border-none shadow-sm shadow-gray-600">
                <MenuItem className="text-text-1 font-bold hover:bg-input hover:text-text-1">Ẩn bình luận</MenuItem>
                <MenuItem className="text-text-1 font-bold hover:bg-input hover:text-text-1">Báo cáo bình luận với quản trị viên</MenuItem>
                <MenuItem className="text-text-1 font-bold hover:bg-input hover:text-text-1">Ẩn bình luận</MenuItem>
               
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="flex gap-4 text-[13px] py-1 text-text">
          <div className="flex gap-1">
            <div>{comment.created_at.split("T")[0]}</div>
            {/* <span>ngày</span> */}
          </div>
          <div className="font-bold cursor-pointer">Thích</div>
          <div className="font-bold cursor-pointer">Phản hồi</div>
          <div className="font-bold cursor-pointer">Chia sẻ</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
