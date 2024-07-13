import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import modelPhoto from '@/public/homeImgs/homeBg/modelsSection/alexaMainPhoto.jpg';
import modelPhoto2 from '@/public/homeImgs/homeBg/modelsSection/diegoMainPhoto.jpg';
import modelPhoto3 from '@/public/homeImgs/homeBg/modelsSection/jeffryMainPhoto.jpg';
import modelPhoto4 from '@/public/homeImgs/homeBg/modelsSection/saraliMainPhoto.jpeg';
import modelPhoto5 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto1.jpg';
import modelPhoto6 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto2.jpg';

import ModelAlexa from '../actors/modelAlexa';
import ModelClaudia from '../actors/modelClaudia';
import ModelDiego from '../actors/modelDiego';
import ModelJeffry from '../actors/modelJeffry';
import ModelSarali from '../actors/modelSarali';
import ModelZorro from '../actors/modelZorro';

const modelPhotos = [ modelPhoto, modelPhoto2, modelPhoto3, modelPhoto4, modelPhoto5, modelPhoto6];
const modelComponents = [ ModelAlexa, ModelDiego, ModelJeffry, ModelSarali, ModelClaudia, ModelZorro];

const ModelsSection: React.FC = (): JSX.Element => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section id='actors'>
      <article>
        <div className="w-full flex overflow-x-scroll h-screen items-center relative space-x-4">
          {modelPhotos.map((photo, index) => (
            <div
              key={index}
              data-scroll
              data-scroll-speed="-0.5"
              className="min-w-[30%] h-[75%] flex justify-center items-center mx-4 relative"
            >
              <Image
                src={photo}
                alt={`Model ${index + 1}`}
                onClick={() => handleOpenModal(index)}
                className='h-full w-full drop-shadow-[0_10px_30px_rgba(0,0,0,2)] cursor-pointer'
              />
            </div>
          ))}
          {openModalIndex !== null && (
            
            <motion.div
              className="fixed inset-0 flex items-center justify-center"
              onClick={handleModalClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md"
                onClick={handleModalClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="bg-white rounded-lg p-4 w-[90%] h-[90%] flex flex-col items-center justify-center absolute drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span
                    className="absolute top-2 right-1 cursor-pointer text-xl bg-slate-200 rounded-full items-center transform hover:bg-slate-500 transition duration-300 hover:scale-105"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </span>
                  {React.createElement(modelComponents[openModalIndex])}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
          <div className='absolute left-[2rem] bottom-[1rem]'>
            <h1 className="
            z-10 text-2xl text-transparent duration-1000
            bg-black cursor-default
            animate-title font-display sm:text-3xl md:text-4xl xl:text-6xl
            whitespace-nowrap bg-clip-text m-b-10 drop-shadow-[0_1.5px_5px_rgba(255,255,255,0.8)]"> Actors <br />
          </h1>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ModelsSection;
