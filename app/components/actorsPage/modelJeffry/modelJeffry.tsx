import React from 'react';
import IntroductionJeffry from './sections/introductionJeffry';
import BiographyJeffry from './sections/biographyJeffry';
import GalleryJeffry from './sections/GalleryJeffry';

import { useTranslation } from 'react-i18next';
import { VideoSectionJeffry } from './sections/VideoSection';

const ModelJeffry: React.FC = (): JSX.Element => {
  const { t } = useTranslation('global');

  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionJeffry />
        <VideoSectionJeffry />
        <BiographyJeffry />
        <GalleryJeffry />
      </main>
  );
}

export default ModelJeffry;