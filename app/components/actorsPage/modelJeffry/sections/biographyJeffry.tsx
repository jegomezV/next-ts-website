'use client';

import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/jeffryModal/biographyPhoto.jpg'

import { useTranslation } from "react-i18next";

const BiographyJeffrey: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6"
          >
            {t("actors.jeffry.titleB")}
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
              {t("actors.jeffry.biography-fp")}
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
              {t("actors.jeffry.biography-sp")}
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
              {t("actors.jeffry.biography-tp")}
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-[400px] w-full'>
          <Image 
            src={rightPhoto} 
            alt='Jeffrey Biography' 
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
}

export default BiographyJeffrey;
