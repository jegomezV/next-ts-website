import React from 'react';
import Image from 'next/image';

import mainPhoto from '@/public/homeImgs/actorsModals/zorroModal/ZorroMain.jpg'
import mainSecondPhoto from '@/public/homeImgs/actorsModals/zorroModal/ZorroMain2.jpg'

import { useTranslation } from "react-i18next";

const IntroductionZorro: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 overflow-x-clip'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start justify-center text-center md:text-left'>
          <div className='relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
          <h1 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-3xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white mt-8 -translate-y-32"
          >
            {t("actors.zorroGris.name")}
          </h1>
            <Image 
              src={mainPhoto} 
              alt='Zorro' 
              className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
              objectFit='cover'
            />
          </div>
          
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='border border-amber-300 bg-black/30 backdrop-blur-xl rounded-2xl top-14 absolute'>
          <h2 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white py-3 px-6"
          >
            {t("actors.zorroGris.titleI")}
          </h2>
          </div>
          <div className='bg-amber-50/90 border border-amber-300 p-6 rounded-lg shadow-md'>
            <p className='text-gray-700'>
            {t("actors.zorroGris.introduction-p")}
            </p>
          </div>
          <div className='relative mt-8 h-[200px] w-full'>
            <Image 
              src={mainSecondPhoto} 
              alt='Zorro Second' 
              className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionZorro;