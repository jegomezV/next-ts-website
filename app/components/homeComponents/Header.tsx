// Importing the Nav component
import { Nav } from '../nav';

// Importing Next.js Image component for optimized image handling
import Image from 'next/image';

// Importing image files
import cameraMan from '../../../public/homeImgs/homeBg/cameraMan.jpg';
import albineGirl from '../../../public/homeImgs/homeBg/albineGirl.jpg';
import artAlbine from '../../../public/homeImgs/homeBg/artAlbine.jpg';
import albineMan from '../../../public/homeImgs/homeBg/albineMan.jpg';
import secondPhoto from '../../../public/homeImgs/secondPhoto.jpg';
import girlPick from '../../../public/homeImgs/homeBg/girlPick.jpg';
import buttersHead from '../../../public/homeImgs/homeBg/buttersHead.jpg';
import shadowGirl from '../../../public/homeImgs/homeBg/shadowGirl.jpg';


// Importing Parallax component from react-scroll-parallax for parallax effect
import { Parallax } from 'react-scroll-parallax';

// HeaderM component definition
export const HeaderM: React.FC = (): JSX.Element => {
  return (
    <header className="">
      {/* Navigation bar component */}
      <Nav />

      {/* Main header section with title */}
      <div className='h-[100vh] border-b-[1px] border-white/30'>
        <div className="w-screen h-full flex items-center justify-center">
          <div className="animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0" />
          <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text">
            What about beauty?
          </h1>
        </div>
      </div>

      {/* Absolute positioned images with hover effects */}
      <div className='absolute top-0 w-screen h-screen'>
        <Parallax scale={[1, 1]} translateX={[50, 0]} className="
          absolute left-40 bottom-10
          border-[1px] border-white/10 rounded
          h-60 w-44
          sm:left-10
          lg:left-28
          xl:h-72 xl:w-64 xl:left-40 xl:bottom-7
          2xl:left-[4rem] 2xl:bottom-[8rem] 2xl:h-96 2xl:w-72
          hover:translate-x-5 hover:duration-300
          duration-300">
          <Image
            fill

            src={artAlbine.src}
            alt="Picture of the author"
          />
        </Parallax>
        <Parallax scale={[1, 1]} translateX={[-50, 0]} className="
          absolute right-16
          border-[1px] border-white/10 rounded
          h-52 w-36
          lg:top-16 lg:right-4
          2xl:top-12 2xl:h-[30rem] 2xl:w-72
          hover:-translate-x-1 hover:translate-y-1 hover:duration-300
          duration-300">
          <Image
            fill

            src={secondPhoto.src}
            alt="Picture of the author"
          />
        </Parallax>
        <Parallax scale={[1, 1]} translateX={[50, 0]} className="
          absolute top-10
          border-[1px] border-white/10 rounded
          h-72 w-32
          sm:top-20 sm:h-52 sm:w-40
          xl:h-64 xl:w-[250px]
          2xl:h-96 2xl:w-72 2xl:top-20
          hover:translate-y-3 hover:duration-300
          duration-300">
          <Image
            fill

            src={cameraMan.src}
            alt="Picture of the author"
          />

        </Parallax>
        <Parallax scale={[1, 1]} translateX={[50, 0]} className="
          absolute right-80 bottom-0
          border-[1px] border-white/10 rounded
          h-60 w-44
          sm:right-12
          lg:right-72
          xl:h-72 xl:w-52 xl:right-80
          2xl:right-[40rem] 2xl:bottom-[8rem] 2xl:h-[500px] 2xl:w-[400px] 
          hover:translate-x-5 hover:-translate-y-2 hover:duration-300
          duration-300
        ">
          <Image
            fill

            src={albineMan.src}
            alt="Picture of the author"
          />
        </Parallax>

        <div className="
          absolute -bottom-28 right-1/4
          transform -translate-x-1/2 -translate-y-1/2
          border-[1px] border-white/10 rounded
          h-96 w-60
          sm:h-72 sm:w-52 sm:bottom-10 sm:right-[70px]
          lg:h-[400px] lg:w-[300px] lg:right-72 lg:-bottom-20
          xl:h-[410px] xl:w-[350px] xl:-bottom-22 xl:right-[425px]
          2xl:h-[800px] 2xl:w-[600px] 2xl:right-[900px] 2xl:top-[35rem]">

          <Image
            fill

            src={girlPick.src}
            alt="Picture of the author"
          />

        </div>

        <Parallax scale={[1, 1]} translateX={[-30, 0]} className="
          absolute right-32 top-36
          border-[1px] border-white/10 rounded
          h-36 w-24
          sm:w-0 sm:h-0
          md:h-36 md:w-24
          lg:top-64
          xl:h-44 xl:w-32 xl:top-64 xl:right-24
          2xl:right-[20rem] 2xl:top-32 2xl:h-96 2xl:w-72
          hover:-translate-x-5 hover:-translate-y-2 hover:duration-300
          duration-300">
          <Image
            fill

            src={buttersHead.src}
            alt="Picture of the author"
          />
        </Parallax >
        <Parallax scale={[1, 1]} translateX={[-50, 0]} className="
          absolute right-60 top-40
          border-[1px] border-white/10 rounded
          h-60 w-36
          sm:w-0 sm:h-0
          md:h-40 md:w-28 md:left-40 md:top-58
          lg:left-[40rem] lg:top-32
          xl:left-[40rem] xl:h-44 xl:w-36 xl:top-96
          2xl:left-[30rem] 2xl:top-96 2xl:h-96 2xl:w-72
          hover:translate-x-3 hover:translate-y-3 hover:duration-300
          duration-300">
          <Image
            fill

            src={shadowGirl.src}
            alt="Picture of the author"
          />
        </Parallax >
      </div >

    </header >
  );
};
