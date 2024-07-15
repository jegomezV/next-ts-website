import Image from 'next/image';
import React from 'react';

// Importing image file
import vitiGirlOnePhoto from '@/public/homeImgs/homeBg/vitiGirlOne.jpg';

// Stereotypes component definition
export const Stereotypes: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t-[1px]">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
            <Image
              src={vitiGirlOnePhoto}
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
              data-scroll-direction='horizontal'
              data-scroll-speed="-0.2"
              className="text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"
            >
              The Weight of Beauty Stereotypes
            </h1>
            <p
              data-scroll
              data-scroll-direction='horizontal'
              data-scroll-speed="1"
              className="text-lg text-center text-white drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] mt-4"
            >
              Beauty stereotypes imposed by the fashion industry have had profound negative repercussions on the mental and emotional health of many individuals. From the pressure to achieve impossible bodies to the exclusion of those who don't fit traditional molds, these stigmas have limited the potential of countless people. It's time to challenge these standards and advocate for beauty that includes everyone.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
