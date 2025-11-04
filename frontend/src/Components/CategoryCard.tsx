interface CategoryCardProps{
  text: string;
  image: string;
}

const CategoryCard = ({text, image}: CategoryCardProps) => {
  return (
    <div className="w-full max-w-[482px] h-[200px] sm:h-[250px] lg:h-[300px] rounded-[10px] relative overflow-hidden">
      <img
        src={image}
        alt="Category1"
        className="w-full h-full object-cover absolute inset-0"
        style={{ minWidth: '100%', minHeight: '100%' }}
      />

      
      <div className="absolute inset-0 z-10 flex items-center pl-6 sm:pl-10 lg:pl-[50px] pr-4">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
          <span className="max-w-[180px] sm:max-w-[203px] text-[18px] sm:text-[20px] lg:text-[24px] leading-5 sm:leading-6 text-[#253D4E] font-semibold">
            {text}
          </span>
          <button className="bg-[#F53E32] text-white rounded-sm w-[90px] sm:w-[103px] h-7 sm:h-8 px-4 sm:px-5 py-1.5 sm:py-2 font-medium text-[11px] sm:text-[12px] leading-[15px] hover:cursor-pointer hover:bg-[#f23224] transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard