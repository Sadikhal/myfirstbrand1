import { DoctorServices } from '@/components/constants/DoctorServices'
import DoctorContact from '@/components/sections/DoctorContact'
import DoctorServiceCard from '@/components/sections/DoctorServiceCard'
import DoctorTabs from '@/components/sections/DoctorTabs'
import MyDoctorFirstBanner from '@/components/sections/MyDoctorFirstBanner'
import { Separator } from '@/components/ui/separator'
import React from 'react'


const page = () => {
  return (
    <div className='flex flex-col gap-5 overflow-hidden'>
      <div className="mb-12 h-screen w-full">
        <MyDoctorFirstBanner/>
      </div> 
      <div className="flex flex-col text-left gap-10 xl:gap-18 px-3 sm:px-4 md:px-6">
        <h2 className="font-teko text-4xl leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase relative hover:text-[#FC8D00]">
          our digital services <span className="absolute bottom-0 ml-1 text-[#FC8D00]">.</span>
        </h2>
        <div className="font-rubik text-base font-normal leading-[2.125em] text-justify px-2 lg:px-5">
          Mybrandfirst is a premier digital marketing agency committed to propelling brands into the digital spotlight. Our team of experts guides clients through the intricacies of digital marketing, offering personalized approaches to each project.
          <br/>
          <br/> What sets us apart is our unwavering commitment to excellence and innovation. We continuously monitor industry trends, experiment with new technologies, and refine our strategies for maximum effectiveness. Partnering with Mybrandfirst ensures dedication to your success. Embark on a digital journey with us today to unlock the full potential of your brand online.
        </div>
      </div>
      <div
        className="
          px-5
          md:px-7
          pt-10
          grid 
          grid-cols-1 
          sm:grid-cols-1
          md:grid-cols-1 
          lg:grid-cols-2  
          gap-7 lg:gap-10

          xl:gap-12
        "
      >
        {DoctorServices.map((listing) => (
         <div>
          <DoctorServiceCard
            key={listing.id}
            data={listing}
          />
          </div>
        ))}
      </div>
      <div className="px-4 py-5 mt-10">
        <DoctorTabs />
      </div>
      <Separator/>
      <div className='mt-5'>
        <DoctorContact/>
      </div>
    </div>
  )
}

export default page