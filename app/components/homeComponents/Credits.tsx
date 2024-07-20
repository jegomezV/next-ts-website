import React from 'react';
import Image from 'next/image';
import firstPhoto from '@/public/homeImgs/homeBg/blurHead.jpg';

const Credits: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section id='credits' className="relative w-full min-h-screen flex flex-col justify-center items-center bg-slate-500">
      {/* <Image
        src={firstPhoto}
        alt="A blurred headshot with a contemplative expression, symbolizing the introspection and challenges faced by individuals in the fashion industry."
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      /> */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>

      <article  className="relative z-10 text-center text-white p-4">
        <div data-scroll  data-scroll-speed="-1" data-scroll-delay="0.5" className="mt-20 mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            Information about the University
          </h2>
          <p className="text-lg text-white">
            Description of the university and its role in the project.
          </p>
        </div>
        <div data-scroll  data-scroll-speed="-1" data-scroll-delay="0.5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            Information about the School
          </h2>
          <p className="text-lg text-white">
            Description of the school and its contribution to the project.
          </p>
        </div>
        <div data-scroll  data-scroll-speed="-1" data-scroll-delay="0.5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            Information about Us
          </h2>
          <p className="text-lg text-white">
            Brief biography or roles of the developers of the project.
          </p>
          <p className="text-lg text-white">
            User's name as project director or advisor.
          </p>
        </div>
        <div data-scroll  data-scroll-speed="-1" data-scroll-delay="0.5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            Faculty
          </h2>
          <p className="text-lg text-white">
            Name of the faculty or academic area related to the project.
          </p>
        </div>
        <div data-scroll  data-scroll-speed="-1" data-scroll-delay="0.5" className="flex flex-col mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            Acknowledgments
          </h2>
          <div className="text-lg text-white pl-4">
            <p>Julanito de tal, Pepito Perez, Julanita de tal</p>
          </div>
        </div>
        <div data-scroll  data-scroll-speed="-1" data-scroll-delay="0.5" className="mt-12">
          <p className="text-lg text-white bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            Date: July 2024
          </p>
        </div>
      </article>
    </section>
  );
};

export default Credits;
