import '@/app/styles/Introduction.scss';

import Image from 'next/image';
import React from 'react';

import firstPhoto from '@/public/homeImgs/introduction/introduction1.jpg';
import secondPhoto from '@/public/homeImgs/introduction/introduction2.jpg';

import { useTranslation } from "react-i18next";

export const Introduction: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section data-scroll-section className='effects-section md:border-[1px] border-black/60 overflow-x-clip'>
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
          <div className='w-[90%] max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center'>
            
            {/* Contenido general para escritorio */}
            <div className="flex flex-col justify-between order-1 md:order-1">
              <div 
                data-scroll 
                data-scroll-speed="1.5" 
                data-scroll-direction="horizontal" 
                className='image-container relative z-20 py-10 my-10 h-[15rem] w-full 2xl:h-[20rem] mx-auto drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'>
                <Image
                  src={firstPhoto}
                  alt="Model section introduction"
                  fill
                  objectFit="cover"
                  placeholder="blur"
                  priority
                  className='effects-section hover:scale-105 duration-300 hover:duration-300'
                />
              </div>
              <h1
                data-scroll
                data-scroll-speed="-1.0"
                className="md:hidden my-10 text-4xl mx-auto md:text-4xl xl:text-5xl text-black md:text-transparent md:bg-black cursor-default font-display whitespace-nowrap md:bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]"
              >
                {t("introduction.titleF")} <br /> {t("introduction.titleS")}
              </h1>
              <div data-scroll data-scroll-speed="1.0" className="relative z-20 text-left text-black bg-amber-100 border-[1px] border-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-4 mt-4">
                <p className="tracking-tight leading-[30px] xl:text-md 2xl:text-lg">
                {t("introduction.second-paragraph")}
                </p>
              </div>
              <div 
                data-scroll 
                data-scroll-speed="1.0"
                className='relative  md:hidden z-20 h-[15rem] w-full mx-auto drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] mt-4'>
                <Image
                  src={secondPhoto}
                  alt="Model section introduction"
                  fill
                  objectFit="cover"
                  placeholder="blur"
                  priority
                  className='hover:scale-105 duration-300 hover:duration-300'
                />
              </div>
              <div data-scroll data-scroll-speed="1.0" className="relative z-20 my-10 text-left text-black bg-amber-100 border-[1px] border-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-4 mt-4 md:hidden">
                <p className="tracking-tight leading-[30px] xl:text-md 2xl:text-lg">
                {t("introduction.first-paragraph")}
                </p>
              </div>
            </div>

            {/* Contenido de la columna derecha para dispositivos grandes */}
            <div className="flex flex-col justify-between order-2 md:order-2">
              <div data-scroll data-scroll-speed="1.0" className="relative z-30 text-center md:text-left overflow-visible">
                <h1 className="hidden md:block text-center text-xl md:text-4xl xl:text-[2.8rem] text-black md:text-transparent md:bg-black cursor-default font-display whitespace-nowrap md:bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]">
                {t("introduction.titleF")} <br /> {t("introduction.titleS")}
                </h1>
              </div>
              <div data-scroll data-scroll-speed="2.0" className="relative z-20 text-left text-black bg-amber-100 border-[1px] border-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-4 mt-4 hidden md:block">
                <p className="tracking-tight leading-[30px] xl:text-md 2xl:text-lg">
                {t("introduction.first-paragraph")}
                </p>
              </div>
              <div 
                data-scroll 
                data-scroll-speed="1.0"
                className='relative image-container hidden md:block z-20 h-[15rem] w-full mx-auto drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] mt-4'>
                <Image
                  src={secondPhoto}
                  alt="Model section introduction"
                  fill
                  objectFit="cover"
                  placeholder="blur"
                  priority
                  className='introduction-image hover:scale-105 duration-300 hover:duration-300'
                />
              </div>
              <div data-scroll data-scroll-speed="1.0" className="relative hidden  z-20 text-left text-black bg-amber-100 border-[1px] border-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-4 mt-4 ">
                <p className="tracking-tight leading-[30px] xl:text-md 2xl:text-lg">
                {t("introduction.second-paragraph")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </article>
    </section>
  );
};

export default Introduction;
