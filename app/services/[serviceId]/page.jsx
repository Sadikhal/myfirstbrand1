import Navbar from "@/components/Navbar";
import Banner from "@/components/sections/Banner";
import NavbarRoutes from "@/components/sections/NavbarRoutes";
import { servicesDetails } from "@/lib";
// import {contactForm} from "@/components/sections/contactForm";
import ContactForm from "@/components/sections/ContactForm";
import SimpleSlider from "@/components/sections/Carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/sections/ServiceCard";
import Footer from "@/components/sections/Footer";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/sections/Hero";

// import SimpleSlider from "@/components/sections/Carousel";


const ServiceIdPage = async ({ params }) => {
    
    const { serviceId } = params;

  
    const service = serviceId ? servicesDetails.find(service => service.id === serviceId) : null;

   

    return (
        <div className="flex flex-col gap-12 ">
            <Banner title={service.title} page='services' active={true} servicePage={service.title}/>
        <div className="lg:mt-20 mt-12 ">
          <div className="flex lg:flex-row  gap-11 flex-col lg:gap-9 xl:gap-14 px-8 lg:mt-1 mt-1 sm:mt-4  ">
                <div className=" flex flex-col text-left gap-10 xl:gap-18 lg:flex-[0.61]">    
                    <h2 className=" font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase 
                    
                     ">
                        {service.title}
                        <span>.</span>
                        </h2>
                    <div className="font-rubik text-base font-normal leading-[2.125em]">We at Digimark Agency have made a number of corporate films for the biggest companies in the world for myriad of reasons. For some it’s about branding whilst others use it for internal communication yet whatever the reason they all have one main criteria, it should be a great, unique video. Well we are here to tell you how to make a great quality video. This article covers the basics from a non-technical point of view; we’ll bring out more articles on the technical requirements later from cinematography to editing. So let’s get started.</div>             
                </div>
               
                <div className="flex flex-col gap-15 lg:flex-[0.7] lg:ml-10 xl:ml-12 lg:mt-0 mt-7 pt-4 lg:pt-0">
                <div className="xl:w-8/10 xl:pl-5 ">
                    <h2 className=" font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] lg:text-[70px] lg:leading-[0.9em] font-normal lg:font-[400px] uppercase  
                     ">
                        get in touch<span>.</span>
                        </h2>
                    
                    <div>
                    <ContactForm />
                    </div>
                    </div>
                </div>
            </div> 

         </div> 
        <div className="  py-5 h-4">
        
         </div> 
        <div className="px-8 flex flex-col gap-14">
        <h2 className=" font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase 
                    
                    ">
                    {service.title}
                    <span>.</span>
                </h2>
         <div className="flex flex-col lg:flex-row  gap-14">
            <div className="flex flex-col lg:flex-1 gap-11">
                
                <div className="">
                  
                  <img src="/dm7.jpg" alt="service" className="object-cover  border rounded-md w-full h-auto " />
                </div>
                <div className="font-rubik text-base font-normal leading-[2.125em] lg:px-4 px-3">
                    {service.desc}
                </div>

            </div>
            <div className="flex flex-col flex-[.42] ">
                <ServiceCard service={service} title={service.title}/>

            </div>
         </div>
         </div>
         <Hero /> 
        </div> 
    );
};

export default ServiceIdPage;