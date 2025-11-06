import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div>
      <div className='w-full bg-[#F53E32] mt-6 mb-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex justify-between items-center'>
            <span className='text-white font-semibold'>Products</span>

            <div className="flex gap-4 hover:cursor-pointer text-white">
              <span>Home</span>
              <span>-</span>
              <span>Products</span>
            </div>

          </div>
        </div>


      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-2">
          <div className="w-[306px] h-[578px] rounded-[5px] bg-[#F7F7F8]  border border-[#E9E9E9] px-6 py-6">
            <div className="flex flex-col gap-3">
              <span className="text-[16px] leading-[25px] tracing-[0.48px] text-[#2B2B2D] font-medium font-poppins">Product Category</span>
              <div className="bg-[#e9e9e9] h-px"/>
            </div>
          </div>
          <div>Right</div>
        </div>
      </div>
    </div>


  )
}

export default page