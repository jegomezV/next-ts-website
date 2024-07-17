import Image from 'next/image';
import React from 'react';

// Importing image file
import Photo1 from '@/public/homeImgs/stereotypes/stereotypes1.jpg';
import Photo2 from '@/public/homeImgs/stereotypes/stereotypes2.jpg';

// Introduction component definition
export const Stereotypes: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section className='border-b-[1px] border-black/60'>
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center">
          <div className='h-screen w-[80%] grid grid-cols-2 grid-rows-2 items-center justify-center'>
            {/* Content */}
            <div className="relative z-10 text-center">
              <h1
                data-scroll
                data-scroll-speed="-1"
                className="col-span-1 text-xl text-transparent bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.3)]"
              >
                Challenging <br/> Beauty Stereotypes
              </h1>
            </div>

            <div data-scroll data-scroll-speed="0.5" className='relative col-start-2 h-[27rem] w-[22rem] drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] mt-[18rem] mx-auto'>
              <Image
                src={Photo2}
                alt="Model section introduction"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
                className='hover:scale-105 duration-300 hover:duration-300'
              />
            </div>

            <div className='absolute h-screen bg-black w-[2px] -translate-y-10 translate-x-10 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] mt-[5rem]'></div>
            <div className='absolute h-[70%] bg-black w-[2px] -translate-y-10 -translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] mt-[5rem]'></div>
            <div className='absolute h-[40%] bg-black w-[2px] -translate-y-10 -translate-x-10 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] mt-[5rem]'></div>
            <div className='absolute h-screen bg-black w-[2px] -translate-y-10 right-[28rem] z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] mt-[5rem]'></div>
            
            <div data-scroll data-scroll-speed="1.5" className="relative mb-10">
              <p
                className="text-lg text-left text-white bg-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)] p-6 backdrop-blur-3xl inset-0 z-0"
              >
                The fashion industry has long been dominated by narrow definitions of beauty, often perpetuating harmful stereotypes that exclude and marginalize many. It's time to challenge these outdated ideals and embrace a more inclusive and diverse perspective on beauty.
              </p>
            </div>

            <div className="relative row-span-2 col-start-2 mt-[15rem]">
              <p
                className="text-lg text-left text-white bg-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] p-4 inset-0 z-0"
              >
                Beauty stereotypes in fashion shape societal norms, influence self-esteem, and impact careers. At "What About Beauty," we highlight the negative effects of these stereotypes and the need for authentic inclusion. Through our models' stories, we show that beauty is diverse and that the industry must genuinely evolve to reflect this.
              </p>
            </div>

            <div data-scroll data-scroll-speed="0.5" data-scroll-direction="horizontal" className='relative h-[17rem] w-[30rem] mx-auto drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] mb-5'>
            <Image
                src={Photo1}
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

export default Stereotypes;
