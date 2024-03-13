import Banner from '@/components/sections/Banner';
import React from 'react';
import ContactForm from '@/components/sections/ContactForm';
import ContactList from '@/components/sections/ContactList';
import GoogleMap from '@/components/sections/GoogleMap';
import { ContactCard } from '@/components/sections/ContactCard';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactDetails from '@/components/sections/ContactDetails';

const Page = () => {
  return (
    <div className='flex flex-col w-full'>
      <Banner title='Contact us' />
          <div className='py-20'>
          <ContactDetails/>
          </div>   
      <ContactList />
      <div className='mt-12 py-10'>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Page;
