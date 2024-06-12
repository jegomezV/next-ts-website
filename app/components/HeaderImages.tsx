import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

import voguePhoto from '../../public/homeImgs/homeBg/voguePhoto.jpg';
import blurHead from '../../public/homeImgs/homeBg/blurHead.jpg';
import cameraMan from '../../public/homeImgs/homeBg/cameraMan.jpg';
import waterGirl from '../../public/homeImgs/homeBg/waterGirl.jpg';
import threesome from '../../public/homeImgs/homeBg/threesome.jpg';
import manPick from '../../public/homeImgs/homeBg/manPick.jpg';
import yellowGlasses from '../../public/homeImgs/homeBg/yellowGlasses.jpg';
import albineGirl from '../../public/homeImgs/homeBg/albineGirl.jpg';
import artAlbine from '../../public/homeImgs/homeBg/artAlbine.jpg';
import girlPick from '../../public/homeImgs/homeBg/girlPick.jpg';

import firstPhoto from '../../public/homeImgs/firstPhoto.jpg';
import secondPhoto from '../../public/homeImgs/secondPhoto.jpg';
import thirdPhoto from '../../public/homeImgs/thirdPhoto.jpg';

export const HeaderImages: React.FC = (): JSX.Element => {
  return (
    <div className="absolute w-full h-full">

      <Parallax scale={[1, 1]} translateX={[1, 1]}>
        <div className='relative left-[300px] -bottom-64 h-30 w-52 border-[1px] border-white/20'>
          <Image
            width={1000}
            height={1000}
            className='absolute border-[1px] border-white/20'
            src={artAlbine.src}
            alt="Picture of the author"
          />
        </div>
      </Parallax>

      <Parallax scale={[1,1]} translateX={[-10, 10]}>
        <div className='relative border-[1px] h-72 w-48 border-white/20 left-[1100px] -bottom-10 hover:-translate-x-10 hover:-translate-y-4 hover:duration-300 duration-300'>
          <Image
            width={1000}
            height={1000}
            className='absolute '
            src={secondPhoto.src}
            alt="Picture of the author"
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[4, -10]}>
        <div className='relative border-[1px] left-[20px] border-white/40 h-72 w-52 overflow-hidden bottom-60 hover:translate-x-4 hover:translate-y-4 hover:duration-300 duration-300'>
          <Image
            width={1900}
            height={1900}
            className='absolute'
            src={cameraMan.src}
            alt="Picture of the author"
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[1, -10]}>
        <div className='relative border-[1px] h-44 w-44 border-white/20 left-[950px] -top-72 hover:translate-x-10 hover:-translate-y-2 hover:duration-300 duration-300'>
          <Image
            width={1000}
            height={1000}
            className='absolute '
            src={albineGirl.src}
            alt="Picture of the author"
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[1, 40]}>
        <div className='relative left-[680px] -top-[850px] h-[345px] w-52 border-[1px] border-white/20 overflow-hidden'>
          <Image
            width={1900}
            height={1900}
            className='absolute'
            src={girlPick.src}
            alt="Picture of the author"
          />
        </div>
      </Parallax>
    </div>
  )
}
