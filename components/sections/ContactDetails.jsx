import React from 'react'
import ContactForm from '@/components/sections/ContactForm';

const ContactDetails = () => {
  return (
    <div className='px-7 mt-12'>
       <div className='flex  flex-col lg:flex-row gap-12'>
        <div className='flex-1 '>
          <div className='px-7 relative'>
          <img src="contact-1.jpg" className='object-cover h-auto border rounded-xl grayscale-[89%] hover:grayscale-0 ' alt="banner" />
          <div className='flex absolute w-80 bottom-0 left-0 bg-[#FC8D00] rounded-lg flex-row justify-around items-center  sm:py-7 sm:px-5 py-3 px-2 lg:py-5'>
          <div className=' text-slate-900  text-[30px]  lg:text-[30px]  md:text-[35px] font-normal font-teko leading-[1em]   uppercase '>we  are here to happy you. 
          <span className='text-foreground font-[500]'> contact us today</span> 
          
          </div>
          <div className='flex mt-8 mr-2'>
          <div className='bg-black hover:bg-black/50 rounded-full px-4 py-4 '>
           <img src="/right arr.png" alt="" className='object-contain w-full h-full  '/>
           </div>
          </div>
           
          </div>
          </div>
          
        </div>
        <div className='flex-1 px-1 pl-2 '>
          <div className='flex flex-col gap-15'>
        <h2 className=" font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] lg:text-[70px] lg:leading-[0.9em] font-normal lg:font-[400px] uppercase">get in touch<span>.</span>
      </h2>
      <div>
          <ContactForm/>
      </div>
          </div>
       </div>

       </div>
      
    </div>
  )
  
}

export default ContactDetails