import Faqs from "@/components/sections/Faqs";
import AboutAgency from "@/components/sections/AboutAgency";
import CompanyDetails from "@/components/sections/CompanyDetails";
import IntroBanner from "@/components/sections/IntroBanner";
import CounterUp from "@/components/sections/Slider";
import SliderMotion from "@/components/sections/SliderMotion";
import NavbarComponent from "@/components/sections/Navbar";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import ClientOnly from "@/components/sections/ClientOnly";

export default function Home() {
  return (
  
    <div className="flex flex-col gap-12 w-full">
      <div className="mb-12 h-screen w-full">
        <NavbarComponent />
      </div>
      <div className="pt-4 md:pt-8 h-full">
        <IntroBanner />
      </div>
      {/* <div className="px-10 pt-5">
        <SliderMotion />
      </div> */}

      <div className="py-18 mt-12 relative">
        <CounterUp />
      </div>
      <ClientOnly>
        <div className="hidden xl:block mt-8">
          <TestimonialSlider number='2'/>
        </div>
        <div className="block xl:hidden mt-8">
          <TestimonialSlider number='1'/>
        </div>
      </ClientOnly> 
      <div className="xl:px-8 px-5 md:px-11 py-4">
        <AboutAgency />
      </div>
      <div className="px-4 py-5 mt-10">
        <CompanyDetails />
      </div>
      <div className="px-7 py-5">
        <Faqs />
      </div>
    </div>

  );
}
