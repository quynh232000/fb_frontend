
import { Link } from "react-router-dom"
import img from "../assets/base/bg-verify_email.jpg"
const VerifyEmailNotification = () => {
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
            <span className="text-primary-500 font-bold text-[18px] px-8 text-center">Vui lòng xác thực Email để bắt đầu nào!</span>
            <Link to={"/resend_verify_email"} className="bg-primary-500 text-white font-bold hover:opacity-80 px-4 py-3 rounded-lg">Gửi lại xác thực email</Link>
            <Link to={"/signin"} className=" text-primary-700 underline">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailNotification