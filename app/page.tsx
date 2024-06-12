"use client"

// import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import { Nav } from './components/nav';
import { CardSpotlight } from './components/CardSpotlight';
import { Parallax } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax';
import { HeaderImages } from './components/HeaderImages';

import firstPhoto from '../public/homeImgs/firstPhoto.jpg';
import secondPhoto from '../public/homeImgs/secondPhoto.jpg';
import thirdPhoto from '../public/homeImgs/thirdPhoto.jpg';
import Image from 'next/image'

const Home = () => {
  return (
    <ParallaxProvider>
      <div className='w-screen h-full relative'>
        <header className='absolute w-full mx-auto'>
          <div className='fixed z-10 top-0 '>
            <Nav />
          </div>
        </header>
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden">


          <div className="hidden w-screen  animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0" />
          <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
          <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text">
            What about beauty?
          </h1>
          <div className="hidden w-screen animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500 translate-y-10">
              Under construction
            </h2>
          </div>
          <HeaderImages />
        </div>

        <main className='relative w-[80%] mx-auto'>

          <div className='mx-auto w-[80%] h-full'>
          <Parallax scale={[0.9, 1.1]} translateX={[10, -7]}>
            <CardSpotlight configs=''>
              <section className='relative w-full mx-auto rounded-full z-30 grid grid-cols-1 gap-3'>
                <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap m-4'>
                  <div className="group relative w-full h-full text-neutral-950">
                    <h1 className='text-center text-6xl mb-7 text-white'>Where is the</h1>
                    <div className="overflow-hidden">
                      <div className="-translate-y-2 -translate-x-14 mx-auto skew-y-0 text-6xl text-center text-white transition duration-500 group-hover:-translate-y-[118%] group-hover:skew-y-12">&rarr; Art</div>
                      <div className="relative text-white translate-y-[250%] text-right text-5xl skew-y-12 transition duration-500 group-hover:-translate-y-8 group-hover:-translate-x-60 group-hover:skew-y-0"> &rarr; Beauty</div>
                    </div>
                  </div>
                </article>
              </section>
            </CardSpotlight>
          </Parallax>

          <Parallax speed={30}>
            <section className='relative h-full mx-auto m-10 rounded w-full grid grid-cols-2 gap-3'>
              <div className='absolute w-full grid grid-cols-2'>
                <Parallax speed={-1} translateX={[10, -8]}>
                  <div className='relative flex justify-end items-end'>
                    <Image
                      className='w-96 lg:translate-x-5 lg:translate-y-20 xl:translate-x-5 xl:translate-y-20 z-20'
                      width={1200}
                      height={1200}
                      src={firstPhoto.src}
                      alt="Picture of the author"
                    />
                  </div>
                </Parallax>

                <Parallax speed={-1} translateX={[-10, 6]}>
                  <div className='relative file:flex justify-start items-end'>
                    <Image
                      width={800}
                      height={800}
                      className='absolute file:flex justify-start items-end'
                      src={secondPhoto.src}
                      alt="Picture of the author"
                    />
                  </div>
                </Parallax>

                <Parallax speed={-1} translateX={[-10, 8]}>
                  <div className='relative flex justify-end items-start'>
                    <Image
                      width={1200}
                      height={1200}
                      className='w-96 lg:translate-x-60 lg:-translate-y-40 xl:translate-x-60 xl:-translate-y-40'
                      src={thirdPhoto.src}
                      alt="Picture of the author"
                    />
                  </div>
                </Parallax>

              </div>
            </section>
          </Parallax>
          </div>
          

        </main>
      </div>
    </ParallaxProvider>


  );
};

export default Home;
