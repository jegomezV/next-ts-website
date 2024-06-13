"use client"

// import Link from 'next/link';
// import React from 'react';
// import Particles from './components/particles';

import { CardSpotlight } from './components/CardSpotlight';
import { HeaderM } from './components/homeComponents/Header';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax'
// import { HeaderImages } from './components/HeaderImages';

// import firstPhoto from '../public/homeImgs/firstPhoto.jpg';
// import secondPhoto from '../public/homeImgs/secondPhoto.jpg';
// import thirdPhoto from '../public/homeImgs/thirdPhoto.jpg';
// import Image from 'next/image'
const Home = () => {
  return (
    <ParallaxProvider>
    <div className="h-full w-screen border-4 border-red-800">
      
      <HeaderM />
      
        <main className="relative h-full w-screen border-4 border-blue-800">
          {/* <CardSpotlight configs='h-full absolute w-[50%] border-4'>
              {<section className='w-full mx-auto rounded-full z-30 grid grid-cols-1 gap-3 border-4'>
                <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap'>
                  <div className="group text-neutral-950">
                    <h1 className='text-center text-6xl  text-white'>Where is the</h1>
                    <div className="overflow-hidden">
                      <div className="-translate-y-2 -translate-x-14 mx-auto skew-y-0 text-6xl text-center text-white transition duration-500 group-hover:-translate-y-[118%] group-hover:skew-y-12">&rarr; Art</div>
                      <div className="relative text-white translate-y-[250%] text-right text-5xl skew-y-12 transition duration-500 group-hover:-translate-y-8 group-hover:-translate-x-60 group-hover:skew-y-0"> &rarr; Beauty</div>
                    </div>
                  </div>
                </article>
              </section>}
          </CardSpotlight> */}
          <div className='relative w-[80%] rounded-full z-30  border-4'>
       
              <h3 className='text-center text-4xl text-white'>Welcome to our website</h3>
              <p className='text-center text-xl text-white'>We provide the best services for you.</p>
       
          </div>
        </main>
    </div>
    </ParallaxProvider>
  );
};
export default Home;