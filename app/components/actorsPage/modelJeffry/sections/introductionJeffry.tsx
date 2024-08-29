import React from 'react';
import Image from 'next/image';

import mainSecondPhoto from '@/public/homeImgs/actorsModals/jeffryModal/jeffryGallery/mainPhoto.jpg';

import { useTranslation } from "react-i18next";

const IntroductionJeffry: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 overflow-x-clip mt-24'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start justify-center text-center md:text-left'>
          <div className='mt-10 relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
            <h1
              data-scroll
              data-scroll-speed="-0.2"
              className="mb-20 text-4xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white -translate-y-24"
            >
              {t("actors.jeffry.name")}
            </h1>
            {/* Video de Google Drive */}
            <div className='relative -translate-y-10 lg:-translate-y-36 h-[50vw] md:h-[30vw] w-[100%]'>
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
        <div className='flex flex-col justify-center items-center'>
          <div className='border border-amber-300 bg-black/30 backdrop-blur-xl rounded-2xl top-20 lg:top-14 absolute'>
            <h2
              data-scroll
              data-scroll-speed="-0.2"
              className="text-2xl md:text-3xl py-3 px-6 lg:text-6xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white"
            >
              {t("actors.jeffry.titleI")}
            </h2>
          </div>
          <div className='text-xl lg:text-2xl p-6 mt-6'>
            <p className='text-gray-700 font-apple tracking-[2px]'>
              {t("actors.alexa.introduction-p")} <br /><br />
              {t("actors.alexa.introduction-p2")} <br /><br />
              {t("actors.alexa.introduction-p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionJeffry;
