import { useEffect } from 'react';
import Image from 'next/image';
import firstPhoto from '@/public/homeImgs/homeBg/albineGirl.jpg';
import secondPhoto from '@/public/homeImgs/homeBg/albineMan.jpg';
import thirdPhoto from '@/public/homeImgs/homeBg/shadowGirl.jpg';

import gsap from 'gsap';

export const Actors: React.FC = (): JSX.Element => {
  useEffect(() => {
    gsap.to(".box", { rotation: 360, x: 100, duration: 1, repeat: -1, yoyo: true });
  }, []);

  return (
    <section data-scroll-section className='relative bg-black h-screen w-screen'>
      {/* Main container with background image */}
      <div className='box absolute bottom-24 left-20 bg-red-800 h-20 w-20 text-white font-bold'>Luis Es Gay</div>
      <Image
            src={secondPhoto}
            alt="Fashion model close-up"
            height={400}
            width={300}
            objectFit="cover"
            priority
            className='box border-[1px] border-black/70'
          />
    </section>
  );
};

export default Actors;
