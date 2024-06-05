import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/UserService";
import { UserRegister } from "../../types/user";
import { Spinner } from "@material-tailwind/react";

const SignunForm = () => {
  const [formData, setFormData] = useState<UserRegister>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    birthday: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMess, setErrorMess] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMess("")
    setIsLoading(true)
    e.preventDefault();
    register(formData).then(res=>{
      if(!res.status){
        const arr = Object.values(res.data);
        setErrorMess(arr[0]??res.message)
      }else{
        navigate("/verify_email_notification")
      } 
      setIsLoading(false)
    })
  };

  return (
    <div className="flex w-full items-center flex-wrap justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-1/2 flex flex-col gap-4 ">
        <h3 className="text-xl font-bold md:text-5xl text-primary-500">
          Quinsocial
        </h3>
        <span className="md:text-xl pr-20  mb-20">
          Quinsocial giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
          của bạn.
        </span>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Đăng kí
          </h1>
          <span>Nhanh chóng dễ dàng.</span>
          <form
            className="space-y-4 md:space-y-6 border-t-[1px] pt-4 border-border-1"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="Họ"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Họ
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nguyễn"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Họ"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="An"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    id="email"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                   focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                  />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password_confirmation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleInputChange}
                id="password_confirmation"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  id="birthday"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Giới tính
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">--Chọn--</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>

            <div className="text-red">
              {errorMess && errorMess}
            </div>

            <div className="flex flex-col gap-4">
              <small>
                Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
                liên hệ của bạn lên Quínocial. Tìm hiểu thêm.
              </small>
              <small>
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính
                sách quyền riêng tư và Chính sách cookie của chúng tôi. Bạn có
                thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ
                lúc nào.
              </small>
            </div>
            <button
              type="submit"
              className={(isLoading ?"text-white bg-gray-500 hover:bg-gray-500 cursor-not-allowed ":" text-white bg-primary-500 hover:bg-primary-hover ")+" w-full text-[16px] flex items-end justify-center   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}
            >
              {isLoading ? <Spinner className="h-[20px] w-[20px]" color="blue" /> :'Đăng kí'}
             
              
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Bạn đã có tài khoản?
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
  );
};

export default SignunForm;
