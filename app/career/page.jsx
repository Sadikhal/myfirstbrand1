import { Listings } from '@/components/constants/Listings'
import Banner from '@/components/sections/Banner'
import CareerCard from '@/components/sections/CareerCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner title='OUR openings' page='career'/>
     <div className='mt-2 py-12'>
      <div className='mt-12 my-12 py-5 flex flex-col justify-center items-center'>
        <div className='text-center'>
          <h4 className="leading-[.85em] text-[40px] lg:leading-[1.5rem] font-teko font-normal">our current openings
          </h4>

        </div>
        <div 
          className="
          px-5
            md:px-7

            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-1
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-12
          "
        >
          {Listings.map((listing) => (
            <CareerCard
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      <div>

      </div>
      </div> 
      </div>
    </div>
  )
}

export default page