import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";
import HeaderUser from "../components/shared/user/HeaderUser";
import { getUserInfo } from "../services/UserService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/reducers/appReducer";

const UserLayout = () => {


  const location = useLocation();
  const arrayPath = location.pathname.split("/");
  const navigate = useNavigate()
  const user_uuid = arrayPath[2]
  const dispatch = useDispatch();
  useEffect(()=>{
    getUserInfo(user_uuid).then(res=>{
      if(res.status){
        dispatch(setCurrentUser(res.data))
      }else{
        navigate(res.links)
      }
    })

  },[user_uuid])
  return (
    <>
      <Header />
      <div className="flex flex-col w-full justify-between h-screen pt-[60px] ">
        <div>
          <HeaderUser />
        </div>
        <div className="flex w-full justify-center relative flex-1 py-4">
          <div className="flex w-user gap-4">
            <section className="flex-1 overflow-y-scroll scrollbar_custom min-h-[80vh]">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
