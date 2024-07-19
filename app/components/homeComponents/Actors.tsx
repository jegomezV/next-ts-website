import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import ModelAlexa from '../actorsPage/modelAlexa';
import ModelClaudia from '../actorsPage/modelClaudia';
import ModelDiego from '../actorsPage/modelDiego';
import ModelJeffry from '../actorsPage/modelJeffry';
import ModelSarali from '../actorsPage/modelSarali';
import ModelZorro from '../actorsPage/modelZorro';

interface ActorsProps {
  onActorClick: (index: number) => void;
}

const modelComponents = [ModelAlexa, ModelDiego, ModelJeffry, ModelSarali, ModelClaudia, ModelZorro];

export const Actors: React.FC<ActorsProps> = ({ onActorClick }): JSX.Element => {
  let images: HTMLElement[] = [];

  useEffect(() => {
    images = Array.from(document.querySelectorAll('.img'));
    images.forEach((image, idx) => {
      if (image instanceof HTMLElement) {
        image.style.backgroundImage = `url(./Parallax/p${idx + 1}.jpg)`;
      }
    });

  }, []);

  return (
    <section id='actors' data-scroll-section className='relative h-screen w-screen'>
      {/* Main container with background image */}
      <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-start">
        <div className="h-[75%] w-[100%] flex justify-start ">
          {/* Each image container now includes hover effects and a click prompt */}
          {<div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div data-scroll data-scroll-speed='2' onClick={() => onActorClick(2)} className="img absolute cursor-pointer left-[-240px] w-[600px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] group-hover:blur-[2px]"></div>
            <div className="relative inset-0 flex cursor-pointer items-center justify-end opacity-0 group-hover:opacity-100 drop-shadow-[0_1.5px_5px_rgba(255,255,255,0.2)] -rotate-90">
              <h1 className="text-2xl absolute 2xl:top-[1.2rem] xl:-top-[0.5rem] 2xl:right-[32rem] xl:right-[26rem] text-transparent duration-1000 bg-white font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">More About ~</span>
                <span className="block">Jeffry</span>
              </h1>
            </div>
          </div>
          }
          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(0)} data-scroll data-scroll-speed='-1' className="img absolute cursor-pointer left-[-170px] w-[600px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] group-hover:blur-sm"></div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90">
              <h1 className="text-2xl absolute text-transparent duration-1000 bg-black 2xl:top-[2rem] xl:top-[1.1rem] 2xl:right-[31.2rem] xl:right-[25rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.5)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">More About ~</span>
                <span className="block">Alexa</span>
              </h1>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(5)} data-scroll data-scroll-speed='2' className="img absolute left-[-30px] cursor-pointer w-[300px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] group-hover:blur-sm"></div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90">
              <div className="text-2xl absolute text-transparent duration-1000 bg-white 2xl:top-[1.7rem] xl:-top-[0.4rem] 2xl:right-[31rem] xl:right-[22rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">More About ~</span>
                <span className="block">Zorro Gris</span>
              </div>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(1)} data-scroll data-scroll-speed='-1' className="img absolute cursor-pointer left-[-200px] w-[600px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] group-hover:blur-sm"></div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90 drop-shadow-[0_1.5px_5px_rgba(255,255,255,0.6)]">
              <h1 className="text-2xl absolute text-transparent duration-1000 bg-black 2xl:top-[1.3rem] xl:top-[0.5rem] 2xl:right-[33rem] xl:right-[25rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.5)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">More About ~</span>
                <span className="block">Diego</span>
              </h1>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(3)} data-scroll data-scroll-speed='2' className="img absolute cursor-pointer left-[-150px] w-[600px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] group-hover:blur-sm"></div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90">
              <h1 className="text-2xl absolute 2xl:top-[1.8rem] xl:top-[1rem] 2xl:right-[33rem] xl:right-[25rem] text-transparent duration-1000 bg-white font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">More About ~</span>
                <span className="block">Saralí</span>
              </h1>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(4)} data-scroll data-scroll-speed='-1' className="img absolute cursor-pointer left-[-155px] w-[600px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] group-hover:blur-sm"></div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90 drop-shadow-[0_1.5px_5px_rgba(255,255,255,10)]">
              <h1 className="text-2xl absolute text-transparent duration-1000 bg-black 2xl:top-[1.8rem] xl:top-[1rem] 2xl:right-[33rem] xl:right-[25rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.5)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">More About ~</span>
                <span className="block">Claudia</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Actors;