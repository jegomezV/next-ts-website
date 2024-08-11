import Image from 'next/image';
import React from 'react';

import firstPhoto from '@/public/homeImgs/stereotypes/stereotypes1.jpg';
import secondPhoto from '@/public/homeImgs/stereotypes/stereotypes2.jpg';

export const Stereotypes: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section className='border-[1px] border-black/60 hidden md:block'>
      <article className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
        <div className='min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 md:px-8'>

          {/* Left Column */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            <div
              data-scroll
              data-scroll-speed="-0.5"
              className='relative z-20 w-full h-64 md:h-[22rem] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'>
              <Image
                src={firstPhoto}
                alt="Stereotypes section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='hover:scale-105 duration-300'
              />
            </div>
            <p
              data-scroll
              data-scroll-speed="0.5"
              className="text-sm md:text-md lg:text-lg text-black bg-amber-100 border-[1px] border-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-3 md:p-4 leading-relaxed backdrop-blur-3xl">
              Beauty stereotypes in fashion shape societal norms, influence self-esteem, and impact careers. At "What About Beauty," we highlight the negative effects of these stereotypes and the need for authentic inclusion. Through our models' stories, we show that beauty is diverse and that the industry must genuinely evolve to reflect this.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            <h1
              data-scroll
              data-scroll-speed="-1.0"
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-transparent bg-black cursor-default font-display bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)] text-center">
              Challenging <br /> Beauty Stereotypes
            </h1>
            <p
              data-scroll
              data-scroll-speed="1.0"
              className="text-sm md:text-md lg:text-lg text-black bg-amber-100 border-[1px] border-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-3 md:p-4 leading-relaxed">
              The fashion industry has a long history of promoting a single standard of beauty that often excludes those who do not fit into strict molds. However, in recent years, we have seen a shift towards greater inclusion and diversity. While these changes are promising, it is essential to ask whether they are genuine or merely marketing strategies.
            </p>
            <div
              data-scroll
              data-scroll-speed="0.5"
              className='relative z-20 w-full h-64 md:h-[22rem] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'>
              <Image
                src={secondPhoto}
                alt="Stereotypes section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='hover:scale-105 duration-300'
              />
            </div>
          </div>

        </div>
      </article>
    </section>
  );
};

export default Stereotypes;
