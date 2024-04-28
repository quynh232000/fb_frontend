// type GroupImageProps = {
//   count: number;
// };

const GroupImage = () => {
  const arrayImg = [
    "https://www.lovepanky.com/wp-content/uploads/2016/02/cute-vs-hot-girl.jpg",
    "https://cdn.pixabay.com/photo/2020/03/17/12/02/vietnam-4940070_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940057_960_720.jpg",
    "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210226-nu-sinh-de-thuong-12-600x900.jpg",
    "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/gai-xinh-toc-dai-deo-kinh-dep-25-edited.jpg",
    "https://ambalgvn.org.vn/wp-content/uploads/Hinh-anh-con-gai-cute-de-thuong2B252852529.jpg",
    "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/05/22054257/image-anh-gai-xinh-deo-kinh-toc-dai-toc-ngan-dang-yeu-cute-nhat-2022-165314777639174.jpg",
    "https://toigingiuvedep.vn/wp-content/uploads/2022/05/anh-gai-xinh-toc-dai-deo-kinh.jpg",
  ];
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
        <div
          className={"flex items-center justify-center cursor-pointer flex-2"}
        >
          <img className="w-full h-full object-cover" src={arrayImg[0]} />
        </div>

        <div className="flex-1 flex  gap-[2px]">
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[1]} />
          </div>
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[2]} />
          </div>
        </div>
      </div>
    );
  } else if (len == 4) {
    return (
      <div className="pt-4  flex flex-wrap gap-[2px]">
        <div className="flex gap-[2px]">
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[0]} />
          </div>
        </div>
        <div className="flex gap-[2px]">
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[1]} />
          </div>
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[2]} />
          </div>
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[3]} />
          </div>
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
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[0]} />
          </div>
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[1]} />
          </div>
        </div>
        <div className="flex gap-[2px]">
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[2]} />
          </div>
          <div
            className={"flex items-center justify-center cursor-pointer flex-1"}
          >
            <img className="w-full h-full object-cover" src={arrayImg[3]} />
          </div>
          <div className="flex items-center justify-center cursor-pointer flex-1 relative">
            <img className="w-full h-full object-cover" src={arrayImg[4]} />
            {imgMore}
          </div>
        </div>
      </div>
    );
  }
};

export default GroupImage;
