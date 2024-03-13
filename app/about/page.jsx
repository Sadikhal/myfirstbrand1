import Navbar from '@/components/Navbar'
import AboutDetalis from '@/components/sections/AboutDetails'
import Banner from '@/components/sections/Banner'
import MarketPlaceBanner from '@/components/sections/MarketPlaceBanner'
import CounterUp from '@/components/sections/Slider'
import SliderMotion from '@/components/sections/SliderMotion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-12 '>
      <Banner title = "why do we" page ="about us"/>
      <div className='flex mt-12 gap-12 overflow-hidden '>
        <div className='flex lg:flex-row px-5 flex-col gap-12'>
        <div className='flex flex-col flex-1 px-5'>
          <div className='flex'>
              <div >
                <img src="/grp teaching.jpg" className='object-cover  grayscale-[89%] hover:grayscale-0' alt="about" />
              </div>
               <div className='bg-[#FC8D00] w-40 h-auto  mt-10 px-1 xs:px-0 '>
                  </div>
              </div>
              <div className='flex flex-row-reverse'>
              <div className='bg-[#FC8D00]  w-[92%] xl:h-[41px] sm:h-[42px] lg:h-[34px]  md:py-7 lg:py-5 xl:py-[22px] h-[18px] py-[17px] xs:py-1'>
                </div>
              </div>
                

          
        </div>  
        <div className='flex-1 mt-12 lg:mt-0'>
          <div className='flex flex-col gap-5'>
            <h2 className='font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase'> All About Us </h2>
            <div className="font-rubik text-base font-normal leading-[2.125em]">We at Digimark Agency have made a number of corporate films for the biggest companies in the world for myriad of reasons. For some it’s about branding whilst others use it for internal communication yet whatever the reason they all have one main criteria, it should be a great, unique video. Well we are here to tell you how to make a great quality video. This article covers the basics from a non-technical point of view; we’ll bring out more articles on the technical requirements later from cinematography to editing. So let’s get started.</div>             
            <div className='flex justify-center items-center  pb-14'>
           <Link href='/career' key='about us'>
          <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00]  hover:bg-foreground px-[50px] py-[33px]  uppercase">
            know more
          </Button>
        </Link>   
        </div>

          </div>

        </div>
        </div>
      </div>
      <div className="px-10 ">
        <SliderMotion/>
      </div>
      <div className=" py-18 mt-12 relative  ">
        <CounterUp/>
      </div>
      <div className='px-9'>
       <AboutDetalis/>
      </div>
    <MarketPlaceBanner/>
    </div>
  )
}

export default About