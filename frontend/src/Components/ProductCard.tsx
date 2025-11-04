

export const ProductCard = () => {
    return (
        <div className="w-[298px] h-[465px] rounded-2xl border border-[#ECECEC]">
            <div className="w-full h-full flex flex-col">
                <div className="w-[296px] h-[271px] flex items-center justify-center">
                    <img src="/Product1.svg" alt="Product Image" className="object-cover" />
                </div>

                <div className="flex flex-col gap-2 px-4">
                    
                    <span className="text-[12px] leading-6 text-[#ADADAD] ">Snack</span>
                    
                    <span className="text-[15px] w-[268px] h-[39px] leading-6 tracing-[0.5px] text-[#2B2B2D] font-medium font-poppins">Fresh organic villa farm lomon 500gm pack</span>
                    <div>Ratings</div>
                    <div>Brands</div>
                    <div>Actions</div>
                </div>
            </div>
        </div>
    )
}
