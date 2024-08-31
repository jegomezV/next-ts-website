import React from 'react';
import Image from 'next/image';
import universidad from '@/public/homeImgs/credits/Universidadvalle.png';
import ManPic from '@/public/homeImgs/credits/manPick.jpg';
import GirlPic from '@/public/homeImgs/credits/GirlPic.jpg';

const Credits: React.FC = (): JSX.Element => {
  return (
    <section id="credits" data-scroll-section className="flex flex-col relative h-screen w-screen effects-section">
      <div className="grid grid-cols-2 h-full">
        
        {/* Columna izquierda */}
        <div className="flex flex-col justify-between p-10">
          <div className="grid grid-cols-2 gap-4 mt-[20%]">
            {/* Información de los estudiantes */}
            <div className="flex flex-col items-center">
              <div className="relative -translate-y-10 h-[23vw] w-[20vw] mb-4 image-container">
                <Image
                  src={ManPic}
                  alt="Andy Gonzales"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg introduction-image"
                />
              </div>
              <h2 className="text-3xl font-apple -translate-y-10">Andy Gonzales</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-[23vw] w-[20vw] translate-y-10 mb-4 image-container">
                <Image
                  src={GirlPic}
                  alt="Valeria Ramirez"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg introduction-image"
                />
              </div>
              <h2 className="text-3xl font-apple translate-y-10">Valeria Ramirez</h2>
            </div>
          </div>
          {/* Tutora */}
          <div className="text-center 2xl:mb-10">
            <h3 className="text-3xl font-appleL tracking-[2px]">Tutora: Patricia Alzate</h3>
          </div>
        </div>
        
        {/* Columna derecha */}
        <div className="flex flex-col justify-center items-center p-10">
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
          <h2 className="text-3xl font-apple tracking-[1px] mb-4">Universidad del Valle</h2>
          <h3 className="text-3xl font-appleL mb-2">ECS</h3>
          <h3 className="text-3xl font-appleL">FAI</h3>
        </div>

      </div>
    </section>
  );
};

export default Credits;
