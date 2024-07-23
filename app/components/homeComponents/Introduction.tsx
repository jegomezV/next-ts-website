import Image from 'next/image';
import React from 'react';

import firstPhoto from '@/public/homeImgs/introduction/introduction1.jpg';
import secondPhoto from '@/public/homeImgs/introduction/introduction2.jpg';
import ArrowSvg from '../svgs/ArrowSvg';

export const Introduction: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section className='border-[1px] border-black/60'>
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
          <div className='h-screen w-[80%] grid grid-cols-2 grid-rows-2 items-center justify-center'>
            
            {/* Content visible on desktop */}
            <div className="relative z-30 text-center col-span-1 overflow-visible hidden md:block">
              <h1
                data-scroll
                data-scroll-speed="-1.0"
                style={{ minWidth: 'max-content' }}
                className="text-xl text-transparent bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]"
              >
                Redefining Beauty <br /> Beyond Stereotypes
              </h1>
            </div>

            <div data-scroll data-scroll-speed="-0.5" data-scroll-direction="horizontal" className='relative z-20 hidden md:block 2xl:h-[27rem] 2xl:w-[22rem] xl:h-[22rem] xl:w-[20rem] row-start-1 row-end-3 mx-start drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] 2xl:mt-[8rem] xl:mt-[5rem]'>
              <Image
                src={firstPhoto}
                alt="Model section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='hover:scale-105 duration-300 hover:duration-300'
              />
            </div>

            <div className='hidden md:block absolute h-[15rem] bg-black w-[2px] translate-y-16 2xl:translate-x-[12rem] xl:translate-x-[11rem] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]' style={{ zIndex: 10 }}></div>
            <div className='hidden md:block absolute h-[2px] bg-black w-[90%] 2xl:-translate-y-10 xl:-translate-y-12 translate-x-10 z-10 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>

            <div data-scroll data-scroll-speed="1.0" data-scroll-direction="horizontal" className="relative hidden md:block z-20 2xl:mb-10 xl:mb-10">
              <p
                className="2xl:text-lg xl:text-md text-left text-white bg-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-4 backdrop-blur-3xl inset-0">
                In a world where fashion has long been a stronghold of unattainable beauty standards, it is crucial to question and challenge these norms. At "What About Beauty," we explore how the fashion industry is transforming its ideals of beauty and how these transformations impact our perception of what it means to be truly beautiful.
              </p>
            </div>

            <div data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal" className="relative hidden md:block z-20 -translate-y-">
              <p
                className="2xl:text-lg xl:text-md text-left text-white bg-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] p-4 inset-0">
                The fashion industry has a long history of promoting a single standard of beauty that often excludes those who do not fit into strict molds. However, in recent years, we have seen a shift towards greater inclusion and diversity. While these changes are promising, it is essential to ask whether they are genuine or merely marketing strategies.
              </p>
            </div>

            <div className='hidden md:block absolute h-[4px] w-[90%] bottom-[9rem] border-[1px] bg-black -left-[10rem] translate-x-10 z-10 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>

            <div data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal" className='hidden md:block relative z-20 2xl:h-[15rem] 2xl:w-[30rem] xl:h-[15rem] xl:w-[25rem] mx-auto drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] mb-5'>
              <Image
                src={secondPhoto}
                alt="Model section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='hover:scale-105 duration-300 hover:duration-300' />
            </div>

            <div className="relative z-30 right-20 text-center col-span-2 md:col-span-1 overflow-visible md:hidden flex flex-col justify-center items-center w-ful drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] ">
              <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl whitespace-nowrap">
                  Redefining Beauty <br /> Beyond Stereotypes
                </h1>
              </div>
            </div>

            <div className="relative z-30 text-center col-span-2 md:col-span-1 overflow-visible md:hidden flex flex-col justify-center items-center w-2/4 h-[60vh] top-28 left-52 bg-black">
              <div className="flex flex-col md:flex-row w-full h-full">
                <div className="flex-1 flex flex-col justify-center items-center p-2">
                  <p className="2xl:text-lg xl:text-md text-center text-white">
                    In a world where fashion has long been a stronghold of unattainable beauty standards, it is crucial to question and challenge these norms. At "What About Beauty," we explore how the fashion industry is transforming its ideals of beauty and how these transformations impact our perception of what it means to be truly beautiful.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-30 text-center col-span-2 md:col-span-1 overflow-visible md:hidden flex flex-col justify-center items-center w-2/4 h-[60vh] bottom-6 right-6 bg-black">
              <div className="flex flex-col md:flex-row w-full h-full p-4">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <p className="xl:text-md text-center text-white overflow-auto">
                  The fashion industry has long promoted a narrow standard of beauty, often excluding those who don't fit strict molds. Recently, there's been a shift towards greater inclusion and diversity. However, it's crucial to question whether these changes are truly genuine or just marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Introduction;
