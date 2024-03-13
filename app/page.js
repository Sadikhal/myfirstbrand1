import Image from "next/image";
import Navbar from '@/components/Navbar'
import Faqs from "@/components/sections/Faqs";
import AboutAgency from "@/components/sections/AboutAgency";
import CompanyDetails from "@/components/sections/CompanyDetails";
import IntroBanner from "@/components/sections/IntroBanner";
import CounterUp from "@/components/sections/Slider";
import SliderMotion from "@/components/sections/SliderMotion";
import NavbarComponent from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="mb-12 h-screen w-full">
        <NavbarComponent />
      </div>
     
      <div className="py-2 pt-12">
        <IntroBanner/>
      </div>
      <div className="px-10 ">
        <SliderMotion/>
      </div>
      <div className=" py-18 mt-12 relative  ">
        <CounterUp/>
      </div>
      <div className=" xl:px-8 mt-6 px-11 py-12 ">
        <AboutAgency/>
      </div>
      <div className="px-4 py-5">
        <CompanyDetails/>
      </div>
      <div className=" px-7 py-12   ">
        <Faqs/>
      </div>
      
    </div>
  );
}