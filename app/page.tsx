"use client"

import { ButtonStart } from './components/buttons/ButtonStart';
import { CardSpotlight } from './components/CardSpotlight';
import { HeaderM } from './components/homeComponents/Header';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax'

const Home = () => {
  return (
    <ParallaxProvider>
      <div className="h-full w-screen">

        <HeaderM />
        <ButtonStart />

        <main className="relative h-full w-screen">
          {/* <Parallax scale={[0.7, 1.2]} translateX={[10, -9]} translateY={[-10, -40]}>
            <CardSpotlight configs='h-50 absolute w-screen border-4'>
              <section className='relative w-full mx-auto rounded-full grid grid-cols-1 gap-3'>
                <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap m-4'>
                  
                </article>
              </section>
            </CardSpotlight>
          </Parallax> */}

          <section>
            <article>
              <div className="min-h-screen w-[80%] mx-auto flex justify-center items-center border-[1px]">
                <h1 className='text-4xl text-center text-white'>This is the second section</h1>
              </div>
            </article>
          </section>

          <section>
            <article>
              <div className="h-96 w-[80%] mx-auto flex justify-center items-center border-[1px]">
                <h1 className='text-4xl text-center text-white'>This is the third section</h1>
              </div>
            </article>
          </section>

        </main>
      </div>
    </ParallaxProvider>
  );
};
export default Home;
