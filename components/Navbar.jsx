'use client'
import NavbarRoutes from '@/components/sections/NavbarRoutes'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';


const images = ['/dm1.jpg', '/dm6.jpg', '/dm6.jpg'];


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
 
const Navbar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${images[index]})` ,
    // width: '100%', 
    // height: '100%', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  }}
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1.5 }}
   >
    
    
      <NavbarRoutes/>
      <Separator className='bg-slate-300 '/>
      <hero className=''>
      
      </hero>
    </motion.div>
  )
}

export default Navbar