import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMediaUser } from "../../../services/UserService";
import { PostMediaModel } from "../../../types/post";
type ImageProfileProps = {
  user_uuid: string;
};
const ImageProfile = ({ user_uuid }: ImageProfileProps) => {
  const [mediaImageUser, setMediaImageUser] = useState([]);
  useEffect(() => {
    getMediaUser(user_uuid,'image').then((res) => {
      res.status && setMediaImageUser(res.data);
    });
  }, [user_uuid]);
let countImage =0;
  return (
    <div className="bg-dark-bg rounded-lg p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="font-bold text-[20px]">Ảnh</div>
        <Link to={"/user/"+user_uuid+"/photos"} className="text-primary-500">
          Xem tất cả ảnh
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden ">
        {mediaImageUser.length > 0 &&
          mediaImageUser.map((item: PostMediaModel) => {
            const files = JSON.parse(item.file);

            return files.map((file: string, index: number) => {
              if (countImage >= 9) return;
              countImage ++
              return (
                <Link className="h-[160px]" key={index} to={"/photo/" + item.uuid + "?i=" + (index + 1)}>
                  <img
                    className="w-full h-full object-cover"
                    src={file}
                    alt=""
                  />
                </Link>
              );
            });
          })}
      </div>
    </div>
  );
};

export default ImageProfile;
