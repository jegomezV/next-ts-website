'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ButtonStart } from './components/buttons/ButtonStart';
import { HeaderM } from './components/homeComponents/Header';
import { Introduction } from './components/homeComponents/Introduction';
import { Stereotypes } from './components/homeComponents/Stereotypes';
import { Nav } from './components/general/Nav';
import { Credits } from './components/homeComponents/Credits';
import CustomCursor from './components/general/CustomCursor/CustomCursor'
import useLocoScroll from './components/hooks/useLocoScroll';
import LocoScrollContext from '../util/LocoScrollContext'


import ParallaxSlider from './components/buttons/adds/Test';
import { Actors } from './components/homeComponents/Actors';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = React.useState(100);
  const id = useRef<number | undefined>(undefined);

  const clear = () => {
    if (id.current !== undefined) {
      window.clearInterval(id.current);
      setPreloader(false);
    }
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => {
      if (id.current !== undefined) {
        window.clearInterval(id.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  useEffect(() => {
    gsap.to('.animate-title2', { opacity: 0, y: 100, duration: 1, delay: 0.5 });
    gsap.to('.animate-login', { opacity: 0, y: 120, duration: 1, delay: 0.5 });
  }, []);

  const locoScrollInstance = useLocoScroll(!preloader);

  const mn = gsap.matchMedia();

  mn.add("(max-width: 500px)", () => {
    gsap.to(".box",{
    rotation: 360,
    ease: 'none',
    repeat:-1,
    duration:2
    }
    )
  })

  return (
    <LocoScrollContext.Provider value={locoScrollInstance}>
      {preloader ? (
        <div className='loader-wrapper absoluteP'>
        <h1 className='
          z-10 text-2xl text-transparent duration-1000
          bg-white cursor-default
          animate-title2 font-display sm:text-5xl md:text-6xl xl:text-8xl
          whitespace-nowrap bg-clip-text drop-shadow-[0_0.1px_0.8px_rgba(255,255,255,2)]'>
          Loading <br />
        </h1>
        <h2 className='
          z-10 text-2xl text-transparent duration-1000
          bg-white cursor-default
          animate-login font-display sm:text-5xl md:text-6xl xl:text-8xl
          whitespace-nowrap bg-clip-text drop-shadow-[0_0.1px_0.8px_rgba(255,255,255,2)]'>
          Preparing Your Content... <br />
        </h2>
        <div className='box flex justify-center content-center bg-white size-40 text-black'>
            <h1> contenedor</h1>
        </div>
      </div>
      ) : (
        <>
          <div id='main-container' className="h-full w-screen" data-scroll-container ref={ref}>
            <CustomCursor />
            <Nav />
            <ButtonStart />
            <HeaderM />
            <main className="relative h-full w-screen">
              <Introduction />
              <Stereotypes />
              <Actors />
              <Credits />
            </main>
          </div>
        </>
      )}
   </LocoScrollContext.Provider>
  );
};

export default Home;