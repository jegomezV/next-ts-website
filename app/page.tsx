"use client"

// import Link from 'next/link';
// import React from 'react';
// import Particles from './components/particles';

import { CardSpotlight } from './components/CardSpotlight';
import { HeaderM } from './components/homeComponents/Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax'

// import firstPhoto from '../public/homeImgs/firstPhoto.jpg';
// import secondPhoto from '../public/homeImgs/secondPhoto.jpg';
// import thirdPhoto from '../public/homeImgs/thirdPhoto.jpg';
// import Image from 'next/image'
const Home = () => {
  return (
    <ParallaxProvider>
      <div className="h-full w-screen">

        <HeaderM />

        <main className="relative h-full w-screen">
          <Parallax scale={[0.7, 1.2]} translateX={[10, -9]} translateY={[-10, -40]}>
            <CardSpotlight configs='h-50 absolute w-screen border-4'>
              <section className='relative w-full mx-auto rounded-full z-30 grid grid-cols-1 gap-3'>
                <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap m-4'>
                  <div className="group relative w-full h-full text-neutral-950">
                    <h1 className='text-center text-6xl mb-7 text-white'>Where is the</h1>
                    <div className="overflow-hidden">
                      <div className="-translate-y-2 -translate-x-14 mx-auto skew-y-0 text-6xl text-center text-white transition duration-500 group-hover:-translate-y-[118%] group-hover:skew-y-12">&rarr; Art?</div>
                      <div className="relative text-white translate-y-[250%] text-right text-5xl skew-y-12 transition duration-500 group-hover:-translate-y-8 group-hover:-translate-x-60 group-hover:skew-y-0"> &rarr; Beauty?</div>
                    </div>
                  </div>
                </article>
              </section>
            </CardSpotlight>
          </Parallax>

          <section>
            <article>
              <div className="h-96 w-[80%] mx-auto flex justify-center items-center border-[1px]">
                <h1 className='text-4xl text-center text-white'>This is the second section</h1>
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