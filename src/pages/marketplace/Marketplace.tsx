import { GrSearch } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import {
  MdOutlineFeed,
  MdOutlineSell,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCar, FaHeart, FaRegBell } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import ProductItem from "../../components/item/ProductItem";
const Marketplace = () => {
  return (
    <div className="flex h-full">
      <div className="w-sidebar bg-dark-bg h-full">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-2 p-4">
            <div className="font-bold text-[26px]">Marketplace</div>
            <div className="flex items-center gap-2 bg-input rounded-full p-2">
              <GrSearch className="text-[20px] text-text ml-2" />
              <input
                type="text"
                placeholder="Tìm kiếm trên Marketplace"
                className="w-full bg-transparent"
              />
            </div>
          </div>
          <div className="  overflow-y-scroll scrollbar_custom  scrollbar_custom_hidden flex-1 p-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link
                to={"/marketplace"}
                className="flex gap-2 items-center bg-input rounded-lg p-2"
              >
                <div className="text-[20px] bg-primary-500 p-2 rounded-full">
                  <MdOutlineFeed />
                </div>
                <div className="font-bold text-text-1">Lướt xem tất cả</div>
              </Link>
              <Link
                to={"/marketplace?type=notifications"}
                className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
              >
                <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaRegBell />
                </div>
                <div className="font-bold text-text-1">Thông báo</div>
              </Link>
              <Link
                to={"/marketplace?type=you"}
                className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
              >
                <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <MdOutlineShoppingBag />
                </div>
                <div className="font-bold text-text-1">Đang mua</div>
              </Link>
              <Link
                to={"/marketplace?type=selling"}
                className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
              >
                <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <MdOutlineSell />
                </div>
                <div className="font-bold text-text-1">Bán hàng</div>
              </Link>

              <Link
                to={"/marketplace/create"}
                className="flex gap-1 items-center justify-center  rounded-lg p-2 bg-primary-300 text-primary-700 hover:opacity-80"
              >
                <div className="text-[20px] ">
                  <IoAdd />
                </div>
                <div className="font-medium">Tạo bài niêm yết mới</div>
              </Link>
            </div>
            <div className="border-t border-input p-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="font-medium text-[18px] text-text-1">
                  Hạng mục
                </div>
                <Link to={"/groups/joins"} className="text-primary-700">
                  Tp HCM
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  to={"/marketplace/category/vehicles"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaCar />
                  </div>
                  <div className="font-bold text-text-1">Xe cộ</div>
                </Link>
                <Link
                  to={"/marketplace/category/houses"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaHouse />
                  </div>
                  <div className="font-bold text-text-1">Bán nhà</div>
                </Link>
                <Link
                  to={"/marketplace/category/family"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaHeart />
                  </div>
                  <div className="font-bold text-text-1">Gia đình</div>
                </Link>
                <Link
                  to={"/marketplace/category/vehicles"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaCar />
                  </div>
                  <div className="font-bold text-text-1">Xe cộ</div>
                </Link>
                <Link
                  to={"/marketplace/category/houses"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaHouse />
                  </div>
                  <div className="font-bold text-text-1">Bán nhà</div>
                </Link>
                <Link
                  to={"/marketplace/category/family"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaHeart />
                  </div>
                  <div className="font-bold text-text-1">Gia đình</div>
                </Link>
                <Link
                  to={"/marketplace/category/vehicles"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaCar />
                  </div>
                  <div className="font-bold text-text-1">Xe cộ</div>
                </Link>
                <Link
                  to={"/marketplace/category/houses"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaHouse />
                  </div>
                  <div className="font-bold text-text-1">Bán nhà</div>
                </Link>
                <Link
                  to={"/marketplace/category/family"}
                  className="flex gap-2 items-center  rounded-lg p-2 hover:bg-input"
                >
                  <div className="text-[20px] bg-gray-800  p-2 rounded-full">
                  <FaHeart />
                  </div>
                  <div className="font-bold text-text-1">Gia đình</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-between  flex-1  overflow-y-scroll scrollbar_custom ">
        
        <div className="flex w-full justify-center relative flex-1 py-4 gap-4">
          <div className="flex w-user gap-4">
            <div className="flex w-user  flex-1">
              <section className="flex-1 ">
                <div className="flex flex-col gap-4 flex-1">
                <div className="text-text font-bold py-2">Lựa chọn hôm nay</div>
                  <div className="grid grid-cols-5 gap-4">
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
