'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ButtonStart } from './components/buttons/ButtonStart';
import { HeaderM } from './components/homeComponents/Header';
import { Introduction } from './components/homeComponents/Introduction';
import { Stereotypes } from './components/homeComponents/Stereotypes';
import { Marketing } from './components/homeComponents/Marketing';
import { ModelsSection } from './components/homeComponents/ModelsSection';
import useLocoScroll from './components/hooks/useLocoScroll';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [preloader, setPreloader] = React.useState(true);
  const [timer, setTimer] = React.useState(0);
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

  useLocoScroll(!preloader);

  return (
    <>
      {preloader ? (
        <div className='loader-wrapper absoluteP'>
          <h1 className="text-6xl">Loading</h1>
          <h2 className="text-6xl">Under construction</h2>
        </div>
      ) : (
        <>
          <div id='main-container' className="h-full w-screen" data-scroll-container>
            <ButtonStart />
            <HeaderM />
            <main className="relative h-full w-screen">
              <Introduction />
              <Stereotypes />
              <Marketing />
              <ModelsSection />
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
