import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import universidad from '@/public/homeImgs/credits/Universidadvalle.png'
import pareja from '@/public/homeImgs/credits/pareja.png'

const Credits: React.FC = (): JSX.Element => {
  return (
    <section
      data-scroll-section
      id='credits'
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-slate-100"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: 'spring', stiffness: 100 }}
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="0.1"
        className="relative w-full max-w-screen-2xl mr-0 sm:mr-32 flex flex-col h-full justify-between px-4 md:px-12 "
      >
        <div className="flex-grow">
          <h1 className='text-5xl md:text-4xl lg:text-7xl ml-0 sm:ml-28 text-black text-center font-semibold mt-2 mb-12 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.6)]'>
            Project credits
          </h1>

          <div className='relative text-black p-4 md:p-6 overflow-auto rounded-md'>
            <div className="scroll-content">
              <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-16 mb-20 max-w-screen">
                
                <div className="text-center flex-1 min-w-[250px] md:max-w-[300px] mb-6 md:mb-0">
                  <div className='mt-4 md:mt-60'>
                    <h2 className="text-2xl font-bold text-black drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.6)]">Universidad del Valle</h2>
                    <div className="p-4 md:p-6">
                      <p className="text-sm font-semibold">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center flex-1 min-w-[250px] md:max-w-[300px] mb-6 mt- md:mb-2">
                  <h2 className="text-2xl font-bold drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.6)]">Information about us</h2>
                  <div className="p-4 md:p-6">
                    <p className="text-sm font-semibold">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                  </div>
                </div>
                
                <div className="text-center flex-1 min-w-[250px] md:max-w-[300px] mb-6 md:mb-0">
                  <div className='mt-4 md:mt-60'>
                    <h2 className="text-2xl font-bold text-black drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.6)]">Faculty</h2>
                    <div className="p-4 md:p-6">
                      <p className="text-sm font-semibold">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center flex-1 min-w-[250px] md:max-w-[350px] mb-6">
                  <h2 className="text-2xl font-bold drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.6)]">Acknowledgments</h2>
                  <div className="p-4 md:p-6">
                    <p className="text-sm font-semibold">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    <div className=''>
                    <ul className="list-none mt-16 space-y-2 text-sm font-semibold">
                      <li>Jeffry</li>
                      <li>Alexa</li>
                      <li>Zorro gris</li>
                      <li>Diego</li>
                      <li>Sarali</li>
                      <li>Claudia</li>
                    </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-28 left-28 w-[400px] h-[500px] hidden md:block ">
          <Image src={universidad} alt="Logo university" objectFit="cover" placeholder="blur" priority className='h-52 w-44'/>
        </div>

        <div className="absolute top-96 left-1/3 w-[400px] h-[500px] hidden md:block mt-4">
          <Image src={pareja} alt="Logo university" objectFit="cover" placeholder="blur" priority className='h-48 w-48'/>
        </div>

        <div className="absolute bottom-28 right-56 w-[400px] h-[500px] hidden md:block ">
          <Image src={universidad} alt="Logo university" objectFit="cover" placeholder="blur" priority className='h-52 w-44'/>
        </div>
        

        <div className="absolute bottom-28 left-28 w-[400px] h-[500px] hidden md:block ">
          <Image src={universidad} alt="Logo university" objectFit="cover" placeholder="blur" priority className='h-52 w-44'/>
        </div>

        <div
          className='hidden md:block absolute w-full h-[2px] bg-black top-1/2 transform -translate-y-1/2 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]'
          style={{ zIndex: 20 }}
        >
        </div>

        <div
          className='hidden md:flex absolute top-1/2 transform -translate-y-1/2 justify-center items-center'
          style={{ zIndex: 30 }}
        >
          <svg width="20" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute" style={{ left: '100%', transform: 'translateX(720%)' }}><circle cx="50" cy="50" r="50" fill="black" /></svg>
          <svg width="20" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute" style={{ left: '100%', transform: 'translateX(2400%)' }}><circle cx="50" cy="50" r="50" fill="black" /></svg>
          <svg width="20" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute" style={{ left: '100%', transform: 'translateX(4060%)' }}><circle cx="50" cy="50" r="50" fill="black" /></svg>
          <svg width="20" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hidden md:block absolute" style={{ left: '100%', transform: 'translateX(5700%)' }}><circle cx="50" cy="50" r="50" fill="black" /></svg>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-2">
          <div className="text-center flex-1 min-w-[250px] md:max-w-[300px]">
            <h2 className="text-xl font-bold">Project creation date</h2>
            <p className="text-base">Jul. 2024</p>
          </div>

          <div className="text-center flex-1 min-w-[250px] md:max-w-[300px]">
            <h2 className="text-xl font-bold">Tutor of charge</h2>
            <p className="text-base">Devora Cabezas</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Credits;
