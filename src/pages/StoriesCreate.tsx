import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ImFilePicture } from "react-icons/im";
import bg_story from "../assets/base/bg_story.png";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { FaVideo } from "react-icons/fa";
import { FormDataPost } from "../types/post";
import { createStory } from "../services/StoryService";
import { setNotify } from "../redux/reducers/appReducer";
import StoryItemAuth from "../components/item/StoryItemAuth";
const StoriesCreate = () => {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state: RootState) => state.authReducer);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataPost>({
    type: "",
    content: "",
    story: null,
  });
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
   
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    if (files) {
      const file = files?.[0];
      if (file) {
        setFormData(prev=>({ ...prev, type: file.type.split("/")[0] }));
        const reader = new FileReader();
        reader.onloadend = () => {
          const url = reader.result as string;
          setImageUrl(url);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  // handle submit create story
  const handleSubmit = () => {
    console.log(formData);

    setIsLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          data.append(key + "[]", value[i]);
        }
      } else {
        data.append(key, value as string);
      }
    });
    // send story data
    createStory(data).then((res) => {
      if(res.status){
        setTimeout(()=>{
          navigate("/")
        },1000)
      }
      setIsLoading(false);
      dispatch(
        setNotify({
          type: res.status ? "success" : "error",
          message: res.message,
        })
      );
    });
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
                  <StoryItemAuth active={false} user={stateAuth.user} />
                </div>
              </div>
            </div>
            {imageUrl && (
              <div className="flex-1 flex items-end">
                <div className="flex gap-2 w-full p-4">
                  <button
                    onClick={() => setImageUrl(null)}
                    className="bg-input py-2 w-2/5 rounded-lg font-medium hover:opacity-80 text-center"
                  >
                    Bỏ
                  </button>
                  <button
                    onClick={handleSubmit}
                    className={
                      (imageUrl && !isLoading
                        ? "bg-primary-500 text-text-1 hover:opacity-80 "
                        : "cursor-not-allowed bg-gray-700  text-gray-500") +
                      "   flex-1 font-medium py-2 w-2/5 rounded-lg hover:opacity-80 text-center"
                    }
                  >
                    Chia sẻ lên tin
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div
            className={
              (imageUrl != null ? "hidden " : "flex ") + "flex-1 bg-[#18191a]"
            }
          >
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
                          // onChange={handleFileChange}
                          onChange={handleChangeInput}
                          type="file"
                          name="story"
                          id="story_img"
                          className="hidden"
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
                          <FaVideo />
                        </div>
                        <span className="text-[14px] font-bold">
                          Tạo tin video
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center pl-[40px]"></div>
          </div>

          <div
            className={
              (imageUrl == null ? "hidden " : "flex ") +
              " w-full  flex-col  flex-1 p-4 "
            }
          >
            <div className="flex flex-col gap-2 flex-1">
              <div className="bg-input rounded-lg p-4 flex-1 flex flex-col">
                <div className="font-medium mb-4">Xem trước</div>
                <div className="border border-gray-700 rounded-lg p-4 bg-dark-bg flex justify-center items-center flex-1">
                  <div className="w-[344px] h-full  bg-dark-bg border  rounded-lg">
                    {formData.type == "image" ? (
                      <img
                        className="w-full h-full object-contain"
                        src={imageUrl ? imageUrl : ""}
                        alt=""
                      />
                    ) : (
                      <video
                        className="h-full w-full rounded-lg"
                        controls
                        autoPlay
                      >
                        <source
                          src={imageUrl ? imageUrl : ""}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-medium my-4">Thêm văn bản</div>
                  <div className="border border-gray-700  rounded-lg p-4 bg-dark-bg flex justify-center items-center ">
                    <input
                      onChange={handleChangeInput}
                      name="content"
                      type="text"
                      className="w-full bg-transparent"
                      placeholder="Aa..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesCreate;
