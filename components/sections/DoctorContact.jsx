import React from 'react';
import ContactForm from '@/components/sections/ContactForm';

const DoctorContact = () => {
  return (
    <div className='px-7 h-full'>
       <div className='flex flex-col lg:flex-row gap-12 h-full'>
        <div className='lg:flex-1 h-full flex flex-col gap-6'>
        <h2 className='font-teko leading-[1.15em] text-[50px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] lg:text-[70px] lg:leading-[0.9em] font-normal hover:text-[#FC8D00] lg:font-[400px] uppercase lg:hidden sm:px-7 px-2 md:px-3 pt-2 m'>Contact us<span className='text-[#FC8D00]'>.</span></h2>
          <div className='sm:px-7 relative w-full h-full pt-4'>   
            <img src="contact-1.jpg" className='object-cover w-full h-[380px] sm:h-full md:h-screen lg:h-[400px] xl:h-full border rounded-xl grayscale-[89%] hover:grayscale-0 ' alt="banner" />
            <div className='flex absolute w-80 bottom-0 left-0 bg-[#FC8D00] rounded-lg flex-row justify-around items-center sm:py-7 sm:px-5 py-3 px-2 lg:py-5'>
              <div className='text-slate-900 text-[18px]   font-normal font-rubik'>
              <span className='font-medium'>Ready to take your practice to the next level?</span> <br /> <span className='text-[18px] font-bold'>Contact MyDoctorsFirst</span>  today for a free consultation and let us help you achieve your digital marketing goals.
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 px-1 pl-2'>
          <div className='flex flex-col gap-15'>
            <h2 className='font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] lg:text-[70px] lg:leading-[0.9em] font-normal hover:text-[#FC8D00] lg:font-[400px] uppercase hidden lg:flex'>Contact us<span className='text-[#FC8D00]'>.</span></h2>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default DoctorContact;
