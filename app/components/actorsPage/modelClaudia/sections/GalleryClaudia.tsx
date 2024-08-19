import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/jeffryModal/biographyPhoto.jpg'

import { useTranslation } from "react-i18next";

const GalleryClaudia: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative h-[42rem] w-full'>
      <div className='absolute h-full w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative flex flex-col items-center justify-start h-[100%] w-[100%] mx-auto my-auto'>
          <div className='top-0 translate-y-5 h-full w-full'>
            <div className='bg-slate-300 z-10 h-full w-full backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
              <h1 data-scroll data-scroll-speed="-0.2"
                className="text-2xl p-2 translate-y-10 text-transparent duration-1000 bg-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text">
                {t("actors.claudia.titleG")}
              </h1>
              <div className='h-[75%] w-[100%] translate-y-20 grid grid-cols-3 items-center justify-center'>
                <div className='h-full w-full mx-auto border-4'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
                <div className='h-full w-full border-4 mx-auto'>
                  <div className='relative h-full w-full'>
                    <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryClaudia;