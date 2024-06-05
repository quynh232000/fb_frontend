import { Link, useNavigate } from "react-router-dom";
import img from "../assets/base/bg-verify_email.jpg";
import { Spinner } from "@material-tailwind/react";
import { ChangeEvent, useState } from "react";
import { resendEmail } from "../services/UserService";
const ResendEmailVerify = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resendEmail({ email }).then((res) => {
      console.log(res);

      if (!res.status) {
        const arr = Object.values(res.data);
        setErrorMess(arr[0] ?? res.message);
      } else {
        navigate(res.links.redirect);
      }
      setIsLoading(false);
    });
  };

  return (
    <div className="flex w-full items-center flex-wrap justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  h-full ">
      <div className="w-1/2 flex flex-col gap-4 ">
        <Link
          to={"/"}
          className="text-xl font-bold md:text-5xl text-primary-500"
        >
          Quinsocial
        </Link>
        <span className="md:text-xl pr-20  mb-20">
          Quinsocial giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
          của bạn.
        </span>
      </div>
      <div className="flex-1 bg-white rounded-lg  shadow dark:border md:mt-0 h-[80vh] sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  flex flex-col h-full ">
          <div className="rounded-lg overflow-hidden">
            <img src={img} alt="" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8 ">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 w-full"
              action="#"
            >
              <div className="font-bold text-[20px] text-primary-500 text-center">
                Email của bạn!
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              <div className="text-red">{errorMess && errorMess}</div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className={
                    (isLoading
                      ? "text-white bg-gray-500 hover:bg-gray-500 cursor-not-allowed "
                      : " text-white bg-primary-500 hover:bg-primary-hover ") +
                    " text-[16px] flex items-end justify-center   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  }
                >
                  {isLoading ? (
                    <Spinner className="h-[20px] w-[20px]" color="blue" />
                  ) : (
                    "Xác nhận email"
                  )}
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Đăng nhập lại!
                <Link to={"/signin"}>
                  <button className=" font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
                    Đăng nhập
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResendEmailVerify;
