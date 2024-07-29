'use client';
import NavbarRoutes from '@/components/sections/NavbarRoutes';
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import { buttonVariant, descVariant, navVariants, textVariant } from '../utils/motion';
import Link from 'next/link';
import { Button } from '../ui/button';

const MyDoctorFirstBanner = () => {
  return (
    <motion.div className="relative w-full h-full overflow-hidden ">
      <motion.div
        className="absolute bg-fixed inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-0 w-full overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/doctor/docbanner4.jpg)',
          filter: 'grayscale(100)',
        }}
        initial="hidden"
        animate="show"
        variants={navVariants}
      />
      <div className="relative z-10">
        <NavbarRoutes  img='/logo12.png'/>
        <Separator className='bg-slate-300' />
      </div>

      <div className='flex flex-col justify-center items-center relative px-1 gap-5 h-[70%]'>
        <motion.div initial="hidden" whileInView="show" variants={descVariant}>
          <h5 className='uppercase text-[30px] font-normal leading-[1em] text-slate-100 font-teko'>Welcome to <span className='text-[#FC8D00]'>MyDoctorFirst</span></h5>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" variants={textVariant}>
          <h1 className='text-center xl:text-[50px] font-teko xl:leading-[1em] uppercase tracking-[1px] flex flex-wrap font-[500] lg:text-[40px] lg:leading-[1.05em] text-[40px] leading-[1.1em] text-slate-50'>Digital Marketing Service  agency for  Doctors, <br/>Clinics, and Hospitals</h1>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" variants={buttonVariant} className='lg:pt-5 pt-8'>
          <Link href='/about' key='contact' className='relative z-10 opacity-100 cursor-pointer'>
            <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00] hover:bg-black hover:text-foreground md:px-[50px] md:py-[33px] z-10 uppercase px-[38px] py-[26px] cursor-pointer">discover more</Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MyDoctorFirstBanner;
