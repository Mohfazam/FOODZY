import { ChevronDown } from "lucide-react"

export const Navbar = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] shadow-[0_1px_4px_0_#0000001A]">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="w-full flex justify-between">
              <div className="w-[35px] h-[35px] rounded-[5px] border border-[#E9E9E9] flex justify-center items-center">
                <img src="menu.svg" alt="Menu" />
              </div>
              <div className="flex justify-evenly">

                <button className="px-3 py-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracing-[0.5px] text-[#000000]">
                    Home
                  </span>
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracing-[0.5px] text-[#000000]">
                    Category
                  </span>
                    <ChevronDown size={18} className="text-[#000000]"/>
                </button>

                <button className="px-3 py-1 flex items-center gap-1">
                  <span className="font-poppins text-[14px] leading-[21px] tracing-[0.5px] text-[#000000]">
                    Products
                  </span>
                    <ChevronDown size={18} className="text-[#000000]"/>
                </button>

                

              </div>
              <div>Right</div>
            </div>
          </div>
        </div>
      </div>
            <div>Bottom</div>
    </div>
  )
}

