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
          <div className='absolute left-[7rem] top-[2rem]'>
            <h1 className='text-black text-4xl'>Models</h1>
          </div>
          {modelPhotos.map((photo, index) => (
            <div data-scroll data-scroll-speed="-0.5"
              key={index}
              className="min-w-[35%] h-[75%] flex justify-center items-center mx-4"
            >
              <Image
                src={photo}
                alt={`Model ${index + 1}`}
                fill
                className='h-full w-full shadow-[0_35px_75px_-25px_rgba(0,0,0,0.3)] shadow-black'
              />
            </div>
          ))}
        </div>
      </article>
    </section>
  )
};
