import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/saraliModal/SaraliBiography.jpeg';

import { useTranslation } from "react-i18next";

const BiographySarali: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip mb-[28rem] md:mb-24 lg:mb-32'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2 data-scroll data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6">
            {t("actors.sarali.titleB")}
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md text-gray-700'>
              <p>
              {t("actors.sarali.biography-fp")}<br /><br />
              </p>
              <p>
              {t("actors.sarali.biography-sp")}<br /><br />
              </p>
              <p>
              {t("actors.sarali.biography-tp")}
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-[350px] w-full'>
          <Image
            src={rightPhoto}
            alt='Sarali Biography'
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
            objectFit='cover'
          />
          <div className='bg-white p-6 rounded-lg shadow-md text-gray-700 mt-[24rem]'>
            <p>
            {t("actors.sarali.biography-four")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySarali;
