import { Nav } from '../nav';
import Image from 'next/image'

import cameraMan from '../../../public/homeImgs/homeBg/cameraMan.jpg';
import albineGirl from '../../../public/homeImgs/homeBg/albineGirl.jpg';
import artAlbine from '../../../public/homeImgs/homeBg/artAlbine.jpg';
import secondPhoto from '../../../public/homeImgs/secondPhoto.jpg';
import girlPick from '../../../public/homeImgs/homeBg/girlPick.jpg';
import buttersHead from '../../../public/homeImgs/homeBg/buttersHead.jpg';
import shadowGirl from '../../../public/homeImgs/homeBg/shadowGirl.jpg';

import { Parallax } from 'react-scroll-parallax'

export const HeaderM: React.FC = (): JSX.Element => {
  return (
    <header className="">
      <Nav />

      <div className='h-[100vh]'>
        <div className="w-screen h-full flex items-center justify-center">

          <div className="animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0" />
          <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text">
            What about beauty?
          </h1>

        </div>
      </div>

      
      <div className='absolute top-0 w-screen h-screen'>

        <Image
          width={1200}
          height={1200}
          className='absolute left-40 bottom-10 h-60 w-44 border-[1px] border-white/30 hover:translate-x-5 hover:duration-300 duration-300'
          src={artAlbine.src}
          alt="Picture of the author"
        />

     
        <Image
          width={1200}
          height={1200}
          className='absolute right-16 h-52 w-36 border-[1px] border-white/30 hover:-translate-x-1 hover:translate-y-1 hover:duration-300 duration-300'
          src={secondPhoto.src}
          alt="Picture of the author"
        />
  
   
        <Image
          width={1200}
          height={1200}
          className='absolute top-10 h-72 w-52 border-[1px] border-white/30 hover:translate-y-3 hover:duration-300 duration-300'
          src={cameraMan.src}
          alt="Picture of the author"
        />


        <Image
          width={1200}
          height={1200}
          className='absolute right-80 bottom-0 h-60 w-44 border-[1px] border-white/30 hover:translate-x-5 hover:-translate-y-2 hover:duration-300 duration-300'
          src={albineGirl.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute top-1/2 h-96 w-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white/30'
          src={girlPick.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute right-32 top-36 h-36 w-24 border-[1px] border-white/30 hover:-translate-x-5 hover:-translate-y-2 hover:duration-300 duration-300'
          src={buttersHead.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute right-60 top-40 h-50 w-32 border-[1px] border-white/30 hover:translate-x-3 hover:translate-y-3 hover:duration-300 duration-300'
          src={shadowGirl.src}
          alt="Picture of the author"
        />

      </div>
      
      

    </header>
  )
}