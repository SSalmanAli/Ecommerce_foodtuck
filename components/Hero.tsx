import { Button } from "@/components/ui/button"


export default function Hero () {
    return(
        <div>
          
            <div className=" w-full h-screen flex ">
<div className=" ml- mt-10 w-[25.28px] ml-20  h-[492px]">
  <div className="bg-white w-[2px] rounded h-[158px] m-[50%] "></div>
  <br />
  <img className="ml-1 mx-4"  src="/images/socials.png" alt="socials" />
  <br />
  <div className="bg-white w-[2px] rounded h-[158px] m-[50%]"></div>
</div>

<div className=" w-[472px] ml-16 mt-32 h-[356px]">
  <img className="ml-4" src="/images/text.png" alt="text" />
  <p className="font-sans text-white text-5xl font-medium">
  <span className="text-amber-500">Th</span>e Art of speed food Quality
</p>
<p className="text-white my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko.</p>

<Button variant="outline">See Menu</Button>
</div>

<div className=" w-[877.8px] ml-32 h-[670px]">
  <img src="/images/image.png" alt="banner" />
</div>

</div>

        </div>
    )
}