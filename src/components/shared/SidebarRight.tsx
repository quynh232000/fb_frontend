import { Link } from "react-router-dom";

const SidebarRight = () => {
  return (
    <div className="flex flex-col h-full overflow-y-scroll pt-4  scrollbar_custom_hidden">
      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300  pb-3 font-semibold">
          Được tài trợ
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 items-center w-100 hover:bg-input p-2 rounded-lg cursor-pointer relative">
          <div className="w-30  object-cover rounded-lg">
            <img
              className=" rounded-lg w-100"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t45.1600-4/436727601_120209346103210416_720014209469974084_n.jpg?stp=dst-jpg_p476x249&_nc_cat=1&ccb=1-7&_nc_sid=567a6d&_nc_ohc=jos7jLWVXf8Ab4Lh-xG&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfANyB3ERDKUt56_kU9XEzmAeA6PKvSWhcE77Iy-9RJo7A&oe=6632D16C"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1">
            <span>Nhận 100.000 VND vòa tài khoản khi mở thành công</span>
            <Link to={"#"}>
              <span className="text-[14px] text-gray-400">
                forms.uob.com.vn
              </span>
            </Link>
          </div>
          
        </div>
        <div className="flex gap-4 items-center w-100 hover:bg-input p-2 rounded-lg cursor-pointer">
          <div className="w-30 object-cover rounded-lg">
            <img
              className=" rounded-lg w-100"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t45.1600-4/421593585_120204771195030641_6653615791545580431_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z6XT4Z6iUuAAb51d9RV&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDcQf765kce3U-72BN4vEdGHrXqb707xybXppMTjUMdPw&oe=6632AEE6"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1">
            <span>📽️ Enhance Footage in Seconds</span>
            <Link to={"#"}>
              <span className="text-[14px] text-gray-400">topazlabs.com</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300 border-t border-gray-700 py-3 font-semibold flex items-center justify-between">
          <span>Trang và trang cá nhân của bạn</span>
          <div
            title="Tùy chọn"
            className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
          >
            <i className="fa-solid fa-ellipsis text-[16px]"></i>
          </div>
        </div>
      </div>

      <div>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div>
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">
            Lập trình PHP - Laravel Việt Nam
          </div>
        </Link>

        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 cursor-pointer text-gray-400 font-medium"
        >
          <div className="w-[36px] flex justify-end ">
            <i className="fa-solid fa-repeat text-[16px]"></i>
          </div>
          <div className="size-[14px] flex-1 leading-[16px] ">
            Chuyển sang Trang
          </div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 cursor-pointer text-gray-400 font-medium "
        >
          <div className="w-[36px] flex justify-end">
            <i className="fa-solid fa-volume-high text-[16px]"></i>
          </div>
          <div className="size-[14px] flex-1 leading-[16px] ">
            Tạo bài quảng cáo
          </div>
        </Link>
      </div>

      <div className="px-[8px] mt-2">
        <div className="text-lg text-gray-300 border-t border-gray-700 py-3 font-semibold flex justify-between">
          <span>Người liên hệ</span>
          <div className="flex gap-4">
            <div
              title="Tìm kiếm theo tên hoặc nhóm"
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
            >
              <i className="fa-solid fa-magnifying-glass text-[16px]"></i>
            </div>
            <div
              title="Tùy chọn"
              className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-input"
            >
              <i className="fa-solid fa-ellipsis text-[16px]"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full border-2 border-primary-500"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span>
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">JoJo Bin</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-1/148864919_257667505870889_5549726473974872721_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGpCYBHkhagAb5na4iq&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBWJVs1j7riRUcTY0NpEekJXOegsJcPbk8F3oBdhS41ow&oe=6654444C')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">Nguyễn Năng</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/362896395_3539529232935241_3424559167839360772_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zYTUgiIvl-oAb6KIaUK&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCOBPDm8pgKbNuuhz-4j9O9MsYPveQoecOm0UIPJGroiQ&oe=66329C74')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">Huyền Trang</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/438260242_3720567394893048_2224955754399678893_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wMRoT9QVq0Ab4D-l45&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBlghNSE7k8rv8iYOdhiF9dvSivKtyKVa-OSOwm-Dg57w&oe=6632CB82')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">Thu Phương</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full border-2 border-primary-500"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/279841216_1091212664941555_4727043539452060717_n.jpg?stp=c0.12.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dJrrCLZDRQkAb4_RiX-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-M3YrI_fO7yOv6xzhAbikBXmzgZdF21-7kaJf0NFdvw&oe=66328E8B')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span>
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">JoJo Bin</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-1/148864919_257667505870889_5549726473974872721_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGpCYBHkhagAb5na4iq&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBWJVs1j7riRUcTY0NpEekJXOegsJcPbk8F3oBdhS41ow&oe=6654444C')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">Nguyễn Năng</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/362896395_3539529232935241_3424559167839360772_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zYTUgiIvl-oAb6KIaUK&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCOBPDm8pgKbNuuhz-4j9O9MsYPveQoecOm0UIPJGroiQ&oe=66329C74')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">Huyền Trang</div>
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center hover:bg-input rounded-lg px-2 py-2 gap-3 font-bold cursor-pointer "
        >
          <div className="relative">
            <i
              data-visualcompletion="css-img"
              className="rounded-full"
              style={{
                backgroundImage:
                  "url('https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/438260242_3720567394893048_2224955754399678893_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wMRoT9QVq0Ab4D-l45&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBlghNSE7k8rv8iYOdhiF9dvSivKtyKVa-OSOwm-Dg57w&oe=6632CB82')",
                backgroundPosition: "0 -0px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            {/* <span className="absolute border-[6px] border-green-500 rounded-full bottom-[8px] right-[-2px]"></span> */}
          </div>
          <div className="size-[16px] flex-1 leading-[16px]">Thu Phương</div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarRight;
