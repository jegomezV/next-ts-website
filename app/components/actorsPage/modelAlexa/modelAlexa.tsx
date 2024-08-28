import React from 'react';
import IntroductionAlexa from './sections/IntroductionAlexa';
import BiographyAlexa from './sections/BiographyAlexa';
import GalleryAlexa from './sections/GalleryAlexa';
import { VideoSectionAlexa } from './sections/VideoSection';

const ModelAlexa: React.FC = (): JSX.Element => {

  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionAlexa />
        <VideoSectionAlexa />
        <BiographyAlexa />
        <GalleryAlexa />
      </main>
  );
}

export default ModelAlexa;