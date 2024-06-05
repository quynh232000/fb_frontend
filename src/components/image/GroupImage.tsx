import { Link } from "react-router-dom";
import { PostMediaModel } from "../../types/post";

interface GroupImageProps {
  data: PostMediaModel[];
}
type TypeImage ={
  file: string;
  media_id: string;
  type:string
}
const GroupImage = ({ data }: GroupImageProps) => {
  let arrayImg: TypeImage[] = [];
  let len = 0;
  const base_url = "";
  data.forEach((media) => {
    const list = JSON.parse(media.file).map((item:string)=>{
      return {
        file: base_url + item,
        media_id: media.uuid,
        type: media.file_type =='image' ? 'photo' : 'video',
      };
    });
    len += list.length;
    arrayImg = [...arrayImg, ...list];
  });
  
  if (len < 3) {
    return (
      <div className="pt-4 flex  gap-[2px]">
        {arrayImg.map((item: TypeImage, index: number) => {
          return (
            <Link
              to={"/"+item.type+"/" + item.media_id+ "?i="+(index+1)}
              key={index}
              className={
                "flex items-center justify-center cursor-pointer flex-1 max-h-[460px]"
              }
            >
              {item.file.includes("image") ? (
                <img
                  className="w-full h-full object-cover"
                  src={base_url + item.file}
                />
              ) : (
                <video className="w-full h-full bg-gray-800" controls>
                  <source src={base_url + item.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Link>
          );
        })}
      </div>
    );
  } else if (len == 3) {
    
    return (
      <div className="pt-4  flex flex-wrap gap-[2px]">
        <Link
          to={"/"+arrayImg[0].type+"/" + arrayImg[0].media_id + "?i=1"}
          className={"flex items-center justify-center cursor-pointer flex-2 "}
        >
          {arrayImg[0].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[0].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[0].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Link>

        <div className="flex-1 flex  gap-[2px]">
          <Link
            to={"/"+arrayImg[1].type+"/" + arrayImg[1].media_id + "?i=2"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[1].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[1].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[1].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
          <Link
            to={"/"+arrayImg[2].type+"/" + arrayImg[2].media_id + "?i=3"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[2].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[2].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[2].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
        </div>
      </div>
    );
  } else if (len == 4) {
    
    
    return (
      <div className="pt-4  flex flex-wrap gap-[2px]">
        <div className="flex gap-[2px]">
          <Link
            to={"/"+arrayImg[0].type+"/" + arrayImg[0].media_id + "?i=1"}
            className={"flex items-center justify-center cursor-pointer flex-1 h-[56px]"}
          >
           {arrayImg[0].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[0].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[0].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
        </div>
        <div className="flex gap-[2px]">
          <Link
            to={"/"+arrayImg[1].type+"/" + arrayImg[1].media_id + "?i=2"}
            className={"flex items-center justify-center cursor-pointer flex-1 "}
          >
            {arrayImg[1].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[1].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[1].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
          <Link
            to={"/"+arrayImg[2].type+"/" + arrayImg[2].media_id + "?i=3"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[2].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[2].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[2].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
          <Link
            to={"/"+arrayImg[3].type+"/" + arrayImg[3].media_id + "?i=4"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[3].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[3].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[3].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
        </div>
      </div>
    );
  } else {
    let imgMore = null;
    if (len > 5) {
      imgMore = (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(22,22,24,.3)] flex items-center justify-center cursor-pointer">
          <span className=" text-[36px] font-medium">+{len - 5}</span>
        </div>
      );
    }
    return (
      <div className="pt-4  flex flex-wrap gap-[2px] ">
        <div className="flex gap-[2px]">
          <Link
            to={"/"+arrayImg[0].type+"/" + arrayImg[0].media_id + "?i=1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[0].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[0].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[0].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
          <Link
            to={"/"+arrayImg[1].type+"/" + arrayImg[1].media_id + "?i=2"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[1].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[1].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[1].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
        </div>
        <div className="flex gap-[2px]">
          <Link
            to={"/"+arrayImg[2].type+"/" + arrayImg[2].media_id + "?i=3"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[2].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[2].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[2].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
          <Link
            to={"/"+arrayImg[3].type+"/" + arrayImg[3].media_id + "?i=4"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {arrayImg[3].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[3].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[3].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </Link>
          <Link
            to={"/"+arrayImg[4].type+"/" + arrayImg[4].media_id + "?i=5"}
            className="flex items-center justify-center cursor-pointer flex-1 relative"
          >
            {arrayImg[4].file.includes("image") ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + arrayImg[4].file}
            />
          ) : (
            <video className="w-full h-full bg-gray-800" controls>
              <source src={base_url + arrayImg[4].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
            {imgMore}
          </Link>
        </div>
      </div>
    );
  }
};

export default GroupImage;
