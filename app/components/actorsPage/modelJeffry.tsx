import React from 'react';

const ModelJeffry: React.FC = (): JSX.Element => {
  return (
    <div className='max-h-[80%] max-w-[80%] mx-auto my-4 p-4'>
      <div className='text-center'>
      <h1
              data-scroll
              data-scroll-speed="-0.2"
              className="text-2xl text-transparent duration-1000 bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"
            >
              Jeffry Model
            </h1>
        <p className='text-gray-600'>
          Descripción del modelo Jeffry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus interdum mi sed fermentum interdum. Sed sed vestibulum urna. Phasellus
          malesuada augue ac nisl bibendum, at lacinia est varius.
        </p>
      </div>
    </div>
  );
}

export default ModelJeffry;
