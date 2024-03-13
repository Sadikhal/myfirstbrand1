import Navbar from "@/components/Navbar";
import Banner from "@/components/sections/Banner";
import { servicesDetails } from "@/lib";
import ContactForm from "@/components/sections/ContactForm";
import ServiceCard from "@/components/sections/ServiceCard";
import Hero from "@/components/sections/Hero";



const ServiceIdPage = async ({ params }) => {
    
    const { serviceId } = params;

  
    // const service = serviceId ? servicesDetails.find(service => service.id === serviceId) : null;
    const service = serviceId ? { ...servicesDetails.find(service => service.id === serviceId), key: 'service.id' } : null;


   

    return (
        <div className="flex flex-col gap-12 ">
            <Banner title={service.title} key={service.title} page='services' active={true} servicePage={service.title}/>
        <div className="lg:mt-20 mt-12 ">
          <div className="flex lg:flex-row  gap-11 flex-col lg:gap-9 xl:gap-14 px-8 lg:mt-1 mt-1 sm:mt-4  ">
                <div className=" flex flex-col text-left gap-10 xl:gap-18 lg:flex-[0.61]">    
                    <h2 className=" font-teko  text-[42px] leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase relative hover:text-[#FC8D00]
                    
                     ">
                        {service.title} <span className="absolute bottom-0 ml-1 text-[#FC8D00]"> .</span>
                        </h2>
                    <div className="font-rubik text-base font-normal leading-[2.125em]">
Mybrandfirst is a premier digital marketing agency committed to propelling brands into the digital spotlight. Our team of experts guides clients through the intricacies of digital marketing, offering personalized approaches to each project. By leveraging cutting-edge technologies and proven methodologies, we deliver comprehensive strategies aligned with business objectives. What sets us apart is our unwavering commitment to excellence and innovation. We continuously monitor industry trends, experiment with new technologies, and refine our strategies for maximum effectiveness. Partnering with Mybrandfirst ensures dedication to your success. Embark on a digital journey with us today to unlock the full potential of your brand online.</div>             
                </div>
               
                <div className="flex flex-col gap-15 lg:flex-[0.7] lg:ml-10 xl:ml-12 lg:mt-0 mt-7 pt-4 lg:pt-0">
                <div className="xl:w-8/10 xl:pl-5 ">
                    <h2 className=" font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] lg:text-[70px] lg:leading-[0.9em] font-normal lg:font-[400px] uppercase  
                     ">
                        get in touch <span className="text-[#FC8D00]">.</span>
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
        <h2 className="  font-teko  text-[42px] leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase hover:text-[#FC8D00]  
                    
                    ">
                    {service.title} <span className="text-[#FC8D00]">.</span>
                </h2>
         <div className="flex flex-col lg:flex-row  gap-14">
            <div className="flex flex-col lg:flex-1 gap-11">
                
                <div className="">
                  
                  <img src="/dm7.jpg" alt="service" className="object-cover  border rounded-md w-full h-auto  grayscale-[89%] hover:grayscale-0 " />
                </div>
                <div className="font-rubik text-base font-normal leading-[2.125em] lg:px-4 px-3">
                    {service.desc}
                </div>
             <div className="px-4 flex flex-col gap-12">
                {service.active && 
                    service.shortDesc.map((item) => (
                        <div key={item.title} className="flex flex-col gap-5 py-2">
                            <h4 className="text-[36px] tracking-[1px] uppercase font-normal leading-[1.1em] font-teko">
                            {item.title}
                            </h4>
                          <div className="font-rubik text-base font-normal leading-[2.125em] lg:px-4 px-3">
                            {item.desc}
                          </div>
                        </div>
                    ))
                }
    </div>

            </div>
            <div className="flex flex-col flex-[.42] ">
                <ServiceCard service={service} title={service.title} key={service.title}/>

            </div>
         </div>
         </div>
         <div className="py-12 pb-20">
         <Hero /> 
         </div>
        </div> 
    );
};

export default ServiceIdPage;