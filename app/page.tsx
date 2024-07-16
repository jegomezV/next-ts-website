'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

// Importando Hooks y componentes de utilidades ->
import { useCountdown } from '../util/useCountdown';
import useLocoScroll from './components/hooks/useLocoScroll';
import LocoScrollContext from '../util/LocoScrollContext';
import CustomCursor from './components/sharedComponents/CustomCursor/CustomCursor';

import HeaderM from './components/homeComponents/Header';

// Home components (cargados de manera diferida) ->
const ButtonStart = dynamic(() => import('./components/buttons/ButtonStart'), { loading: () => <p></p> });
const Introduction = dynamic(() => import('./components/homeComponents/Introduction'), { loading: () => <p></p> });
const Stereotypes = dynamic(() => import('./components/homeComponents/Stereotypes'), { loading: () => <p></p> });
const Nav = dynamic(() => import('./components/sharedComponents/Nav'), { loading: () => <p>.</p> });
const Credits = dynamic(() => import('./components/homeComponents/Credits'), { loading: () => <p></p> });
const Actors = dynamic(() => import('./components/homeComponents/Actors'), { loading: () => <p></p> });

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useCountdown(0, () => setPreloader(false)); // Temporizador de preloader

  const locoScrollInstance = useLocoScroll(componentsLoaded);

  useEffect(() => {
    if (locoScrollInstance) {
      locoScrollInstance.update();
    }
  }, [locoScrollInstance, componentsLoaded]);

  useEffect(() => {
    setComponentsLoaded(true); // Marcar como cargado cuando los componentes hayan terminado de cargarse
  }, [preloader]);

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
