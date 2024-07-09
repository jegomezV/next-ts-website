"use client"

import React from 'react';
import gsap from 'gsap';
import { ButtonStart } from './components/buttons/ButtonStart';
import { CardSpotlight } from './components/utils/CardSpotlight';
import { HeaderM } from './components/homeComponents/Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax'

const Home = () => {
  React.useEffect(() => {
    gsap.to('.square', {
      duration: 10,
      ease: "elastic.out(1,0.3)",
      y: -250,
      x: 500,
      repeat: -1,
      });
  }, []);

  return (
    <ParallaxProvider>
      <div className="h-full w-screen">

        <HeaderM />
        <ButtonStart />

        <main className="relative h-full w-screen">
          {/* <Parallax scale={[0.7, 1.2]} translateX={[10, -9]} translateY={[-10, -40]}>
            <CardSpotlight configs='h-50 absolute w-screen border-4'>
              <section className='relative w-full mx-auto rounded-full grid grid-cols-1 gap-3'>
                <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap m-4'>
                  
                </article>
              </section>
            </CardSpotlight>
          </Parallax> */}

          <section>
            <article>
              <div className="min-h-screen w-[80%] mx-auto flex justify-center items-center border-[1px]">
                <h1 className='text-4xl text-center text-white'>This is the second section</h1>
                <div className='square h-[5rem] w-[5rem] bg-white absolute bottom-20'></div>
              </div>
            </article>
          </section>

          <section>
            <article>
              <div className="h-96 w-[80%] mx-auto flex justify-center items-center border-[1px]">
                <h1 className='text-4xl text-center text-white'>This is the third section</h1>
              </div>
            </article>
          </section>

        </main>
      </div>
    </ParallaxProvider>
  );
};
export default Home;
