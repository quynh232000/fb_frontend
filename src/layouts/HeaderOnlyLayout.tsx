import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const HeaderOnlyLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full justify-between h-screen pt-[60px] ">
            <section className="flex-1 h-full  relative border-t border-input">
              <Outlet />
            </section>
        {/* <div className="flex w-full justify-center  flex-1 border-t border-input">
        </div> */}
      </div>
    </>
  );
};

export default HeaderOnlyLayout;
