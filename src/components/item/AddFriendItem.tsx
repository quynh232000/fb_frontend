import { Link } from "react-router-dom";
type AddFriendItemProps = {
  type: string;
};
const AddFriendItem = ({ type = "requests" }: AddFriendItemProps) => {
  return (
    <div className="border border-input bg-dark-bg rounded-lg overflow-hidden">
      <div className="w-full h-[240px]">
        <img
          className="w-full h-full object-cover"
          src="https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-gai-xinh-trung-quoc.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col p-3">
        <div className="flex flex-col">
          <Link to={"/user/123"} className="font-bold text-[18px]">
            Cherry Bin
          </Link>
          <div className="text-text text-[14px]">3 bạn chung</div>
        </div>
        <div className="flex flex-col gap-2 pt-4 text-text-1 font-medium">
          {type == "requests" ? (
            <button className="bg-primary-500 p-2 rounded-lg hover:opacity-80">
              Xác nhận
            </button>
          ) : (
            <button className="bg-primary-300 text-primary-700 p-2 rounded-lg hover:opacity-80">
              Thêm bạn bè
            </button>
          )}

          <button className="bg-input p-2 rounded-lg hover:opacity-80">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFriendItem;
