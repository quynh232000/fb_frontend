import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import SidebarLeft from "../components/shared/SidebarLeft";
import SidebarRight from "../components/shared/SidebarRight";


const AppLayout = () => {
  

  return (
    <>
      <Header />
      <div className="flex w-full justify-between h-screen pt-[60px] ">
        <div className="flex w-full justify-between relative">
          <div className=" px-[8px] hidden  lg:block w-sidebar">
            <SidebarLeft />
          </div>
          <section className="w-full sm:w-content overflow-y-scroll scrollbar_custom ">
            <Outlet />
          </section>
          <div className="hidden md:block px-[8px] w-sidebar">
            <SidebarRight />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AppLayout;
