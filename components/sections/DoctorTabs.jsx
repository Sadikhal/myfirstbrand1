import React from 'react';
import { DoctorServiceTabs } from '../constants/DoctorServiceTabs';
import DoctorsCard from './DoctorCard';

const DoctorTabs = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center gap-12">
        <h3 className="text-center font-teko text-5xl leading-11 font-normal uppercase">Why Choose Mybrandfirst?</h3>
      </div>
      <div className="px-5 md:px-7 pt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 gap-8">
        {DoctorServiceTabs.map((listing) => (
          <DoctorsCard
            key={listing.id}
            data={listing}
            contact ={false}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorTabs;
