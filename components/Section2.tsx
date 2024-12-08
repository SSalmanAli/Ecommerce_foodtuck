export default function Section2 () {
    return(
        <div>
                {/* Section 2 */}
    {/* Upper section */}
    <div className="w-full  flex mt-20 justify-center">
    <div className="w-[1320px] h-[489px]  ">

<div className="h-[160px] w-full flex justify-center ">

<div className="mt-8">
  <img className="pl-10" src="/images/food-cat.png" alt="category" />
  <p className="font-sans font-semibold text-white text-4xl mt-4 ">
  <span className="text-amber-500">Ch</span>oose Food Item</p>
  </div>
</div>

{/* Lower section */}
<div className="h-[329px] w-full flex gap-[33px] ">

<div className="h-[329px] w-[306px]  relative">
  <img src="/images/1st.png" alt="1st" className="w-full h-full object-cover" />
  
  {/* Save 30% Badge */}
  <div className="absolute top-32 left-20 font-semibold hover:text-white hover:bg-amber-500 bg-white text-amber-500 rounded-[5px] border-none pl-[23px] pt-[7px] w-[125px] h-[40px]">
    Save 30%
  </div>
  
  {/* Fast Food Dish Label */}
  <div className="absolute top-44 hover:bg-white hover:text-amber-500 bg-amber-500 font-semibold text-white w-[206px] h-[46px] pl-[47px] pt-[10px]  rounded-[5px] border-none">
    Fast Food Dish
  </div>
</div>
  <div className="h-[329px] w-[306px] "><img src="/images/2nd.png" alt="2nd" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/3rd.png" alt="3rd" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/4th.png" alt="4th" /></div>
</div>

    </div>
    </div>

        </div>
    )
} 