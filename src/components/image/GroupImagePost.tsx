import { Link } from "react-router-dom";
import { FileType } from "../../types/app";

interface GroupImagePostProps {
  data: FileType[];
}

const GroupImagePost = ({ data }: GroupImagePostProps) => {
  const len = data.length;

  const base_url = "";
  if (len < 3) {
    return (
      <div className="pt-4 flex  gap-[2px]">
        {data.map((item: FileType, index: number) => {
          return (
            <div
              key={index}
              className={
                "flex items-center justify-center cursor-pointer flex-1"
              }
            >
              {item.type == "image" ? (
                <img
                  className="w-full h-full object-cover"
                  src={base_url + item.file}
                />
              ) : (
                <video className="w-full h-full" controls>
                  <source src={base_url + item.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          );
        })}
      </div>
    );
  } else if (len == 3) {
    console.log(123);
    
    return (
      <div className="pt-4  flex flex-wrap gap-[2px]">
        <Link
          to={"/photo/1"}
          className={"flex items-center justify-center cursor-pointer flex-2"}
        >
          {data[0].type == "image" ? (
            <img
              className="w-full h-full object-cover"
              src={base_url + data[0].file}
            />
          ) : (
            <video className="w-full h-full" controls>
              <source src={base_url + data[0].file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Link>

        <div className="flex-1 flex  gap-[2px]">
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[1].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[1].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[1].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[2].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[2].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[2].file} type="video/mp4" />
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
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[0].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[0].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[0].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
        </div>
        <div className="flex gap-[2px]">
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[1].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[1].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[1].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[2].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[2].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[2].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[3].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[3].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[3].file} type="video/mp4" />
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
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[0].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[0].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[0].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[1].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[1].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[1].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
        </div>
        <div className="flex gap-[2px]">
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[2].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[2].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[2].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
          <Link
            to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            {data[3].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[3].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[3].file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
          <Link
            to={"/photo/1"}
            className="flex items-center justify-center cursor-pointer flex-1 relative"
          >
            {data[4].type == "image" ? (
              <img
                className="w-full h-full object-cover"
                src={base_url + data[4].file}
              />
            ) : (
              <video className="w-full h-full" controls>
                <source src={base_url + data[4].file} type="video/mp4" />
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

export default GroupImagePost;
