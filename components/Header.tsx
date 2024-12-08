import { Input } from "@/components/ui/input"


export default function Header () {
    return (
        <div>
              
      <div className="flex justify-center">
      <div className="bg-black w-[1320px] h-[87px]">
        <div className=" h-[32px] pt-6 ml-[600px] w-[109px]">
          <img className="mt-" src="/images/Foodtuck.png" alt="logo" />
        </div>
        <div className=" flex justify-between  h-[54px] w-full">
          <ul className="flex gap-6 pt-6 text-white">
            <li>Home</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Pages</li>
            <li><select className="bg-black"><option value="about">About</option></select></li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>

          <div className=" mt-6 h-[30px] flex w-[236px]">
            <Input className="text-white" placeholder="Search..." />
            <img 
            src="/images/Vector.png"  
            alt="Search"
            className="h-5 w-5 absolute right-[140px] pt-2 text-white"  
          />
            <img className="h-[24px]  w-[24px]" src="/images/Handbag.png" alt="cart" />
          </div>
        </div>
      </div>
      </div>

        </div>
    )
}