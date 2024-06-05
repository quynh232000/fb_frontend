import { Link } from "react-router-dom";
import { PostMediaModel } from "../../types/post";

interface GroupImageProps {
  data: PostMediaModel[];
  thumbnail: string;
}
type TypeImage = {
  file: string;
  media_id: string;
  type: string;
};
const PostAvatar = ({ data, thumbnail }: GroupImageProps) => {
  let arrayImg: TypeImage[] = [];
  const base_url = "";
  data.forEach((media) => {
    const list = JSON.parse(media.file).map((item: string) => {
      return {
        file: base_url + item,
        media_id: media.uuid,
        type: media.file_type == "image" ? "photo" : "video",
      };
    });
    arrayImg = [...arrayImg, ...list];
  });

  return (
    <div className="pt-4 flex  gap-[2px]">
      {arrayImg.map((item: TypeImage, index: number) => {
        return (
          <div
            key={index}
            className={
              "flex items-center justify-center cursor-pointer flex-1  relative pb-[200px]"
            }
          >
            <div className="h-[222px] w-full">
              <img
                className="w-full h-full object-cover"
                src={thumbnail}
                alt=""
              />
            </div>
            <Link
              to={"/" + item.type + "/" + item.media_id + "?i=" + (index + 1)}
              className="w-[388px] h-[388px] rounded-full absolute top-10 border-4 border-dark-bg"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={base_url + item.file}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostAvatar;
