import '@/app/styles/Introduction.scss';

import Image from 'next/image';
import React from 'react';

import firstPhoto from '@/public/homeImgs/stereotypes/stereotypes1.jpg';
import secondPhoto from '@/public/homeImgs/stereotypes/stereotypes2.jpg';

import { useTranslation } from "react-i18next";

export const Stereotypes: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section data-scroll-section className='effects-section  border-black/60 hidden md:block'>
      <article className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
        <div className='min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 md:px-8'>

          {/* Left Column */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            <div
              data-scroll
              data-scroll-speed="-0.5"
              className='image-container relative z-20 w-full h-64 md:h-[22rem]'>
              <Image
                src={firstPhoto}
                alt="Stereotypes section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='introduction-image hover:scale-105 duration-300'
              />
            </div>
            <p
              data-scroll
              data-scroll-speed="0.5"
              className="text-sm md:text-lg font-appleL tracking-[1px] lg:text-[1.5vw] lg:text-xl text-black p-3 md:p-4 leading-relaxed backdrop-blur-3xl">
              {t("sterotypes.second-paragraph")}
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            <h1
              data-scroll
              data-scroll-speed="-1.0"
              className="text-lg p-4 sm:text-xl md:text-2xl lg:text-4xl xl:text-[4vw] text-transparent bg-black cursor-default font-apple bg-clip-text text-center"
            >
              <span className="block mb-2">{t("sterotypes.titleF")}</span>
              <span className="block">{t("sterotypes.titleS")}</span>
            </h1>
            <p
              data-scroll
              data-scroll-speed="1.0"
              className="text-sm md:text-lg font-appleL tracking-[1px] lg:text-[1.5vw] text-black p-3 md:p-4 leading-relaxed">
              {t("sterotypes.first-paragraph")}
            </p>
            <div
              data-scroll
              data-scroll-speed="0.5"
              className='image-container relative z-20 w-full h-64 md:h-[22rem]'>
              <Image
                src={secondPhoto}
                alt="Stereotypes section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='introduction-image hover:scale-105 duration-300'
              />
            </div>
          </div>

        </div>
      </article>
    </section>
  );
};

export default Stereotypes;
