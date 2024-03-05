import React from 'react'
import Navbar from '../Navbar'
import { Separator } from '../ui/separator'
import NavbarRoutes from './NavbarRoutes'

const Banner = ({title,page, active,servicePage}) => {
  return (

   <div className="">
    <div 
    className="bg-[url(/dm6.jpg)] lg:h-[470px] h-[350px] w-full bg-cover bg-center ">
    
   <div className=''>
    <div className='flex flex-col w-full ' >
      <NavbarRoutes/>
      <Separator className='bg-slate-300 '/>

    </div>
    <div className='flex flex-col justify-center items-center lg:h-[300px] h-[200px] text-slate-900'>
      <h1 className='text-center xl:text-[70px] font-teko xl:leading-[1em] uppercase tracking-[1px] flex flex-wrap font-[600] lg:text-[60px] lg:leading-[1.05em] sm:text-[48px] leading-[1.1em] text-[42px] '>
        {title}
      </h1>
      <div className='text-center flex gap-3  text-[20px] font-normal font-teko uppercase leading-[30px] tracking-widest items-center '>
        <div className='text-[20px] font-[500px font-teko uppercase leading-[30px] tracking-widest'>
          home
        </div>
         <div className='w-[5px] bg-black py-[.7px] mb-[3px]'/>
         <div className='text-[20px] font-[500px font-teko uppercase leading-[30px] tracking-widest'>
           {page}
         </div>
         { active && 
         <>
          <div className='w-[5px] bg-black py-[.7px] mb-[3px]'/>
          <div className='text-orange-500 text-[20px] font-[500px] font-teko uppercase leading-[30px] tracking-widest'>
            {servicePage}
          </div>
         </> 
         }
      </div>
      

    </div>
  </div>  
    </div>  
  </div>   
  )
}

export default Banner