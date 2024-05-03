import { IoMdClose } from "react-icons/io";
import {  useNavigate } from "react-router-dom";
import StoryItem from "../components/item/StoryItem";
import { ImFilePicture } from "react-icons/im";
import bg_story from "../assets/base/bg_story.png";
import { IoTextOutline } from "react-icons/io5";
import { useState } from "react";
const StoriesCreate = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setImageUrl(url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10">
      <div className="flex h-full">
        <div className="hidden lg:flex w-sidebar bg-dark-bg  flex-col">
          <div className="flex flex-col h-full">
            <div className="flex gap-2 py-2 px-4 border-b border-input items-center">
              <div
                onClick={handleBack}
                className="bg-black h-fit p-2  text-text-1 hover:bg-input cursor-pointer text-[26px] rounded-full"
              >
                <IoMdClose />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-3 overflow-y-scroll scrollbar_custom">
              <div className="flex flex-col gap-3">
                <div className="font-medium text-[18px]">Tin của bạn</div>
                <div className="flex flex-col gap-2">
                  <StoryItem active={false} />
                </div>
              </div>
            </div>
            {imageUrl && (
              <div className="flex-1 flex items-end">
                <div className="flex gap-2 w-full p-4">
                  <button
                    onClick={() => setImageUrl("")}
                    className="bg-input py-2 w-2/5 rounded-lg font-medium hover:opacity-80 text-center"
                  >
                    Bỏ
                  </button>
                  <button className="bg-primary-500 flex-1 font-medium py-2 w-2/5 rounded-lg hover:opacity-80 text-center">
                    Chia sẻ lên tin
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1">
          {!imageUrl ? (
            <div className="flex-1 flex bg-[#18191a]">
              <div className="flex-1 flex items-center justify-end pr-[40px]"></div>
              <div className="flex justify-center   py-4 rounded-lg">
                <div className="w-full md:w-[425px]  flex items-center justify-center relative">
                  <div className="flex gap-4">
                    <div className="w-fit h-fit">
                      <label
                        htmlFor="story_img"
                        className=" relative hover:opacity-80 cursor-pointer w-full h-full"
                        style={{
                          backgroundImage: "url('" + bg_story + "')",
                          backgroundPosition: "0 - 0px",
                          backgroundSize: "auto",
                          width: "220px",
                          height: "330px",
                          backgroundRepeat: "no-repeat",
                          display: "inline-block",
                        }}
                      >
                        <div className="absolute top-0 left-0 gap-2 right-0 bottom-0 flex items-center justify-center flex-col ">
                          <div className="bg-dark-bg p-4 text-[20px] rounded-full shadow-sm shadow-gray-500">
                            <ImFilePicture />
                          </div>
                          <span className="text-[14px] font-bold">
                            Tạo tin ảnh
                          </span>
                          <input
                            onChange={handleFileChange}
                            type="file"
                            multiple
                            id="story_img"
                            hidden
                          />
                        </div>
                      </label>
                    </div>
                    <div className="w-fit h-fit">
                      <label
                        htmlFor="story_img"
                        className=" relative hover:opacity-80 cursor-pointer"
                        style={{
                          backgroundImage: "url('" + bg_story + "')",
                          backgroundPosition: "0px -331px",
                          backgroundSize: "auto",
                          width: "220px",
                          height: "330px",
                          backgroundRepeat: "no-repeat",
                          display: "inline-block",
                        }}
                      >
                        <div className="absolute top-0 left-0 gap-2 right-0 bottom-0 flex items-center justify-center flex-col ">
                          <div className="bg-dark-bg p-4 text-[20px] rounded-full shadow-sm shadow-gray-500">
                            <IoTextOutline />
                          </div>
                          <span className="text-[14px] font-bold">
                            Tạo tin văn bản
                          </span>
                          <input type="file" id="story_img" hidden />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center pl-[40px]"></div>
            </div>
          ) : (
            <div className=" w-full flex flex-col  flex-1 p-4 ">
              <div className="flex flex-col gap-2 flex-1">
                <div className="bg-input rounded-lg p-4 flex-1 flex flex-col">
                  <div className="font-medium mb-4">Xem trước</div>
                  <div className="border border-gray-700 rounded-lg p-4 bg-dark-bg flex justify-center items-center flex-1">
                    <div className="w-[344px] h-full  bg-dark-bg border  rounded-lg">
                      <img
                        className="w-full h-full object-contain"
                        src={imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium my-4">Thêm văn bản</div>
                    <div className="border border-gray-700  rounded-lg p-4 bg-dark-bg flex justify-center items-center ">
                      <input
                        type="text"
                        className="w-full bg-transparent"
                        placeholder="Aa..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoriesCreate;
