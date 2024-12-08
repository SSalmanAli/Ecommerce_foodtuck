import { Button } from "@/components/ui/button"
export default function Section6 () {
    return(
        <div>
            
    {/* Upper section */}
    <div className="w-full  flex mt-20 justify-center">
    <div className="w-[1320px] h-[489px]  ">

<div className="h-[160px] w-full flex justify-center ">

<div className="mt-8">
  <img className="pl-24" src="/images/Chefs.png" alt="chefs" />
  <p className="font-sans font-semibold text-white text-4xl mt-4 ">
  <span className="text-amber-500">Me</span>et Our Chef</p>
  </div>
</div>

{/* Lower section */}
<div className="h-[329px] w-full flex gap-[33px] ">

  <div className="h-[329px] w-[306px]"><img src="/images/cc.png" alt="cheif chef 1" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/cc1.png" alt="cheif chef 2" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/cc2.png" alt="cheif chef 1" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/cc3.png" alt="cheif chef 1" /></div>
</div>

    </div>
    </div>
    <div className="flex justify-center mt-24">
    <Button className="" variant="default">See More</Button>
    </div>

        </div>
    )
}