import Link from 'next/link';
import React from 'react';

const DoctorsCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 w-full group hover:border border-slate-300 rounded-2xl text-slate-900 bg-slate-100 justify-between cursor-pointer">
      <div>
        <div className="w-full relative overflow-hidden rounded-xl">
          <img src={data.img} alt="details" className="grayscale-[89%] hover:grayscale-0 object-cover aspect-video h-full w-full  transition" />
        </div>
     
        <div className="mt-5 flex flex-col gap-8 text-center">
          <div className="font-normal text-[28px] uppercase leading-[.85em] font-teko underline hover:no-underline hover:text-[#FC5D00] text-nowrap ">
            {data.title}
          </div>
          <div>
            <div className="font-rubik text-[16px] font-normal leading-[34px] flex gap-3  px-3 text-left">
              {data.answer}
            </div> 
          </div>
        </div> 
      </div>
      
    
    </div> 
  );
};

export default DoctorsCard;
