import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import modelPhoto from '@/public/homeImgs/homeBg/modelsSection/alexaMainPhoto.jpg';
import modelPhoto2 from '@/public/homeImgs/homeBg/modelsSection/diegoMainPhoto.jpg';
import modelPhoto3 from '@/public/homeImgs/homeBg/modelsSection/jeffryMainPhoto.jpg';
import modelPhoto4 from '@/public/homeImgs/homeBg/modelsSection/saraliMainPhoto.jpeg';
import modelPhoto5 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto1.jpg';
import modelPhoto6 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto2.jpg';

const modelPhotos = [modelPhoto, modelPhoto2, modelPhoto3, modelPhoto4, modelPhoto5, modelPhoto6,];

const modelData = [
  {
    title: 'Modelo 1',
    description:
      'Descripción del modelo 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Modelo 2',
    description:
      'Descripción del modelo 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descripción del modelo 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    title: 'Modelo 3',
    description:
      'Descripción del modelo 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Modelo 4',
    description:
      'Descripción del modelo 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Modelo 5',
    description:
      'Descripción del modelo 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Modelo 6',
    description:
      'Descripción del modelo 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

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
    <section data-scroll-section>
      <article>
        <div className="w-full flex overflow-x-scroll h-screen items-center relative space-x-4">
          <div className='absolute left-[7rem] top-[2rem]'>
            <h1 className="z-10 text-2xl text-transparent duration-1000 bg-black cursor-default animate-title font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text">
              Actors <br />
            </h1>
          </div>
          {modelPhotos.map((photo, index) => (
            <div
              key={index}
              data-scroll
              data-scroll-speed="-0.5"
              className="min-w-[40%] h-[75%] flex justify-center items-center mx-4 relative"
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
                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
                onClick={handleModalClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="bg-white rounded-lg p-4 w-3/4 h-3/4 max-w-[90%] max-h-[90%] flex flex-col items-center justify-center relative"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span
                    className="absolute top-2 right-1 cursor-pointer text-xl bg-slate-200 rounded-full items-center transfor hover:bg-slate-500 transition duration-300 hover:scale-105 "
                    onClick={handleCloseModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                  </span>
                  <div className='max-h-[80%] max-w-[80%] overflow-y-hidden'>
                    <p className='font-bold text-xl text-center mb-4'>
                      {modelData[openModalIndex].title}
                    </p>
                    <p>
                      {modelData[openModalIndex].description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </article>
    </section>
  );
};

export default ModelsSection;