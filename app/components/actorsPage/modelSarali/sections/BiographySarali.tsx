import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/saraliModal/SaraliBiography.jpeg'

const BiographySarali: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6"
          >
            Biography
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
                In feugiat justo non elit rutrum, non lacinia leo luctus. Aliquam tincidunt eu tortor ac faucibus. Pellentesque blandit varius sapien, eget consectetur ligula maximus in. Praesent vulputate nisi mi, at pulvinar nulla tristique id.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
                Quisque cursus sagittis mauris id aliquet. Donec lacinia ipsum quis ullamcorper vehicula. Duis mattis, eros id porta bibendum, nisi mi cursus quam, ac pretium lorem ex eget purus.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
                Sed accumsan massa sit amet lobortis cursus. Donec et lacinia est. Etiam id gravida ante, vitae malesuada tellus. Ut efficitur malesuada ante non pellentesque.
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-80 w-full'>
          <Image 
            src={rightPhoto} 
            alt='Sarali Biography' 
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
}

export default BiographySarali;
