import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import HeaderUser from "../components/shared/user/HeaderUser";

const UserLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full justify-between h-screen pt-[60px] ">
        <div>
          <HeaderUser />
        </div>
        <div className="flex w-full justify-center relative flex-1 py-4">
          <div className="flex w-user gap-4">
            <section className="flex-1 overflow-y-scroll scrollbar_custom ">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
