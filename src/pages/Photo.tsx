import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SidebarPhoto from "../components/shared/SidebarPhoto";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getPostDetailByPostMediaMedia,
  getPostMedia,
} from "../services/PostService";
import { PostMedumModel, PostModel } from "../types/post";
import { Spinner } from "@material-tailwind/react";

type TypeFile = {
  mediaUuid: string;
  file: string;
  index: number;
  type: string;
};

type FileState = {
  [typeFile: string]: TypeFile[];
};
const Photo = () => {
  const [isLoading, setIsloading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const path = location.pathname;
  const postMediaId = path.split("/")[2];
  const typeFile = path.split("/")[1];

  const paramIndex = parseInt(searchParams.get("i") ?? "1", 10);
  const [indexImage, setIndexImage] = useState(paramIndex - 1);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  useEffect(() => {
    setIndexImage(paramIndex - 1);
  }, [paramIndex]);
  const [postMedia, setPostMedia] = useState<FileState>({
    photo: [],
    video: [],
  });
  const [listMedia, setListMedia] = useState<TypeFile[]>([]);
  const [post, setPost] = useState<PostModel | null>();
  useEffect(() => {
    getPostMedia(postMediaId).then((res) => {
      if (res.status) {
        const data = res.data;
        const fileState: FileState = { photo: [], video: [] };
        let listMedia_: TypeFile[] = [];
        data.map((media: PostMedumModel) => {
          const files = JSON.parse(media.file);
          files.map((file: string, index: number) => {
            const item = {
              mediaUuid: media.uuid,
              file: file,
              index: index,
              type: media.file_type,
            };
            listMedia_ = [...listMedia_, item];
            if (media.file_type == "image") {
              fileState.photo.push(item);
            } else {
              fileState.video.push(item);
            }
          });
        });
        setListMedia(listMedia_);
        setPostMedia(fileState);
        setIsloading(false);
      }
    });
    getPostDetailByPostMediaMedia(postMediaId).then((res) => {
      res.status && setPost(res.data);
    });
  }, [postMediaId]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10">
      <div className="flex h-full flex-col md:flex-row ">
        <div className=" relative flex flex-0 flex-1 justify-center h-80 md:h-full ">
          <div
            onClick={handleBack}
            className="bg-black h-fit p-2  text-text-1  hover:bg-input cursor-pointer text-[26px] rounded-full absolute left-[10px] top-[10px]"
          >
            <IoMdClose />
          </div>
          <div className="flex p-2 items-center ">
            <Link
              to={
                1 < paramIndex
                  ? `/${
                      listMedia[paramIndex - 2]?.type == "image"
                        ? "photo"
                        : "video"
                    }/${listMedia[paramIndex - 2]?.mediaUuid}?i=` +
                    (paramIndex - 1)
                  : "?i=1"
              }
              className="bg-[rgba(22,22,24,1)] text-text hover:tex-text-1 hover:bg-input cursor-pointer p-4 rounded-full text-[22px]"
            >
              <FaAngleLeft />
            </Link>
          </div>
          <div className=" flex-1 justify-center flex">
            <div className="  flex-1 flex justify-center items-end">
              {isLoading ? (
                <div className="h-full flex items-center justify-center"><Spinner className="h-12 w-12" /></div>
              ) : typeFile == "photo" ? (
                <img
                  className="w-full h-full object-contain"
                  // src={paramIndex ? postMedia[indexImage] : ""}
                  src={postMedia[typeFile][indexImage]?.file}
                  alt="Image"
                />
              ) : (
                <video className="h-full w-full rounded-0" controls autoPlay>
                  <source
                    src={postMedia[typeFile][indexImage]?.file}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
          <div className="flex items-center p-2">
            <Link
              to={
                listMedia.length > paramIndex
                  ? `/${
                      listMedia[paramIndex]?.type == "image" ? "photo" : "video"
                    }/${listMedia[paramIndex]?.mediaUuid}?i=` +
                    (paramIndex + 1)
                  : `?i=` + listMedia?.length
              }
              className="bg-[rgba(22,22,24,1)] text-text hover:tex-text-1 hover:bg-input cursor-pointer p-4 rounded-full text-[22px]"
            >
              <FaAngleRight />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-sidebar  bg-dark-bg border-t border-input relative ">
          {/* <SidebarPhoto  postMediaId={postMediaId}/> */}
          {post && <SidebarPhoto post={post} />}
        </div>
      </div>
    </div>
  );
};

export default Photo;
