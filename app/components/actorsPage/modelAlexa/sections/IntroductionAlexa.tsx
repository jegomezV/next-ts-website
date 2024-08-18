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
            Alexandra Jordan, una modelo profesional de 34 años, conocida por su nombre artístico “Cherry Bomb”, ha tallado su camino en la industria de la moda con una determinación que refleja su pasión por el arte y la autoexpresión. Aunque inicialmente su viaje comenzó con estudios en Artes Plásticas y Diseño Gráfico, cuestiones económicas truncaron su educación. Sin embargo, estos desafíos no apagaron su espíritu creativo; más bien, la condujeron a descubrir el modelaje como una nueva forma de arte y expresión.
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
