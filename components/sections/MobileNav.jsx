import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import { textVariant2 } from "@/lib/Motion";
// import { motion } from "framer-motion";
import Link from "next/link";
import { Services } from "./Service";
import { MobileServices } from "./MobileServices";

const Mobilenav = ({ routes }) => {
  return (
    <div>
      <Sheet className="w-full" >
        <SheetTrigger>
          <Menu className="text-orange-600"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start justify-center" side = "left">
          <div className="flex flex-col gap-1">
            {routes.map((route) => (
              <div
                key={route.href}              
              >
                <Link href={route.href} passHref>
                  <div className="text-left font-teko text-[20px] leading-[24px] text-foreground font-[500] uppercase tracking-[1px] underline ">
                    {/* {route.label} */}
                    {route.label === 'Services' ? <MobileServices /> : route.label}
                    
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilenav;
