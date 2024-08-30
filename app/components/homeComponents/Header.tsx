import '@/app/styles/Introduction.scss';

import Image from 'next/image';
import React from 'react';

import { useTranslation } from "react-i18next";

// Importing image files
import firstPhoto from '@/public/homeImgs/homeBg/firstPhoto.jpg';
import pasarellaPhoto from '@/public/homeImgs/homeBg/pasarellaPhoto.webp';
import mainJefreyPhoto from '@/public/homeImgs/homeBg/mainJefreyPhoto.jpg';
import mainSecondPhoto from '@/public/homeImgs/homeBg/mainSecondPhoto.jpg';
import principalPhoto from '@/public/homeImgs/homeBg/principalPhoto.jpg';

// HeaderM component definition
export const HeaderM: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <header data-scroll-section id='home'>
      {/* Main header section with title */}
      <div className="h-screen relative flex flex-col items-center justify-center overflow-x-clip">
        <div className="
          animate-glow md:block animate-fade-left
          bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0
          absolute translate-x-20 inset-0 z-0" />
        <h1 className="
          z-30 text-4xl text-transparent duration-1000
          bg-white cursor-default
          animate-title sm:text-5xl md:text-6xl xl:text-8xl
          whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] font-apple 
          relative tracking-[4px]"> {t("main-header.first-title")} <br />
        </h1>
        <h3 className="
          z-30 text-2xl text-transparent duration-1000
          bg-white cursor-default
          animate-title font-appleL sm:text-5xl md:text-6xl xl:text-4xl
          whitespace-nowrap bg-clip-text drop-shadow-[0_0.1px_0.8px_rgba(0, 0, 0, 2)] 2xl:drop-shadow-[0_0.1px_0.8px_rgba(255,255,255,0.8)]">
            {t("main-header.second-title")}
        </h3>
      </div>

      {/* Absolute positioned images */}
      <div className='effects-section absolute top-0 w-screen h-screen flex items-center justify-center overflow-hidden'>
        {/* Image 1 */}
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" className=" image-container
          absolute right-0 bottom-28
          h-60 w-44 sm:left-[49%] sm:bottom-20 sm:h-52 sm:w-44
          md:left-[56%] md:h-72 md:w-56 md:bottom-28
          lg:left-[53%] lg:bottom-0 lg:h-[20rem] lg:w-[20rem]
          xl:h-[15rem] xl:w-[20rem] xl:left-[55rem] xl:bottom-4
          2xl:h-[15vw] 2xl:w-[25vw] 2xl:left-[70%] 2xl:bottom-[1rem] duration-300">
          <Image
            src={pasarellaPhoto}
            alt="Fashion runway scene"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            className='introduction-image hover:translate-x-2 hover:duration-200 duration-200'
            objectPosition='50% 20%'
          />
        </div>

        {/* Image 2 */}
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="1" className=" image-container
          absolute left-[61%] top-6
          h-52 w-36 sm:left-[67%] sm:top-3
          md:left-[78%] md:h-60 md:w-44
          lg:h-[22rem] lg:w-[17rem] lg:left-[80%] lg:top-3
          xl:left-[84%] xl:h-[20rem] xl:w-[14rem] xl:top-16
          2xl:h-[27vw] 2xl:w-[19vw] 2xl:top-16 2xl:-right-[4rem] duration-300">
          <Image
            src={mainSecondPhoto}
            alt="Fashion model close-up"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            className='introduction-image hover:-translate-x-2 hover:duration-200 duration-200'
          />
        </div>

        {/* Image 3 */}
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" className=" image-container
          absolute top-16 -left-[4%]
          h-52 w-36 sm:top-10 sm:h-56 sm:w-44
          md:-left-[4%] md:h-80 md:w-60
          xl:h-96 xl:w-[18rem] xl:left-[4rem]
          2xl:h-[30vw] 2xl:w-[20vw] 2xl:left-[4rem] duration-300">
          <Image
            src={firstPhoto}
            alt="Close-up portrait of a model"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            className='introduction-image hover:-translate-x-2 hover:duration-200 duration-200'
          />
        </div>

        {/* Image 4 */}
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" className=" image-container
          absolute left-0 bottom-24 z-20
          h-60 w-40 
          sm:right-[80%] sm:bottom-30 sm:h-52 sm:w-36
          md:h-60 md:w-44 md:right-[80%] md:bottom-28
          lg:right-[70%] lg:bottom-4 lg:h-[17rem] lg:w-[12rem]
          xl:h-[13rem] xl:w-[13rem] xl:bottom-1
          2xl:h-[17vw] 2xl:w-[15vw] 2xl:left-[10rem] 2xl:bottom-0 duration-300">
          <Image
            src={mainJefreyPhoto}
            alt="Portrait of a fashion designer"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            className='introduction-image hover:translate-x-2 hover:duration-200 duration-200'
          />
        </div>

        {/* Image 5 */}
        <div className=" image-container
          absolute transform md:-translate-x-1/2 md:-translate-y-1/2
          h-64 w-52
          sm:h-72 sm:w-52
          md:left-[46%] md:top-[17rem] md:h-[500px] md:w-[350px]
          lg:top-[20rem]
          xl:h-[30rem] xl:w-[27rem] xl:top-[20rem]
          2xl:h-[41vw] 2xl:w-[38vw] 2xl:top-[27rem]">
          <Image
            src={principalPhoto}
            alt="Portrait of a fashion model"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            className='introduction-image'
          />
        </div>

      </div>

    </header>
  );
};

export default HeaderM;
