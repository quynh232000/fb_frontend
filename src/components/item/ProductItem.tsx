
const ProductItem = () => {
  return (
    <div className="flex flex-col gap-2">
        <div className="rounded-lg">
            <img className="w-full h-full rounded-lg object-cover" src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/440871820_3789777258012308_3059238294291785180_n.jpg?stp=c0.29.261.261a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nx0rtRMpYEsQ7kNvgHTZ7ev&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCtVVo3V_ZPqzDmGjpo_i9NjOPWJ_9eSHzGsba2Kvp-OQ&oe=66390B38" alt="" />
        </div>
        <div className="flex flex-col">
            <div className="font-bold">24.700.000đ</div>
            <div className="text-text-1 text-[14px] font-medium">
                Xe máy SH 2022
            </div>
            <div className="text-text text-[12px]">HỘI MUA XE MÁY CŨ GIÁ RẺ</div>
        </div>
    </div>
  )
}

export default ProductItem