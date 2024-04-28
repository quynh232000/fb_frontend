import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const CommentItem = () => {
  return (
    <div className="flex gap-2">
      <div className="w-[32px] h-[32px] rounded-full">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/422833395_1713612689132685_3613034821652126346_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eYj_DwqwQbQQ7kNvgFKrezQ&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfClhdKcUNmy7QEC7Y_E0B59FzUMbuXdxGR2GaJV1VW-Cg&oe=66342336"
          alt=""
        />
      </div>
      <div>
        <div className=" group flex text-text-1 items-center gap-2">
          <div className="flex flex-col bg-input py-2 px-4 rounded-[20px]">
            <Link to="">
              <h4 className="font-bold">Trường Vy</h4>
            </Link>
            <p>Có tuyển remote không ạ</p>
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
            <div>2</div>
            <span>ngày</span>
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
