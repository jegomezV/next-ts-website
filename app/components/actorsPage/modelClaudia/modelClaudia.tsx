import React from 'react';
import IntroductionClaudia from './sections/IntroductionClaudia';
import BiographyClaudia from './sections/BiographyClaudia';
import GalleryClaudia from './sections/GalleryClaudia';


const ModelClaudia: React.FC = (): JSX.Element => {
  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionClaudia />
        <BiographyClaudia />
        <GalleryClaudia />
      </main>
  );
}

export default ModelClaudia;