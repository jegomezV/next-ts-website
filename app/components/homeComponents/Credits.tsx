import React from 'react';
import Image from 'next/image';
import universidad from '@/public/homeImgs/credits/Universidadvalle.png';
import ManPic from '@/public/homeImgs/credits/andresPhoto.webp';
import GirlPic from '@/public/homeImgs/credits/valeriaPhoto.webp';

import { useTranslation } from "react-i18next";

const Credits: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="credits" data-scroll-section className="relative flex flex-col w-screen h-[120vh] mt-40 effects-section">
      <div className="text-center translate-y-12 2xl:translate-y-20 absolute w-full bg-black/80 overflow-y-hidden shadow-[0_1px_5px_0px_rgba(0,0,0,1)] border-b-[1px] border-t-[2px] border-white/40">
        <h1 data-scroll data-scroll-speed='1'
          className="flex items-center justify-center py-4 text-5xl text-white translate-y-20 p md:text-7xl font-appleL">
          <span className="text-xl md:text-2xl mr-5 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.2)]">✦</span>
          {t("credits.title")}
        </h1>
      </div>
      <div className="grid h-full grid-cols-2 mt-40 ">

        {/* Columna izquierda */}
        <div className="flex flex-col justify-between p-10">
          <div className="grid grid-cols-2 gap-4 mt-[20%]">
            {/* Información de los estudiantes */}
            <div className="flex flex-col items-center">
              <div className="relative -translate-y-10 h-[17vw] w-[15vw] 2xl:h-[23vw] 2xl:w-[20vw] mb-4 image-container">
                <Image
                  src={ManPic}
                  alt="Andy Gonzales"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg introduction-image"
                />
              </div>
              <h2 className="text-3xl -translate-y-10 font-apple">ANDRÉS SERNA</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-[17vw] w-[15vw] 2xl:h-[23vw] 2xl:w-[20vw] translate-y-10 mb-4 image-container">
                <Image
                  src={GirlPic}
                  alt="Valeria Ramirez"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg introduction-image"
                />
              </div>
              <h2 className="text-3xl translate-y-10 font-apple">⁠VALERIA CASTAÑO</h2>
            </div>
          </div>
          {/* Tutora */}
          <div className="text-center 2xl:mb-10">
            <h3 className="text-3xl font-appleL tracking-[2px]">{t("credits.tutor")}</h3>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col items-center justify-center p-10">
          <div className="absolute translate-x-1/2 left-1/2 top-1/5 h-[75%] border-r-[1px] border-black/20"></div>
          <div className="relative h-[18vw] w-[18vw] mb-6 image-container">
            <Image
              src={universidad}
              alt="Logo Universidad del Valle"
              layout="fill"
              objectFit="contain"
              className="introduction-image"
            />
          </div>
          <h2 className="text-3xl font-apple tracking-[1px] mb-4">UNIVERSIDAD DEL VALLE</h2>
          <h3 className="mb-2 text-3xl font-appleL">- {t("credits.fai")} (FAI)</h3>
          <h3 className="text-3xl font-appleL">- {t("credits.ecs")} (ECS)</h3>
        </div>
      </div>
    </section>
  );
};

export default Credits;
