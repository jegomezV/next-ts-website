import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/jeffryModal/biographyPhoto.jpg';

import { useTranslation } from "react-i18next";

const BiographyClaudia: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip mb-[30rem] md:mb-24 lg:mb-32'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2
            data-scroll
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6"
          >
            {t("actors.claudia.titleB")}
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
              {t("actors.claudia.biography-fp")} <br /><br />
              </p>
              <p className='text-gray-700'>
              {t("actors.claudia.biography-sp")}<br /><br />
              </p>
              <p className='text-gray-700'>
              {t("actors.claudia.biography-tp")}<br /><br />
              </p>
              <p className='text-gray-700'>
              {t("actors.claudia.biography-four")}<br /><br />
              </p>
          </div>
        </div>
        </div>
        <div className='relative h-[400px] w-full'>
          <Image
            src={rightPhoto}
            alt='Claudia Biography'
            className='object-cover w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
          />
          <div className='bg-white p-6 rounded-lg shadow-md mt-[28rem]'>
            <p className='text-gray-700'>
            {t("actors.claudia.biography-five")}<br /><br />
            {t("actors.claudia.biography-six")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographyClaudia;
