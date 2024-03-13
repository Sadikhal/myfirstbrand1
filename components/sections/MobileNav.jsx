import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, Menu } from "lucide-react";
import Link from "next/link";
import { Services } from "./Service";
import { MobileServices } from "./MobileServices";
import { Separator } from "../ui/separator";
import Footer from "./Footer";

const Mobilenav = ({ routes }) => {
  return (
    <div>
      <Sheet className="w-full bg-black" >
        <SheetTrigger>
          <AlignJustify size={40} className="text-[#FC8D00] text-[40px]"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start justify-center gap-12 " side = "left">
          <div className="flex flex-col gap-8 px-3 mt- py-">
            {routes.map((route) => (
              <div             
              >
                <Link href={route?.href} 
                key={route.label}
              shallow
                >
                  <div className="text-left font-teko text-[20px] leading-[24px] text-foreground font-[500] uppercase tracking-[1px] hover:text-[#FC8D00] ">
                    {/* {route.label} */}
                    {route.label === 'Services' ? <MobileServices /> : route.label}
                    
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="px-3 w-full">
          <Separator className='bg-slate-300 w-full '/>
          <div className="flex flex-col">
            <Footer/>

          </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilenav;
