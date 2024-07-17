import React, { useEffect } from 'react';
// import  gsap  from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import firstPhoto from '@/public/homeImgs/homeBg/blurHead.jpg';

const Credits: React.FC = (): JSX.Element => {

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.from('.', {
  //     opacity: 0,
  //     x: 100,
  //     duration: 1.5,
  //     scrollTrigger: {
  //       trigger: '.',
  //       start: 'top 80%',
  //       end: 'top 20%',
  //       scrub: true,
  //     }
  //   });

  // }, []);

  return (
    <section data-scroll-section id='credits'>
      <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-t border-black">
        <Image
          src={firstPhoto}
          alt="A blurred headshot with a contemplative expression, symbolizing the introspection and challenges faced by individuals in the fashion industry."
          layout="fill"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <article data-scroll data-scroll-speed="1" className="z-10 text-center text-white p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold mb-4 whitespace-nowrap bg-clip-text drop-shadow-md animate-title">
            Credits
          </h1>
          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-4">Information about the University</h2>
            <p className="text-lg text-white ">Description of the university and its role in the project.</p>
          </div>
          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-4">Information about the School</h2>
            <p className="text-lg text-white ">Description of the school and its contribution to the project.</p>
          </div>
          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-4">Information about Us</h2>
            <p className="text-lg text-white ">Brief biography or roles of the developers of the project.</p>
            <p className="text-lg text-white ">User's name as project director or advisor.</p>
          </div>
          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-4">Faculty</h2>
            <p className="text-lg text-white ">Name of the faculty or academic area related to the project.</p>
          </div>
          <div className=" flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-2">Acknowledgments</h2>
            <ul className="list-disc text-lg text-white pl-4 ">
              <li>Name 1</li>
              <li>Name 2</li>
              <li>Name 3</li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg text-white ">Date: July 2024</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Credits;