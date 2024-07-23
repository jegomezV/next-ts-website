import React from 'react';
import { motion } from 'framer-motion';

const Credits: React.FC = (): JSX.Element => {
  return (
    <section
      data-scroll-section
      id='credits'
      className="relative w-full min-h-screen items-center bg-slate-200"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: 'spring', stiffness: 100 }}
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="0.1"
        className="relative w-full max-w-5xl mx-auto p-8 "
      >
        <h1 className='text-6xl lg:text-7xl text-white text-center font-semibold mt-4 mb-4  drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.9)]'>
          Project credits
        </h1>

        <div className='relative text-white p-8 overflow-auto rounded-md'>
          <div className="scroll-content">
            <div
              data-scroll
              data-scroll-speed="-1"
              data-scroll-delay="0.5"
              className="mb-12"
            >
              <h2 className="text-center text-xl lg:text-3xl font-bold mb-3 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                Information about the University
              </h2>
              <p className="text-center text-xl font-bold text-slate-900">
                The University of Example is a prestigious institution known for its excellence in education and research.
              </p>
            </div>
            <div
              data-scroll
              data-scroll-speed="-1"
              data-scroll-delay="0.5"
              className="mb-12"
            >
              <h2 className="text-center text-xl lg:text-3xl font-bold mb-3 sticky top-8 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                Information about Us
              </h2>
              <p className="text-center text-xl font-bold text-slate-900">
                Our team comprises passionate individuals dedicated to pushing the boundaries of fashion and beauty.
              </p>
            </div>
            <div
              data-scroll
              data-scroll-speed="-1"
              data-scroll-delay="0.5"
              className="mb-12"
            >
              <h2 className="text-center text-xl lg:text-3xl font-bold mb-3 sticky top-8 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                Faculty
              </h2>
              <p className="text-center text-xl font-bold text-slate-900">
                Our faculty members are experts in their fields, bringing a wealth of knowledge and experience to the project.
              </p>
            </div>
            <div
              data-scroll
              data-scroll-speed="-1"
              data-scroll-delay="0.5"
              className="mb-12"
            >
              <h2 className="text-center text-xl lg:text-3xl font-bold mb-3 sticky top-8 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                Tutor in charge of the project
              </h2>
              <p className="text-center text-xl font-bold text-slate-900">
                Julanito de tal
              </p>
            </div>
            <div
              data-scroll
              data-scroll-speed="-1"
              data-scroll-delay="0.5"
              className="mb-12"
            >
              <h2 className="text-center text-xl lg:text-3xl font-bold mb-3 sticky top-8 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                Acknowledgments
              </h2>
              <p className="text-center text-xl font-bold text-slate-900">
                Julanito de tal, Pepito Perez, Julanita de tal
              </p>
            </div>
            <div
              data-scroll
              data-scroll-speed="-1"
              data-scroll-delay="0.5"
              className="mb-12">
              <h2 className="text-center text-xl lg:text-3xl font-bold mb-3 sticky top-8 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                Project creation date
              </h2>
              <p className="text-center text-xl font-bold text-slate-900">
                Date of the project
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Credits;
