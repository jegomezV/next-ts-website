import React from 'react';
import Image from 'next/image';

import mainPhoto from '@/public/homeImgs/actorsModals/alexaModal/AlexaMain.jpg';
import mainSecondPhoto from '@/public/homeImgs/actorsModals/alexaModal/AlexaModel2.jpg';

const IntroductionAlexa: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 overflow-x-clip'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start justify-center text-center md:text-left'>
          <div className='relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
            <Image 
              src={mainPhoto} 
              alt='Alexa' 
              className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <h1 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-3xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mt-8"
          >
            Alexa García
          </h1>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6"
          >
            Introduction
          </h2>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <p className='text-gray-700'>
              In feugiat justo non elit rutrum, non lacinia leo luctus. Aliquam tincidunt eu tortor ac faucibus. Pellentesque blandit varius sapien, eget consectetur ligula maximus in. Praesent vulputate nisi mi, at pulvinar nulla tristique id. Praesent ultrices justo sit amet enim vulputate, vel gravida diam facilisis. Nunc bibendum maximus magna ullamcorper fringilla. Donec vel aliquet lacus. Sed luctus velit a viverra tempor.
            </p>
          </div>
          <div className='relative mt-8 h-[200px] w-full'>
            <Image 
              src={mainSecondPhoto} 
              alt='Alexa Second' 
              className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionAlexa;
