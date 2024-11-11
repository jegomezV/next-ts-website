import React from 'react';
import Image, { StaticImageData } from 'next/image';
import universidad from '@/public/homeImgs/credits/Universidadvalle.png';
import ManPic from '@/public/homeImgs/credits/andresPhoto.webp';
import GirlPic from '@/public/homeImgs/credits/valeriaPhoto.webp';
import { useTranslation } from "react-i18next";

// Definir el tipo de las props para PersonCard
interface PersonCardProps {
  src: StaticImageData;
  name: string;
  translateYClass: string;
}

// Componente para tarjetas de personas
const PersonCard: React.FC<PersonCardProps> = ({ src, name, translateYClass }) => (
  <div className="flex flex-col items-center mb-6 md:mb-0">
    <div className={`relative h-[30vw] w-[27vw] md:h-[17vw] md:w-[15vw] 2xl:h-[22vw] 2xl:w-[18vw] image-container ${translateYClass}`}>
      <Image
        src={src}
        alt={name}
        fill
        className="rounded-lg introduction-image"
      />
    </div>
    <h2 className={`text-2xl md:text-2xl font-apple mt-2 ${translateYClass} text-center`}>{name}</h2>
  </div>
);

// Componente principal de créditos
const Credits: React.FC = (): JSX.Element => {
  const [t] = useTranslation("global");

  // Datos de las personas
  const people = [
    { src: ManPic, name: "ANDRÉS SERNA", translateYClass: '-translate-y-4 md:-translate-y-10 -translate-x-8' },
    { src: GirlPic, name: "VALERIA CASTAÑO", translateYClass: 'translate-y-4 md:translate-y-10 translate-x-8' }
  ];

  return (
    <section id="credits" data-scroll-section className="relative flex flex-col w-screen h-auto min-h-[100vh] mt-20 md:mt-40 effects-section">
      <div className="text-center translate-y-8 md:translate-y-12 2xl:translate-y-20 absolute w-full bg-black/80 overflow-y-hidden shadow-[0_1px_5px_0px_rgba(0,0,0,1)] border-b-[1px] border-t-[2px] border-white/40">
        <h1 data-scroll data-scroll-speed="1" className="flex items-center justify-center py-4 text-3xl text-white translate-y-8 md:translate-y-20 md:text-5xl lg:text-6xl xl:text-7xl font-appleL">
          <span className="text-lg md:text-xl lg:text-2xl mr-3 md:mr-5 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.2)]">✦</span>
          {t("credits.title")}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5 mx-auto mt-32 md:grid-cols-2 md:p-10 md:mt-52">

        {/* Columna de las fotos de personas */}
        <div className="flex flex-col items-center w-full p-5 max-md:translate-x-1/2 md:items-start md:p-10">
          <div className="grid grid-cols-2 gap-4 mx-auto">
            {people.map((person, index) => (
              <PersonCard
                key={index}
                src={person.src}
                name={person.name}
                translateYClass={person.translateYClass}
              />
            ))}
            <div className="flex items-center justify-center mt-8 md:mt-0 mb-10 md:mb-10">
              <h3 className="text-3xl md:text-4xl font-appleL tracking-[1px] md:tracking-[2px] max-md:translate-x-1/2 bg-clip-text text-transparent bg-black drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] text-center">
                {t("credits.tutor")}
              </h3>
            </div>
          </div>

          {/* Contenido de la Universidad en dispositivos móviles */}
          <div className="flex flex-col items-center mx-auto mt-10 text-center md:hidden">
            <div className="relative h-[30vw] w-[30vw] mb-4 image-container">
              <Image
                src={universidad}
                alt="Logo Universidad del Valle"
                fill
                className="introduction-image"
              />
            </div>
            <h2 className="text-2xl font-apple tracking-[0.5px] mb-2">UNIVERSIDAD DEL VALLE</h2>
            <h3 className="mb-1 text-2xl font-appleL">- {t("credits.fai")} (FAI)</h3>
            <h3 className="text-2xl font-appleL">- {t("credits.ecs")} (ECS)</h3>
          </div>
        </div>

        {/* Columna derecha de la universidad para pantallas más grandes */}
        <div className="flex-col items-center justify-center hidden p-5 md:flex md:p-10">
          <div className="relative h-[18vw] w-[18vw] mb-6 image-container">
            <Image
              src={universidad}
              alt="Logo Universidad del Valle"
              fill
              className="introduction-image"
            />
          </div>
          <h2 className="text-2xl font-apple tracking-[1px] mb-4 text-center">UNIVERSIDAD DEL VALLE</h2>
          <h3 className="mb-2 text-2xl text-center font-appleL">- {t("credits.fai")} (FAI)</h3>
          <h3 className="text-2xl text-center font-appleL">- {t("credits.ecs")} (ECS)</h3>
        </div>
      </div>
    </section>
  );
};

export default Credits;
