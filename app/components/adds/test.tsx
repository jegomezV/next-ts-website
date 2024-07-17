import Image from 'next/image';
import React from 'react';

/* // Importing image file
import cameraManPhoto from '@/public/homeImgs/homeBg/cameraMan.jpg'; */

// Introduction component definition
const Introduction: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 md:px-12 py-16">
        {/* Foto a la izquierda, texto a la derecha */}
        <div className="md:order-1">
          <div className="relative w-full h-80 md:h-full">
            IMG
          </div>
        </div>
        <div className="md:order-2">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold mb-4">
            Redefining Beauty Beyond Stereotypes
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            In a world where fashion has long been a stronghold of unattainable beauty standards, it is crucial to question and challenge these norms. At "What About Beauty," we explore how the fashion industry is transforming its ideals of beauty and how these transformations impact our perception of what it means to be truly beautiful.
          </p>
        </div>

        {/* Texto arriba, foto abajo */}
        <div className="md:order-4">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold mb-4">
            Redefining Beauty Beyond Stereotypes
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            In a world where fashion has long been a stronghold of unattainable beauty standards, it is crucial to question and challenge these norms. At "What About Beauty," we explore how the fashion industry is transforming its ideals of beauty and how these transformations impact our perception of what it means to be truly beautiful.
          </p>
        </div>
        <div className="md:order-3">
          <div className="relative w-full h-80 md:h-full">
            IMG
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
