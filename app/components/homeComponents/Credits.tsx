import React from 'react';
import Image from 'next/image';
import universidad from '@/public/homeImgs/credits/Universidadvalle.png'
import logo from '@/public/homeImgs/credits/logoSchool.png'
import ManPic from '@/public/homeImgs/credits/manPick.jpg'
import GirlPic from '@/public/homeImgs/credits/GirlPic.jpg'
import CircleSvg from '../svgs/CircleSvg';

import { useTranslation } from "react-i18next";

const Credits: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="credits" data-scroll-section className="flex flex-col relative h-screen w-screen bg-gradient-to-bl from-slate-200 via-white via-amber-100 to-amber-200">
      <article className='grid gap-4 translate-y-20 mx-auto my-auto
                          grid-cols-2 h-[90%] w-[100%] absolute bottom-10
                          sm:grid-cols-2  sm:h-[85%] sm:w-[100%] sm:absolute sm:bottom-10
                          md:grid-cols-2 md:h-[88%] md:w-[100%] md:absolute md:bottom-10
                          lg:grid-cols-5 lg:grid-rows-2 lg:h-[90%] lg:w-[100%] lg:absolute lg:bottom-10
                          xl:grid-cols-5 xl:grid-rows-2 xl:h-[94%] xl:w-[100%]
                          2xl:bottom-5'>

        <div className="absolute pt-1 px-4 rounded-full bg-black/50 border-[1px] border-black/50 left-1/2 hidden md:block -translate-x-1/2">
          <h1 className="p-1 flex z-10 -top-14 text-3xl text-transparent text-center left-1/2 -translate-x-1/2 cursor-default font-thin
        sm:text-4xl sm:top-1 sm:right-0 sm:justify-end sm:items-end sm:-translate-x-[10%]
        md:text-5xl md:top-1 max-md:right-0 max-md:justify-end max-md:items-end max-md:-translate-x-0
        lg:text-5xl lg:top-5 lg:items-center lg:justify-center lg:translate-x-0
        xl:text-5xl xl:-top-14 xl:px-4 xl:py-2
        2xl:mt-2 2xl:text-6xl 2xl:top-5
        whitespace-nowrap bg-clip-text drop-shadow-[0_0.1px_2px_rgba(0,0,0,1)] font-display bg-white">
            {t("credits.title")}
          </h1>
        </div>


        <div className=""></div>
        <div className="relative max-lg:col-start-2 max-lg:row-start-1">
          <div className='absolute -bottom-[30%] h-[7rem] w-[5rem] translate-x-[50%] z-20
                          sm:-bottom-[50%] sm:h-[7rem] sm:w-[5rem] sm:translate-x-[50%]
                          md:-bottom-[50%] md:h-[7rem] md:w-[5rem] md:translate-x-[80%]
                          lg:bottom-[5%] lg:h-[12rem] lg:w-[8rem] lg:-translate-x-[53%]
                          xl:bottom-[5%] xl:h-[12rem] xl:w-[8rem] xl:-translate-x-[53%]
                          2xl:bottom-[5%] 2xl:h-[14rem] 2xl:w-[10rem] 2xl:-translate-x-[53%] drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'>
            <Image
              src={universidad}
              alt="Stereotypes section introduction"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              priority
              className='hover:scale-105 duration-300 hover:duration-300'
            />
          </div>
        </div>
        <div className="relative max-lg:col-start-2 max-lg:row-start-3">
          <div className='absolute bottom-[10%] h-[8rem] w-[8rem] translate-x-[30%] z-20 drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)]
                        sm:bottom-[0%] sm:h-[8rem] sm:w-[10rem] sm:translate-x-[30%]
                        md:bottom-[0%] md:h-[8rem] md:w-[10rem] md:translate-x-[30%]
                        lg:bottom-[5%] lg:h-[13rem] lg:w-[13rem] lg:right-1/2 lg:translate-x-[60%]
                        xl:bottom-[5%] xl:h-[13rem] xl:w-[13rem] xl:right-1/2
                        2xl:bottom-[5%] 2xl:h-[15rem] 2xl:w-[15rem] 2xl:right-1/2'>
            <Image
              src={logo}
              alt="Stereotypes section introduction"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              priority
              className='hover:scale-105 duration-300 hover:duration-300'
            />
          </div>
        </div>
        <div className="relative">
          <div className='absolute -bottom-[0%] h-[7rem] w-[5rem] translate-x-[50%] z-20 drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)]
                        sm:-bottom-[2%] sm:h-[7rem] sm:w-[6rem] sm:translate-x-[55%]
                        md:-bottom-[2%] md:h-[8rem] md:w-[7rem] md:translate-x-[55%]
                        lg:bottom-[7%] lg:h-[10rem] lg:w-[7rem] lg:-left-[15%]
                        xl:bottom-[7%] xl:h-[10rem] xl:w-[7rem] xl:-left-[15%] xl:translate-x-[15rem]
                        2xl:bottom-[7%] 2xl:h-[12rem] 2xl:w-[9rem] 2xl:-left-[20%]'>
            <Image
              src={GirlPic}
              alt="Stereotypes section introduction"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              priority
              className='hover:scale-105 duration-300 hover:duration-300'
            />
          </div>
          <div className='absolute bottom-[4%] h-[7rem] w-[5rem] translate-x-[140%] z-20 drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)]
                            sm:bottom-[6%] sm:h-[7rem] sm:w-[6rem] sm:translate-x-[140%]
                            md:bottom-[6%] md:h-[8rem] md:w-[7rem] md:translate-x-[140%]
                            lg:bottom-[10%] lg:h-[11rem] lg:w-[7rem] lg:right-[65%]
                            xl:bottom-[10%] xl:h-[11rem] xl:w-[7rem] xl:right-[70%] xl:translate-x-[23rem]
                            2xl:bottom-[10%] 2xl:h-[13rem] 2xl:w-[9rem] 2xl:right-[70%]'>
            <Image
              src={ManPic}
              alt="Stereotypes section introduction"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              priority
              className='hover:scale-105 duration-300 hover:duration-300'
            />
          </div>
        </div>
        <div className="relative">
          {/* <div className="max-lg:hidden absolute bottom-5 mx-auto h-[80%] w-[80%] bg-amber-100/80 backdrop-blur-3xl border-[1px] border-black left-1/2 -translate-x-1/2 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.8)]">
            <h1 className='text-transparent mt-2 text-center text-2xl bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-3xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]'>Actors</h1>
            <ul className=''>
              <li className='text-center  lg:pt-2 lg:translate-y-[10%] xl:py-2 xl:translate-y-[10%]'>⚬ Jeffry Ramirez</li>
              <li className='text-center  lg:py-[1px] lg:translate-y-[10%] xl:py-[1px] 2xl:py-2 2xl:translate-y-[10%]'>⚬ Alexa Gonzales</li>
              <li className='text-center  lg:py-[1px] lg:translate-y-[10%] xl:py-[1px] 2xl:py-2 2xl:translate-y-[10%]'>⚬ Zorro Gris</li>
              <li className='text-center  lg:py-[1px] lg:translate-y-[10%] xl:py-[1px] 2xl:py-2 2xl:translate-y-[10%]'>⚬ Diego Ramirez</li>
              <li className='text-center  lg:py-[1px] lg:translate-y-[10%] xl:py-[1px] 2xl:py-2 2xl:translate-y-[10%]'>⚬ Saralí Ramirez</li>
              <li className='text-center  lg:py-[1px] lg:translate-y-[10%] xl:py-[1px] 2xl:py-2 2xl:translate-y-[10%]'>⚬ Claudia Ramirez</li>
            </ul>
          </div> */}
        </div>
        <div className=" max-lg:col-start-1 max-lg:row-start-1">
          <h1 className='text-transparent mt-2 text-center text-2xl bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]'>{t("credits.subtitle-1")}</h1>
          <p className='text-center  py-2 translate-y-[10%] '>Universidad del valle<br /> Cali - colombia<br />{/* Tutor: Devora Cabezas */}</p>
        </div>
        <div className=" max-lg:col-start-1 max-lg:row-start-2">
          <h1 className='text-transparent mt-2 text-center text-2xl bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]'>{t("credits.subtitle-2")}</h1>
          <p className='text-center  py-2 translate-y-[10%] '>{t("credits.faculty-des-1")}</p>
        </div>
        <div className=" max-lg:col-start-1 max-lg:row-start-3">
          <h1 className='text-transparent mt-2  text-center text-2xl bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]'>{t("credits.subtitle-3")}</h1>
          <p className='text-center  py-2 translate-y-[10%] '>{t("credits.school-info-des-1")} <br /> Cali - colombia <br /> {t("credits.school-info-des-3")}</p>
        </div>
        <div className=" max-lg:col-start-1 max-lg:row-start-4 md:translate-x-40">
          <h1 className='text-transparent mt-2  text-center text-2xl bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.6)]'>{t("credits.subtitle-4")}</h1>
          <p className='text-center  py-2 translate-y-[10%]'>Susana Horia<br /> Andy Gonzales</p>
        </div>
        <div className='absolute left-1/2 h-[100%] w-[2px]
                        lg:top-1/2 lg:w-full lg:h-[2px] lg:left-0 bg-black'>
          <CircleSvg className="absolute h-6 w-6 bottom-[90%] -translate-x-3
            sm:bottom-[90%]
            md:h-6 md:w-6 md:bottom-[91%] md:translate-y-3 md:-translate-x-3
            lg:right-[89%]" />
          <CircleSvg className="absolute h-6 w-6 bottom-[67%] -translate-x-3
            sm:bottom-[70%]
            md:h-6 md:w-6 md:bottom-[71%] md:-translate-x-3
            lg:right-[69%] md:translate-y-3" />
          <CircleSvg className="absolute h-6 w-6 bottom-[40%] -translate-x-3
            sm:bottom-[49%]
            md:h-6 md:w-6 md:bottom-[50%] md:-translate-x-3
            lg:right-[48%] md:translate-y-3" />
          <CircleSvg className="absolute h-6 w-6 bottom-[16%] -translate-x-3
            sm:bottom-[29%]
            md:h-6 md:w-6 md:bottom-[29%] md:-translate-x-3
            lg:right-[28%] md:translate-y-3 xl:translate-x-36" />
        </div>
      </article>
    </section>
  );
};

export default Credits;
