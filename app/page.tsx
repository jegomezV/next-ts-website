'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import Image from 'next/image';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { ButtonStart } from './components/buttons/ButtonStart';
import { HeaderM } from './components/homeComponents/Header';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import firstPhoto from '../public/homeImgs/homeBg/vitiGirlOne.jpg';
import secondPhoto from '../public/homeImgs/homeBg/cameraMan.jpg';
import thirdPhoto from '../public/homeImgs/homeBg/artAlbine.jpg';
import lastPhoto from '../public/homeImgs/homeBg/grupalPhoto.jpg';

import modelPhoto from '../public/homeImgs/homeBg/modelsSection/alexaMainPhoto.jpg';
import modelPhoto2 from '../public/homeImgs/homeBg/modelsSection/diegoMainPhoto.jpg';
import modelPhoto3 from '../public/homeImgs/homeBg/modelsSection/jeffryMainPhoto.jpg';
import modelPhoto4 from '../public/homeImgs/homeBg/modelsSection/saraliMainPhoto.jpeg';
import modelPhoto5 from '../public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto1.jpg';
import modelPhoto6 from '../public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto2.jpg';

const Home = () => {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'horizontal', // Indica que el scroll debe ser horizontal
    });

    gsap.from('.intro-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.intro-text', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });

    scroll.on('scroll', () => {
      gsap.to('.fade-in', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const modelPhotos = [modelPhoto, modelPhoto2, modelPhoto3, modelPhoto4, modelPhoto5, modelPhoto6];

  return (
    <ParallaxProvider>
      <div className="h-full w-screen">

        <HeaderM />
        <ButtonStart />

        <main className="relative h-full w-screen">

          <section>
            <article>
              <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-[1px]">
                <Image
                  src={secondPhoto}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

                <h1 className='text-4xl text-center text-white'>Redefining Beauty Beyond Stereotypes</h1>
                <p className="text-lg text-center text-white mt-4">
                  We explore the transformation of the fashion industry and its impact on the perception of beauty.
                </p>
              </div>
            </article>
          </section>

          <section>
            <article>
              <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-[1px]">
                <Image
                  src={firstPhoto}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

                <h1 className='text-4xl text-center text-white'>The Weight of Beauty Stereotypes</h1>
                <p className="text-lg text-center text-white mt-4">
                  Beauty stereotypes imposed by the fashion industry have had profound negative repercussions
                  on the mental and emotional health of many individuals.
                  From the pressure to achieve impossible bodies to the exclusion of those who don't fit traditional molds,
                  these stigmas have limited the potential of countless people.
                  It's time to challenge these standards and advocate for beauty that includes everyone.
                </p>
              </div>
            </article>
          </section>

          <section>
            <article>
              <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-[1px]">
                <Image
                  src={thirdPhoto}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

                <h1 className='text-4xl text-center text-white'>Real Inclusion: More Than a Marketing Trend</h1>
                <p className="text-lg text-center text-white mt-4">
                  Inclusion must be genuine and not just a marketing strategy.
                  Many brands have been criticized for exploiting diversity as a passing trend
                  without making substantial changes in their practices.
                  Our mission is to expose these practices and promote authentic inclusion,
                  where each person is valued for their individuality.
                </p>
              </div>
            </article>
          </section>

          <section data-scroll-section>
            <article>
              <div className="relative h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-[1px]">
                <Image
                  src={lastPhoto}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]"
                />
              </div>
              <div className="w-full flex overflow-x-scroll h-screen items-center">
                {modelPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="min-w-[30%] h-[80%] flex justify-center items-center bg-white mx-4"
                  >
                    <Image
                      src={photo}
                      alt={`Model ${index + 1}`}
                      
                      objectFit="cover"
                      className='h-full w-full'
                      
                    />
                  </div>
                ))}
              </div>
            </article>
          </section>

        </main>
      </div>
    </ParallaxProvider>
  );
};
export default Home;
