import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { BookUser, LocateFixedIcon, Map } from 'lucide-react'

const CareerCard = ({data}) => {
  return (
    <div className="flex flex-col gap-4 w-full group hover:border
    border-slate-300 rounded-2xl">
        <div className="
          w-full 
          relative 
          overflow-hidden 
          rounded-xl
        ">
          <img src={data.image} alt="career" className="
            grayscale-[89%] hover:grayscale-0
            object-cover 
            aspect-video
            xl:[h-287px]
            lg:h-[240px]
            md:h-[287px] 
            w-full 
            group-hover:scale-110 
            transition
          " />
        </div>
      <div className='mt-5 flex flex-col gap-4 px-2'>
        <div className="font-normal text-[30px] uppercase leading-[0.85em] font-teko underline hover:no-underline hover:text-[#FC8D00]">
          {data.title}
        </div>
        <div className='flex flex-col gap-1'> 
        <div className="font-rubik text-[16px] font-normal flex gap-3 ">
          <BookUser />
          {data.type}
        </div>
        <div className="font-rubik text-[16px] font-normal flex gap-3">
          <Map/>
          {data.location}
        </div>
        </div>
     </div> 
     <div className='flex justify-center items-center py-2 pb-14'>
      <Link href='/career' key={data.id}>
          <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00] hover:bg-foreground px-[50px] py-[33px]  uppercase">
            Apply now
          </Button>
        </Link>   
        </div>

  </div>
  )
}

export default CareerCard