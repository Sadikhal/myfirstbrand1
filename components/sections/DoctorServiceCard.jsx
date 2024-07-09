'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeVariants } from '../utils/motion';

const DoctorServiceCard = ({ data }) => {
  return (
    <motion.div
    variants={fadeVariants}
    initial="initial"
    whileInView="animate"
    
     className="flex flex-col gap-4 w-full group hover:border border-slate-300  py-5 bg-black">
       <div className="font-medium sm:text-[35px] md:text[40px] text-[26px] uppercase  font-teko underline hover:no-underline text-[#FC8D00] px-2 py-5 text-nowrap">
          {data.title}
        </div>
      <div className="w-full relative overflow-hidden  ">
        <img
          src={data.img}
          alt="career"
          className=" object-cover aspect-video xl:h-[287px] lg:h-[240px]  w-full group-hover:scale-110 transition"
        />
      </div>
      <div className="font-rubik text-base font-normal leading-[2.125em] text-justify px-2 ">
          {data.desc}
        </div>
    </motion.div>
  );
};


export default DoctorServiceCard