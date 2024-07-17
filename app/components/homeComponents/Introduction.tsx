import Image from 'next/image';
import React from 'react';

// Importing image file
import cameraManPhoto from '@/public/homeImgs/homeBg/cameraMan.jpg';
import firstPhoto from '@/public/homeImgs/introduction/introduction1.jpg';
import secondPhoto from '@/public/homeImgs/introduction/introduction2.jpg';

// Introduction component definition
export const Introduction: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section className='border-[1px] border-black/60'>
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
          <div className='h-screen w-[80%] grid grid-cols-2 grid-rows-2 items-center justify-center'>
            {/* Content */}
            <div className="relative z-10 text-center col-span-1">
              <h1
                data-scroll
                data-scroll-speed="-1.0"
                className="col-span-1 text-xl text-transparent bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.3)]"
              >
                Redefining Beauty <br/> Beyond Stereotypes
              </h1>
            </div>

            <div data-scroll data-scroll-speed="-0.5" data-scroll-direction="horizontal" className='relative h-[27rem] w-[22rem] row-start-1 row-end-3 mx-start drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] mt-[8rem]'>
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

            <div className='absolute h-[2px] bg-black w-[90%] -translate-y-10 translate-x-10 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
            <div data-scroll data-scroll-speed="-1.5" data-scroll-direction="horizontal" className="relative mb-10">
              <p
                className="text-lg text-left text-white bg-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-6 backdrop-blur-3xl inset-0 z-0"
              >
                In a world where fashion has long been a stronghold of unattainable beauty standards, it is crucial to question and challenge these norms. At "What About Beauty," we explore how the fashion industry is transforming its ideals of beauty and how these transformations impact our perception of what it means to be truly beautiful.
              </p>
            </div>

            <div data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal" className="relative -translate-y-">
              <p
                className="text-lg text-left text-white bg-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] p-4 inset-0 z-0"
              >
                The fashion industry has a long history of promoting a single standard of beauty that often excludes those who do not fit into strict molds. However, in recent years, we have seen a shift towards greater inclusion and diversity. While these changes are promising, it is essential to ask whether they are genuine or merely marketing strategies.
              </p>
            </div>
            <div className='absolute h-[4px] bottom-[9rem] border-[1px] bg-black w-[90%] -left-[10rem] translate-x-10 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>

            <div data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal" className='relative h-[17rem] w-[30rem] mx-auto drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] mb-5'>
            <Image
                src={secondPhoto}
                alt="Model section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='hover:scale-105 duration-300 hover:duration-300'
              />
              </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Introduction;
