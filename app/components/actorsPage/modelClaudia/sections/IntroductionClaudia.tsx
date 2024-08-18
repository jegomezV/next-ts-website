import React from 'react';
import Image from 'next/image';

import mainPhoto from '@/public/homeImgs/actorsModals/jeffryModal/modalMain.jpg';
import mainSecondPhoto from '@/public/homeImgs/actorsModals/jeffryModal/modalMainSecond.jpg';

const IntroductionClaudia: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 overflow-x-clip'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start justify-center text-center md:text-left'>
          <div className='relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
            <Image
              src={mainPhoto}
              alt='Claudia'
              className='object-cover w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
            />
          </div>
          <h1
            data-scroll
            data-scroll-speed="-0.2"
            className="text-3xl md:text-4xl lg:text-6xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mt-8"
          >
            Claudia Ruiz
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
            En las bulliciosas calles de Cali, donde el sol se mezcla con el ritmo acelerado de la vida, emerge un faro de diversidad y empoderamiento en la industria del modelaje: Perfil Class. Esta agencia, dirigida por Claudia Ruiz, no es solo un nombre en el mundo de la moda, sino una narrativa de resistencia y éxito contra viento y marea.
            </p>
          </div>
          <div className='relative mt-8 h-[200px] w-full'>
            <Image
              src={mainSecondPhoto}
              alt='Claudia Second'
              className='object-cover w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionClaudia;
