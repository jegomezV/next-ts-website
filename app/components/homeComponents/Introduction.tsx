import Image from 'next/image';
import React from 'react';

// Importing image file
import cameraManPhoto from '@/public/homeImgs/homeBg/cameraMan.jpg';

// Introduction component definition
export const Introduction: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
            <Image
              src={cameraManPhoto}
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          {/* Content */}
          <div className="relative z-10 text-center">
            <h1
              data-scroll
              data-scroll-speed="-0.2"
              className="text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"
            >
              Redefining Beauty Beyond Stereotypes
            </h1>
            <p
              data-scroll
              data-scroll-speed="1"
              className="text-lg text-center text-white mt-4 drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"
            >
              We explore the transformation of the fashion industry and its impact on the perception of beauty.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
