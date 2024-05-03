import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import StoryItem from "../components/item/StoryItem";
import { FaEarthAfrica } from "react-icons/fa6";
import icon_like from "../assets/base/icon/icon_like.svg";
import icon_heart from "../assets/base/icon/icon_heart.svg";
import icon_haha from "../assets/base/icon/icon_haha.svg";
import icon_woa from "../assets/base/icon/icon_woa.svg";
import { IoSend } from "react-icons/io5";
import { Carousel, Progress } from "@material-tailwind/react";

const Stories = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10 ">
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
              {/* <Link to={"/"} className="w-[42px] h-[42px]">
                <img src={logo} alt="" />
              </Link> */}
            </div>
            <div className="flex flex-col gap-2 p-3 overflow-y-scroll scrollbar_custom">
              <div className="flex flex-col gap-3">
                <div className="font-bold text-[26px] ">Tin</div>
                <div className="flex gap-1 items-center text-primary-500">
                  <Link to={"/"}>Kho lưu chữ</Link>
                  <div>·</div>
                  <Link to={"/"}>Cài đặt</Link>
                </div>
                <div className="font-medium text-[18px]">Tin của bạn</div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <div className="bg-input text-[26px] text-primary-500 rounded-full p-4">
                      <IoMdAdd />
                    </div>
                    <Link
                      to={"/story/create"}
                      className="flex flex-col gap-1 cursor-pointer"
                    >
                      <div className="font-medium">Tạo tin</div>
                      <span className="text-[14px] text-text">
                        Bạn có thể chia sẻ ảnh hoặc viết gì đó
                      </span>
                    </Link>
                  </div>
                  <StoryItem active={false} />
                </div>
              </div>
              <div className="flex flex-col pt-4 gap-2">
                <div className="font-bold">Tất cả tin</div>
                <div className="flex flex-col gap-1">
                  <StoryItem active={true} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                  <StoryItem active={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex-1 flex">
            <div className="flex-1 flex items-center justify-end pr-[40px]">
              {/* <div className="bg-input hover:bg-gray-700 cursor-pointer p-3 rounded-full text-[20px] text-text">
                <FaChevronLeft />
              </div> */}
            </div>
            <div className="flex justify-center  bg red py-4 rounded-lg">
              <div className="w-[425px] bg-dark-bg rounded-lg flex items-center justify-center relative">
                <div className="absolute top-0 left-0 right-0 p-2 bg-[rgba(22,22,24,.04)] z-10">
                  <div className="flex gap-1">
                    <Progress className="bg-gray-400 h-[4px]" color="gray" size="sm" value={70} variant="gradient"/>
                    <Progress className="bg-gray-400 h-[4px]" color="gray" size="sm" value={0} variant="gradient"/>
                    <Progress className="bg-gray-400 h-[4px]" color="gray" size="sm" value={0} variant="gradient"/>
                  </div>
                  <div className="flex">
                    <div className="flex gap-4 py-3">
                      <div className="w-[40px] h-[40px] rounded-full">
                        <img className="w-full h-full rounded-full" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/395470603_854907886084717_4798130770453825800_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ztBQR43cb6YAb7dobb0&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCwf6pdnyf89b3OW9h6lScp41Hmc015ok1ZPnTOopz52Q&oe=66366C2F" alt="" />
                      </div>
                      <Link to={"/user"} className="flex items-center gap-2">
                        <h4 className="font-bold">Ngọc Hân</h4>
                        <div className="flex items-center text-[14px] gap-1">
                          <span>2 giờ</span>
                          <div>
                            <FaEarthAfrica />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <Carousel
                  className="rounded-xl"
                  loop
                  autoplayDelay={2000}
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i
                              ? "w-8 bg-white"
                              : "w-4 bg-white/50"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940054_1280.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                  <video className="h-full w-full rounded-lg" controls autoPlay>
                    <source
                      src="https://docs.material-tailwind.com/demo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Carousel>
                {/* <img src="https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940054_1280.jpg" className="w-full object-cover" alt="" /> */}
                {/* <video className="h-full w-full rounded-lg" controls autoPlay>
                  <source
                    src="https://docs.material-tailwind.com/demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
            <div className="flex-1 flex items-center pl-[40px]">
              {/* <div className="bg-input hover:bg-gray-700 cursor-pointer p-3 rounded-full text-[20px] text-text">
                <FaChevronRight />
              </div> */}
            </div>
          </div>
          <div className=" py-4 flex justify-center items-center">
            <div className="flex items-center">
              <div className="w-[268px] flex items-center border-2 py-2 px-3 rounded-full border-input ">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  placeholder="Trả lời..."
                />
                <div className=" rounded-full hover:text-primary-500 cursor-pointer">
                  <IoSend />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
                  <img src={icon_like} alt="" />
                </div>
                <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
                  <img src={icon_heart} alt="" />
                </div>
                <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
                  <img src={icon_haha} alt="" />
                </div>
                <div className="w-[36px] h-[36px] hover:scale-110 cursor-pointer">
                  <img src={icon_woa} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
