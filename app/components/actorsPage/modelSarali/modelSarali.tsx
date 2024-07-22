import React from 'react';
import IntroductionSarali from './sections/IntroductionSarali';
import BiographySarali from './sections/BiographySarali';
import GallerySarali from './sections/GallerySarali';


const ModelSarali: React.FC = (): JSX.Element => {
  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionSarali />
        <BiographySarali />
        <GallerySarali />
      </main>
  );
}

export default ModelSarali;