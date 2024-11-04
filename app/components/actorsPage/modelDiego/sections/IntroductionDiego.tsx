import React from 'react';
import Image from 'next/image';

import mainSecondPhoto from '@/public/homeImgs/actorsModals/diegoModal/diegoGallery/mainPhoto.webp';

import { useTranslation } from "react-i18next";
import { FaInstagram } from 'react-icons/fa';

const IntroductionDiego: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full px-4 py-16 mt-40 md:py-24 lg:py-32 overflow-x-clip md:mt-24'>
      <div className='grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2'>
        <div className='flex flex-col items-center justify-center text-center md:items-start md:text-left'>
          <div className='mt-10 relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
            <h1
              data-scroll
              data-scroll-speed="-0.2"
              className="mb-20 text-5xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white -translate-y-24"
            >
              {t("actors.diego.name")}
              <a href="https://www.instagram.com/el_difher/" target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 text-2xl text-pink-500 transition transform cursor-pointer hover:text-pink-600 hover:scale-105">
                <FaInstagram className="mr-2" />
                IG: @el_difher
              </a>

            </h1>
            {/* Video de Google Drive */}
            <div className='relative -translate-y-10 lg:-translate-y-36 h-[50vw] md:h-[30vw] w-[100%]'>
              <Image
                src={mainSecondPhoto}
                alt='Diego Second'
                className='transition-transform duration-200 rounded-lg shadow-lg hover:scale-105'
                layout='fill'
                objectFit='cover'
                objectPosition='50% 30%'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='absolute border border-amber-300 bg-black/30 backdrop-blur-xl rounded-2xl top-20 lg:top-14'>
            <h2
              data-scroll
              data-scroll-speed="-0.2"
              className="text-3xl md:text-3xl py-3 px-6 lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white"
            >
              {t("actors.diego.titleI")}
            </h2>
          </div>
          <div className='p-6 mt-6 text-xl lg:text-2xl'>
            <p className='pl-4 mb-4 italic font-bold text-gray-900 border-l-4 border-blue-600'>
              {t("actors.diego.phrase")}
            </p>
            <p className='text-gray-700 font-apple tracking-[2px]'>
              {t("actors.diego.introduction-p")} <br /><br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionDiego;
