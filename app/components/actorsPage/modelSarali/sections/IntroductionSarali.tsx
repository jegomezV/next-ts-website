import React from 'react';
import Image from 'next/image';

import mainSecondPhoto from '@/public/homeImgs/actorsModals/saraliModal/saraliGallery/mainPhoto.webp';

import { useTranslation } from "react-i18next";
import { FaInstagram } from 'react-icons/fa';

const IntroductionSarali: React.FC = (): JSX.Element => {
  const [t] = useTranslation("global");

  return (
    <section className='relative w-full px-4 py-16 mt-20 md:mt-24 overflow-x-clip'>
      <div className='grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2'>

        {/* Sección de la Imagen y Título */}
        <div className='flex flex-col items-center justify-center text-center md:items-start md:text-left'>
          <div className='relative h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] mt-10'>
            <div className='relative h-full w-full'>
              <Image
                src={mainSecondPhoto}
                alt='Sarali Image'
                className='transition-transform duration-200 rounded-lg shadow-lg hover:scale-105'
                layout='fill'
                objectFit='cover'
                objectPosition='50% 30%'
              />
            </div>
          </div>

          <h1
            data-scroll
            data-scroll-speed="-0.2"
            className="mt-8 text-3xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white"
          >
            {t("actors.sarali.name")}
          </h1>

          {/* Enlace de Instagram */}
          <a
            href="https://www.instagram.com/sarali.fp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 text-xl md:text-2xl text-pink-500 transition-transform cursor-pointer hover:text-pink-600 hover:scale-105"
          >
            <FaInstagram className="mr-2" />
            IG: @sarali.fp
          </a>
        </div>

        {/* Sección del Texto y Frase */}
        <div className='flex flex-col items-center justify-center mt-0 md:mt-0 px-4'>
          <div className='border border-amber-300 bg-black/30 backdrop-blur-xl rounded-2xl p-4 text-center'>
            <h2
              data-scroll
              data-scroll-speed="-0.2"
              className="text-2xl md:text-3xl lg:text-4xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white"
            >
              {t("actors.sarali.titleI")}
            </h2>
          </div>

          <div className='p-4 mt-6 text-lg md:text-xl lg:text-2xl'>
            <p className='pl-4 mb-4 italic font-bold text-gray-900 border-l-4 border-green-600'>
              {t("actors.sarali.phrase")}
            </p>
            <p className='text-gray-700 font-apple tracking-[1px]'>
              {t("actors.sarali.introduction-p")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSarali;
