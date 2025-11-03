import { ChevronDown, Phone, Search, UserRound  } from "lucide-react"

export const Navbar = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] shadow-[0_1px_4px_0_#0000001A]">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="w-full flex justify-between items-center">
              <div className="w-[35px] h-[35px] rounded-[5px] border border-[#E9E9E9] flex justify-center items-center">
                <img src="menu.svg" alt="Menu" />
              </div>

              <div className="flex justify-evenly">
                <button className="px-3 py-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                    Home
                  </span>
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                    Category
                  </span>
                  <ChevronDown size={18} className="text-[#000000]" />
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                    Products
                  </span>
                  <ChevronDown size={18} className="text-[#000000]" />
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                    Pages
                  </span>
                  <ChevronDown size={18} className="text-[#000000]" />
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                    Blogs
                  </span>
                  <ChevronDown size={18} className="text-[#000000]" />
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracking-[0.5px] text-[#000000]">
                    Elements
                  </span>
                  <ChevronDown size={18} className="text-[#000000]" />
                </button>

              </div>

              <div className="flex gap-3">
                <Phone className="text-[#000000]" />
                <span className="text-[#000000] font-normal text-[15px] leading-[22.5px] text-center tracing-[0.48px]">+123 ( 456 ) ( 7890 )</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between">
          <div>
            <img src="main_logo.png" alt="Main Logo" className="w-48 h-[82px] px-2" />
          </div>
          <div className="flex justify-center items-center">
            <input type="text" className="border border-[#64B496] rounded-tl-[5px] rounded-bl-[5px] w-[408px] h-[45px] text-[#FFFFFF]" />

            <div className="relative">
              <select
                className="w-[130px] h-[45px] -ml-2 border border-[#64B496] bg-[#FFFFFF] py-2 pr-8 pl-3 text-[#212529] text-[13px] leading-5 appearance-none"
              >
                <option value="">All Categories</option>
                <option value="products">Vegetables</option>
                <option value="categories">Cold Drinks</option>
                <option value="blogs">Snacks</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#212529] pointer-events-none"
              />
            </div>

            <button className="w-[45px] h-[45px] bg-[#F53E32] flex justify-center items-center"> <Search className="text-white" size={15} /></button>
          </div>
          <div>
            <div>
              <UserRound />
              <span>Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

