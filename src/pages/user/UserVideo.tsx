import UserPhotoItem from "../../components/item/user/UserPhotoItem";
import UserMap from "./UserMap";

const UserVideo = () => {
  const link = "https://docs.material-tailwind.com/demo.mp4";
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-dark-bg px-4 py-2 rounded-lg">
        <div className="flex flex-col gap-4 py-2">
          <div className="flex justify-between ">
            <div className="font-bold text-[18px]">Video</div>
          </div>
          <div className="flex text-[15px]">
            <button className="py-3 text-center px-4 border-b-2 border-primary-600 text-primary-500 font-medium w-fit">
              Video của bạn
            </button>
          </div>
        </div>
        <div className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-6   gap-4 py-4">
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
          <UserPhotoItem type={"video"} link={link} />
        </div>
      </div>
      <UserMap/>
    </div>
  );
};

export default UserVideo;
