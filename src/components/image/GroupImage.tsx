import { Link } from "react-router-dom";

interface GroupImageProps {
  arrayImg: string[];
}

const GroupImage = ({ arrayImg }: GroupImageProps) => {
  const len = arrayImg.length;

  if (len < 3) {
    return (
      <div className="pt-4 flex  gap-[2px]">
        {arrayImg.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "flex items-center justify-center cursor-pointer flex-1"
              }
            >
              <img className="w-full h-full object-cover" src={item} />
            </div>
          );
        })}
      </div>
    );
  } else if (len == 3) {
    return (
      <div className="pt-4  flex flex-wrap gap-[2px]">
        <Link to={"/photo/1"}
          className={"flex items-center justify-center cursor-pointer flex-2"}
        >
          <img className="w-full h-full object-cover" src={arrayImg[0]} />
        </Link>

        <div  className="flex-1 flex  gap-[2px]">
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[1]} />
          </Link>
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[2]} />
          </Link>
        </div>
      </div>
    );
  } else if (len == 4) {
    return (
      <div className="pt-4  flex flex-wrap gap-[2px]">
        <div className="flex gap-[2px]">
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[0]} />
          </Link>
        </div>
        <div className="flex gap-[2px]">
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[1]} />
          </Link>
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[2]} />
          </Link>
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[3]} />
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
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[0]} />
          </Link>
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[1]} />
          </Link>
        </div>
        <div className="flex gap-[2px]">
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[2]} />
          </Link>
          <Link to={"/photo/1"}
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[3]} />
          </Link>
          <Link to={"/photo/1"} className="flex items-center justify-center cursor-pointer flex-1 relative">
            <img className="w-full h-full object-cover" src={arrayImg[4]} />
            {imgMore}
          </Link>
        </div>
      </div>
    );
  }
};

export default GroupImage;
