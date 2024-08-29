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
import Actors from './components/homeComponents/Actors';
import Models from './components/homeComponents/Modal';

import { I18nextProvider } from 'react-i18next';
import i18n from '../util/i18n';

// Home components (cargados de manera diferida) ->
const ButtonStart = dynamic(() => import('./components/buttons/ButtonStart'), { loading: () => <p></p> });
const Introduction = dynamic(() => import('./components/homeComponents/Introduction'), { loading: () => <p></p> });
const Stereotypes = dynamic(() => import('./components/homeComponents/Stereotypes'), { loading: () => <p></p> });
const Nav = dynamic(() => import('./components/sharedComponents/Nav'), { loading: () => <p>.</p> });
const Credits = dynamic(() => import('./components/homeComponents/Credits'), { loading: () => <p></p> });


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleActorClick = (index: number) => {
    console.log('Actor Clicked:', index);
    setOpenModalIndex(index);
  };


  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

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

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
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
            {/* <CustomCursor /> */}
            <Nav />
            <ButtonStart />
            <HeaderM />
            <main className="relative h-full w-screen">
              <Introduction />
              {/* <Stereotypes /> */}
              <Actors onActorClick={handleActorClick} />
              <Models openModalIndex={openModalIndex} handleCloseModal={handleCloseModal} />
              <Credits />
            </main>
          </div>
        )}
      </LocoScrollContext.Provider>
    </I18nextProvider>
  );
};

export default Home;
