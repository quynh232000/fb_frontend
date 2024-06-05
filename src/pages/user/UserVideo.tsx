import { useSelector } from "react-redux";
import UserPhotoItem from "../../components/item/user/UserPhotoItem";
import UserMap from "./UserMap";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import { getMediaUser } from "../../services/UserService";
import { PostMediaModel } from "../../types/post";

const UserVideo = () => {
  const stateApp = useSelector((state: RootState) => state.appReducer);
  const user = stateApp.currentUser;
  const [mediaUser, setMediaUser] = useState([]);
  useEffect(() => {
    user && getMediaUser(user.uuid,'video').then((res) => {
      res.status && setMediaUser(res.data);
    });
  }, [user]);
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
          
        {mediaUser.length > 0 &&
          mediaUser.map((item: PostMediaModel) => {
            const files = JSON.parse(item.file);

            return files.map((file: string, index: number) => {
              return (
                <UserPhotoItem key={item.uuid} i={index} uuid={item.uuid} type="video"  link={file}/>
               
              );
            });
          })}

        
        </div>
      </div>
      <UserMap/>
    </div>
  );
};

export default UserVideo;
