import React from 'react';
import IntroductionSarali from './sections/IntroductionSarali';
import BiographySarali from './sections/BiographySarali';
import GallerySarali from './sections/GallerySarali';

import { useTranslation } from 'react-i18next';
import { VideoSectionSarali } from './sections/VideoSection';

const ModelSarali: React.FC = (): JSX.Element => {
  const { t } = useTranslation('global');

  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionSarali />
        <VideoSectionSarali />
        <BiographySarali />
        <GallerySarali />
      </main>
  );
}

export default ModelSarali;