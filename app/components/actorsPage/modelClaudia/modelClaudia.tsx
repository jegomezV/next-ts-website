import React from 'react';
import IntroductionClaudia from './sections/IntroductionClaudia';
import BiographyClaudia from './sections/BiographyClaudia';
import GalleryClaudia from './sections/GalleryClaudia';

import { useTranslation } from 'react-i18next';
import { VideoSectionClaudia } from './sections/VideoSection';

const ModelClaudia: React.FC = (): JSX.Element => {
  const { t } = useTranslation('global');

  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionClaudia />
        <VideoSectionClaudia />
        <BiographyClaudia />
        <GalleryClaudia />
      </main>
  );
}

export default ModelClaudia;