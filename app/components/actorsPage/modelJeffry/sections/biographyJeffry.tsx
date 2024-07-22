import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/jeffryModal/biographyPhoto.jpg'
import mainSecondPhoto from '@/public/homeImgs/actorsModals/jeffryModal/modalMainSecond.jpg'

const BiographyJeffrey: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-[42rem] w-full'>
      <div className='border-b-[3px] border-black absolute h-full w-[100%] grid grid-cols-2 gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative flex flex-col items-center justify-start h-[100%] w-[100%] mx-auto my-auto'>
          <div className='top-0 translate-y-5'>
            <div className='border-4 bg-slate-200/40 z-10 border-black backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
              <h1 data-scroll data-scroll-speed="-0.2"
                className="text-2xl p-2 text-transparent duration-1000 bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                Biography
              </h1>
            </div>
            <div className='absolute w-[100%] left-0 bg-black h-[2px] -translate-y-12 2xl:translate-x-[7.7rem] xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
          </div>
          <div className='-translate-x-10 translate-y-8'>
              <div className='border-4 p-5 bg-black text-white border-black backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
                <p className='translate-x-3 mx-6'>
                  In feugiat justo non elit rutrum, non lacinia leo luctus. Aliquam tincidunt eu tortor ac faucibus. Pellentesque blandit varius sapien, eget consectetur ligula maximus in. Praesent vulputate nisi mi, at pulvinar nulla tristique id.
                </p>
              </div>
              <div className='absolute w-[100%] left-0 bg-black h-[2px] -translate-y-[3.8rem] 2xl:translate-x-[7.7rem] xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
            </div>
            <div className='translate-x-72 translate-y-0 mt-16'>
              <div className='border-4 p-5 bg-black text-white border-black backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
                <p className='translate-x-3 mx-6'>
                Quisque cursus sagittis mauris id aliquet. Donec lacinia ipsum quis ullamcorper vehicula. Duis mattis, eros id porta bibendum, nisi mi cursus quam, ac pretium lorem ex eget purus. Pellentesque euismod ac urna egestas semper. Aliquam id vulputate tortor, eu venenatis est. Suspendisse potenti. Phasellus ultrices bibendum faucibus. Mauris lobortis interdum suscipit. 
                </p>
              </div>
              <div className='absolute w-[5rem] -left-[3rem] bg-black h-[2px] -translate-y-20 2xl:translate-x-[0rem] xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
            </div>
            <div className='translate-x-40 translate-y-0 mt-10'>
              <div className='border-4 p-5 bg-black text-white border-black backdrop-blur-lg items-start justify-start drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
              <div className='absolute h-[10rem] -top-[18.7rem] -left-[0.2rem] bg-black w-[2px] 2xl:translate-x-20 translate-y-44 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
                <p className='translate-x-3 mx-6'>
                Sed accumsan massa sit amet lobortis cursus. Donec et lacinia est. Etiam id gravida ante, vitae malesuada tellus. Ut efficitur malesuada ante non pellentesque. Duis eu ultrices neque. Morbi suscipit ligula sed elit pretium gravida nec sed justo. Praesent vel augue in lectus finibus tristique eu in nisi. Phasellus quis purus non turpis finibus mollis.
                </p>
              </div>
              <div className='absolute w-[14rem] right-[6.4rem] bg-black h-[2px] -translate-y-20 2xl:translate-x-[17.7rem] xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
            </div>
          <div className='absolute h-[7rem] top-0 -right-[0.2rem] bg-black w-[2px] 2xl:translate-x-20 translate-y-44 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
          <div className='absolute h-[5rem] top-0 left-[33%] bg-black w-[2px] 2xl:-translate-x-0 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
          <div className='absolute h-[7rem] top-[3.5rem] right-[11%] bg-black w-[2px] 2xl:-translate-x-0 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>
        </div>
        <div className='h-[100%] w-[100%] mx-auto my-auto'>
          <div className='relative flex flex-col items-center z-[-1] justify-center h-[100%] w-[100%] mx-auto my-auto'>
            
            <div className='absolute h-[100%] right-[24rem] bg-black w-[2px] -translate-y-0 2xl:-translate-x-0 xl:-translate-x-0 z-[-1] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'></div>

            <div className='absolute -top-[3%] h-[100%] w-[60%] -right-16 translate-y-[1.1rem] drop-shadow-[0_1.5px_5px_rgba(0, 0, 0, 2)]'>
              <div className='relative h-[101%] w-[90%] translate-y-0 -translate-x-0'>
                <Image src={rightPhoto} alt='JeffreyBiography' fill objectFit="cover" placeholder="blur" className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] z-50 hover:scale-105 hover:duration-200 duration-200' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiographyJeffrey;