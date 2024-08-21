import React from 'react';
import Image from 'next/image';

import mainPhoto from '@/public/homeImgs/actorsModals/alexaModal/AlexaMain.jpg';
import mainSecondPhoto from '@/public/homeImgs/actorsModals/alexaModal/AlexaModel2.jpg';

import { useTranslation } from "react-i18next";

const IntroductionAlexa: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 overflow-x-clip'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start justify-center text-center md:text-left'>
          <div className='relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
            <h1
              data-scroll
              data-scroll-speed="-0.2"
              className="mb-20 text-3xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white -translate-y-24"
            >
              {t("actors.alexa.name")}
            </h1>
            {/* Video de Google Drive */}

          <iframe className='md:h-[30vw] md:w-[40vw] lg:-translate-y-32' src="https://drive.google.com/file/d/1EH8bdzzqPxPRXo5-CiI6w4g5DL2A20s_/preview" allow="autoplay"></iframe>

           {/*  <Image
              src={mainPhoto}
              alt='Alexa'
              className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
              objectFit='cover'
            /> */}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='border border-amber-300 bg-black/30 backdrop-blur-xl rounded-2xl top-14 absolute'>
            <h2
              data-scroll
              data-scroll-speed="-0.2"
              className="text-2xl md:text-3xl py-3 px-6 lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white"
            >
              {t("actors.alexa.titleI")}
            </h2>
          </div>
          <div className='bg-amber-50/90 border border-amber-300 p-6 rounded-lg shadow-md'>
            <p className='text-gray-700'>
              {t("actors.alexa.introduction-p")}
            </p>
          </div>

          

          <div className='relative mt-8 h-[300px] w-[90%]'>
            <Image
              src={mainSecondPhoto}
              alt='Alexa Second'
              className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
              objectFit='cover'
              objectPosition='50% 30%'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionAlexa;
