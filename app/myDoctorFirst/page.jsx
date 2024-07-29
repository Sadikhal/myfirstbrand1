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
       
        <div className="font-rubik text-base font-normal leading-[2.125em] text-justify px-2 lg:px-5">

        <div className='font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] font-normal capitalize text-[#FC8D00]'>Welcome to MyDoctorsFirst
        </div> 
        At MyDoctorsFirst, we specialize in providing top-notch digital marketing solutions exclusively for healthcare professionals. Our mission is to empower doctors, hospitals, and clinics with the tools and strategies they need to thrive in the digital age.
           
        </div>
        <div className='flex flex-col gap-5 px-2 lg:px-5'>
              <h2 className='font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] font-normal capitalize'>Who We Are</h2>
              <div className="font-rubik text-base font-normal leading-[2.125em] text-justify lg:mr-4 mr-2">MyDoctorsFirst is an extension of MyBrandFirst, a renowned digital marketing agency known for delivering exceptional results across various industries. Leveraging our extensive experience and industry expertise, we have dedicated a specialized team to focus on the unique needs of the healthcare sector.</div>  
              </div>
      </div>
      <div
        className="px-5
          md:px-7
          pt-10
          grid 
          grid-cols-1 
          sm:grid-cols-1
          md:grid-cols-1 
          lg:grid-cols-2
          gap-7 lg:gap-10
          xl:gap-12 "
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