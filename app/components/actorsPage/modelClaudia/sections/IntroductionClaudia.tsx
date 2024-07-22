import React from 'react';
import Image from 'next/image';

import mainPhoto from '@/public/homeImgs/actorsModals/jeffryModal/modalMain.jpg'
import mainSecondPhoto from '@/public/homeImgs/actorsModals/jeffryModal/modalMainSecond.jpg'

const IntroductionClaudia: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-[42rem] w-full'>
      <div className='border-b-[3px] border-black absolute h-full w-[100%] grid grid-cols-2 gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative flex flex-col items-center justify-center h-[100%] w-[100%] mx-auto my-auto'>
          <div className='h-[50%] w-[40%] -translate-y-24 -translate-x-32'>
            <Image src={mainPhoto} alt='Jeffrey' className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] hover:scale-105 hover:duration-200 duration-200' />
          </div>
          <div className='-translate-y-36'>
            <div className='border-4 bg-slate-200/40 z-10 border-black backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
              <h1 data-scroll data-scroll-speed="-0.2"
                className="text-2xl p-2 text-transparent duration-1000 bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                Claudia Ruiz
              </h1>
            </div>
            <div className='absolute w-[115%] left-0 bg-black h-[2px] -translate-y-12 2xl:translate-x-[7.7rem] xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
          </div>
          <div className='absolute h-[15rem] -bottom-0 left-[33%] bg-black w-[2px] 2xl:-translate-x-0 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
        </div>
        <div className='h-[100%] w-[100%] mx-auto my-auto'>
          <div className='relative flex flex-col items-center z-[-1] justify-center h-[100%] w-[100%] mx-auto my-auto'>

            <div className='-translate-y-32 translate-x-8 '>
              <h1 data-scroll data-scroll-speed="-0.2"
                className="text-2xl p-2 text-transparent duration-1000 bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                Introduction
              </h1>
            </div>

            <div className='-translate-y-28 translate-x-10'>
              <div className='border-4 p-5 bg-black text-white border-black backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
                <p className='translate-x-3 mx-6'>
                  In feugiat justo non elit rutrum, non lacinia leo luctus. Aliquam tincidunt eu tortor ac faucibus. Pellentesque blandit varius sapien, eget consectetur ligula maximus in. Praesent vulputate nisi mi, at pulvinar nulla tristique id. Praesent ultrices justo sit amet enim vulputate, vel gravida diam facilisis. Nunc bibendum maximus magna ullamcorper fringilla. Donec vel aliquet lacus. Sed luctus velit a viverra tempor.
                </p>
              </div>
            </div>
            <div className='absolute h-[113%] left-0 bg-black w-[2px] -translate-y-10 2xl:-translate-x-0 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>

            <div className='absolute bottom-[20%]  h-[25%] w-[60%] left-0 translate-y-5 drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
              <div className='relative h-[25%] w-[90%] translate-y-0 -translate-x-0'>
                <Image src={mainSecondPhoto} alt='Jeffrey' objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionClaudia;