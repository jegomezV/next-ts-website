import Image from 'next/image';

import modelPhoto from '@/public/homeImgs/homeBg/modelsSection/alexaMainPhoto.jpg';
import modelPhoto2 from '@/public/homeImgs/homeBg/modelsSection/diegoMainPhoto.jpg';
import modelPhoto3 from '@/public/homeImgs/homeBg/modelsSection/jeffryMainPhoto.jpg';
import modelPhoto4 from '@/public/homeImgs/homeBg/modelsSection/saraliMainPhoto.jpeg';
import modelPhoto5 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto1.jpg';
import modelPhoto6 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto2.jpg';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { use } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';

const modelPhotos = [modelPhoto, modelPhoto2, modelPhoto3, modelPhoto4, modelPhoto5, modelPhoto6];

export const ModelsSection: React.FC = (): JSX.Element => {

  return (
    <section data-scroll-section>
      <article>
        <div className="w-full flex overflow-x-scroll h-screen items-center relative space-x-4">
          
          {modelPhotos.map((photo, index) => (
            <div data-scroll data-scroll-speed="-0.5"
              key={index}
              className="min-w-[35%] h-[75%] flex justify-center items-center mx-4"
            >
              <Image
                src={photo}
                alt={`Model ${index + 1}`}
                fill
                className='h-full w-full drop-shadow-[0_10px_30px_rgba(0,0,0,2)]'
              />
            </div>
            
          ))}
          <div className='absolute left-[2rem] bottom-[1rem]'>
            <h1 className="
            z-10 text-2xl text-transparent duration-1000
            bg-black cursor-default
            animate-title font-display sm:text-3xl md:text-4xl xl:text-6xl
            whitespace-nowrap bg-clip-text m-b-10"> Actors <br />
          </h1>
          </div>
        </div>
      </article>
    </section>
  )
};
