// 'use client'
'use client';

// Importaciones de bibliotecas externas ->
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Importing Hooks and Utilities components ->
import { useCountdown } from '../util/useCountdown';
import useLocoScroll from './components/hooks/useLocoScroll';
import LocoScrollContext from '../util/LocoScrollContext';
import CustomCursor from './components/sharedComponents/CustomCursor/CustomCursor';

// Home components ->
import { ButtonStart } from './components/buttons/ButtonStart';
import { HeaderM } from './components/homeComponents/Header';
import { Introduction } from './components/homeComponents/Introduction';
import { Stereotypes } from './components/homeComponents/Stereotypes';
import { Nav } from './components/sharedComponents/Nav';
import Credits from './components/homeComponents/Credits';
import { Actors } from './components/homeComponents/Actors';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(true);

  // Using the custom hook for the timer
  useCountdown(1, () => setPreloader(false));

  // GSAP animations for the title and login elements
  useEffect(() => {
    try {
      gsap.to('.animate-title2', { opacity: 0, y: 100, duration: 1, delay: 0.5 });
      gsap.to('.animate-login', { opacity: 0, y: 120, duration: 1, delay: 0.5 });
    } catch (error) {
      console.error('Error with GSAP animations:', error);
    }
  }, []);

   // Custom hook to initialize LocoScroll
  const locoScrollInstance = useLocoScroll(!preloader);

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
        </div>
      ) : (
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
      )}
    </LocoScrollContext.Provider>
  );
};

export default Home;