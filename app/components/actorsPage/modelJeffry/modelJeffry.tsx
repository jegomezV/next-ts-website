import React from 'react';
import IntroductionJeffrey from './sections/introductionJeffry';
import BiographyJeffrey from './sections/biographyJeffry';
import GalleryJeffrey from './sections/GalleryJeffry';
import { VideoSectionJeffry } from './sections/VideoSection';

const ModelJeffry: React.FC = (): JSX.Element => {

  return (
    <main className="relative h-full w-full -translate-y-[8.5rem] overflow-x-clip">
      <IntroductionJeffrey />
      <VideoSectionJeffry />
      <BiographyJeffrey />
      <GalleryJeffrey />
    </main>
  );
}

export default ModelJeffry;