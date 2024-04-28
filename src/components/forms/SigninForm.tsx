
import { Link } from "react-router-dom";
// import { RootState } from "../../redux/reducers";
// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../../redux/reducers/testReducer";

const SigninForm = () => {
  // const someValue = useSelector(
  //   (state: RootState) => state.someReducer.someValue
  // );
  // const dispatch = useDispatch();
//   <div>
//   <p>Some Value: {someValue}</p>
//   <button onClick={() => dispatch(increment())}>
//     Dispatch Action
//   </button>
// </div>
  return (
    <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-1/2 flex flex-col gap-4 ">
        <h3 className="text-xl font-bold md:text-5xl text-primary-500">
          Quinsocial
        </h3>
        <span className="md:text-xl pr-20  mb-20">
          Quinsocial giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
          của bạn.
        </span>
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Đăng nhập để bắt đầu
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-end">
              {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}
              <a
                href="#"
                className="text-sm font-medium text-primary-500 hover:underline dark:text-primary-500"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-500 hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Đăng nhập
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Bạn chưa có tài khoản?
              <Link to={"/signup"}>
                <button className=" font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
                  Đăng kí
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
