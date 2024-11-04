import React, { useEffect } from 'react';
import '@/app/styles/Introduction.scss';

import { useTranslation } from "react-i18next";

interface ActorsProps {
  onActorClick: (index: number) => void;
}

export const Actors: React.FC<ActorsProps> = ({ onActorClick }): JSX.Element => {
  const [t, i18n] = useTranslation("global");
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
    <section id='actors' data-scroll-section className='relative h-screen w-screen overflow-x-clip mt-[5rem] mb-[12rem]'>
      <div className="text-center bg-black/80 overflow-y-hidden shadow-[0_1px_5px_0px_rgba(0,0,0,1)] border-b-[1px] border-t-[2px] border-white/40">
        <h1 data-scroll data-scroll-speed='-1'
          className="flex items-center justify-center py-1 text-5xl text-white md:text-7xl font-appleL">
          <span className="text-xl md:text-2xl mr-5 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.2)]">✦</span>
          {t("actors.title.title1")}
        </h1>
      </div>

      {/* Main container with background image */}
      <div className="absolute top-0 left-0 w-screen h-[100%] flex items-center justify-start max-md:mt-20">
        <div className=" h-full w-full grid grid-cols-2 lg:h-[75%] lg:w-[100%] lg:flex lg:justify-start mt-40">
          {/* Each image container now includes hover effects and a click prompt */}
          {<div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div data-scroll data-scroll-speed='2' onClick={() => onActorClick(2)} className="img absolute cursor-pointer top-[0rem] h-[22rem] w-[16rem] md:w-[100%] md:h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] lg:group-hover:blur-[2px]"></div>
            <div className="relative inset-0 flex cursor-pointer items-center justify-end opacity-0 group-hover:opacity-100 drop-shadow-[0_1.5px_5px_rgba(255,255,255,0.2)] -rotate-90">
              <h1 className="text-2xl absolute top-[-4.5rem] right-[15rem] 2xl:top-[1.2rem] xl:-top-[0.5rem] 2xl:right-[32rem] xl:right-[23rem] text-transparent duration-1000 bg-white font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">{t("actors.menu.title1")}</span>
                <span className="block">Jeffry</span>
              </h1>
            </div>
          </div>
          }
          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(0)} data-scroll data-scroll-speed='-1' className="img absolute cursor-pointer top-[-2rem] h-[25rem] w-[14rem] md:w-[100%] md:h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] lg:group-hover:blur-sm"></div>
            <div className="relative inset-0 flex items-center justify-center -rotate-90 opacity-0 cursor-pointer group-hover:opacity-100">
              <h1 className="text-2xl absolute text-transparent duration-1000 bg-black top-[-4rem] right-[15rem] 2xl:top-[2rem] xl:top-[1.1rem] 2xl:right-[31.2rem] xl:right-[22rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.5)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">{t("actors.menu.title1")}</span>
                <span className="block">Alexa</span>
              </h1>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(5)} data-scroll data-scroll-speed='2' className="img absolute left-[-3rem] md:left-[0px] cursor-pointer top-[-2rem] lg:top-0 h-[22rem] w-[18rem] md:w-[100%] md:h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] lg:group-hover:blur-sm"></div>
            <div className="relative inset-0 flex items-center justify-center -rotate-90 opacity-0 cursor-pointer group-hover:opacity-100">
              <div className="text-2xl absolute text-transparent duration-1000 bg-white top-[-4rem] right-[15rem] 2xl:top-[1.7rem] xl:-top-[0.4rem] 2xl:right-[31rem] xl:right-[22rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">{t("actors.menu.title1")}</span>
                <span className="block">Zorro Gris</span>
              </div>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(1)} data-scroll data-scroll-speed='-1' className="img absolute cursor-pointer top-[-2rem] left-[-1rem] md:left-[-0rem] h-[22rem] w-[19rem] md:w-[100%] md:h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] lg:group-hover:blur-sm"></div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90 drop-shadow-[0_1.5px_5px_rgba(255,255,255,0.6)]">
              <h1 className="text-2xl absolute text-transparent duration-1000 bg-black top-[-4.2rem] right-[15rem] 2xl:top-[1.3rem] xl:top-[0.5rem] 2xl:right-[33rem] xl:right-[22rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.5)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">{t("actors.menu.title1")}</span>
                <span className="block">Diego</span>
              </h1>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(3)} data-scroll data-scroll-speed='2' className="img absolute cursor-pointer left-[-rem] md:left-[-0rem] h-[22rem] w-[15rem] md:w-[100%] md:h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] lg:group-hover:blur-sm"></div>
            <div className="relative inset-0 flex items-center justify-center -rotate-90 opacity-0 cursor-pointer group-hover:opacity-100">
              <h1 className="text-2xl absolute top-[-4rem] right-[20rem] 2xl:top-[1.8rem] xl:top-[1rem] 2xl:right-[33rem] xl:right-[22rem] text-transparent duration-1000 bg-white font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">{t("actors.menu.title1")}</span>
                <span className="block">Saralí</span>
              </h1>
            </div>
          </div>

          <div className="relative w-[400px] h-[150%] overflow-hidden group drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            <div onClick={() => onActorClick(4)}
              data-scroll data-scroll-speed='-1'
              className="img absolute cursor-pointer left-[-1rem] lg:left-0 top-[-3.5rem] h-[28rem] w-[15rem] md:w-[100%] md:h-[100%] bg-[30%_center] bg-cover drop-shadow-[0_1.5px_5px_rgba(0,0,0,10)] lg:group-hover:blur-sm">
            </div>
            <div className="relative cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-90 drop-shadow-[0_1.5px_5px_rgba(255,255,255,10)]">
              <h1 className="text-2xl absolute text-transparent top-[-4rem] right-[20rem] duration-1000 bg-black 2xl:top-[1.8rem] xl:top-[1rem] 2xl:right-[33rem] xl:right-[22rem] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.5)] bg-clip-text">
                <span className="block sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl">{t("actors.menu.title1")}</span>
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