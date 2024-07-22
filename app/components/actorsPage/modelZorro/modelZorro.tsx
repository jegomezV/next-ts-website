import React from 'react';
import IntroductionZorro from './sections/IntroductionZorro';
import BiographyZorro from './sections/BiographyZorro';
import GalleryZorro from './sections/GalleryZorro';


const ModelZorro: React.FC = (): JSX.Element => {
  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionZorro />
        <BiographyZorro />
        <GalleryZorro />
      </main>
  );
}

export default ModelZorro;