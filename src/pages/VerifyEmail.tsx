import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/base/bg-verify_email.jpg";
import { useEffect, useState } from "react";
import { verifyEmail } from "../services/UserService";
import { Spinner } from "@material-tailwind/react";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [verify, setVerify] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (path.split("/").length == 3 && path.split("/")[2]) {
      const token: string = path.split("/")[2];
      verifyEmail({ token }).then((res) => {
        if(res && res.status){
          setIsActive(true)
          setTimeout(() =>{
            navigate("/signin")
          },3000)
        }else{
          setIsActive(false)
        }
        setVerify(res.message);
        setLoading(false);
      });
    } else {
      setVerify("Đường dẫn không hợp về!");
    }
  },[path]);

  return (
    <div className="flex w-full items-center flex-wrap justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  h-full ">
      <div className="w-1/2 flex flex-col gap-4 ">
        <Link to={"/"} className="text-xl font-bold md:text-5xl text-primary-500">
          Quinsocial
        </Link>
        <span className="md:text-xl pr-20  mb-20">
          Quinsocial giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
          của bạn.
        </span>
      </div>
      <div className="flex-1 bg-white rounded-lg  shadow dark:border md:mt-0 h-[80vh] sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  flex flex-col h-full">
          <div className="rounded-lg overflow-hidden">
            <img src={img} alt="" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <span className={(isActive?"text-primary-500 ":" text-red ")+"  font-bold text-[18px] px-8 text-center"}>
              {loading?<Spinner className="h-[36px] w-[36px]" color="blue" />: verify}
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
