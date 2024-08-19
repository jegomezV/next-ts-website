import React from 'react';
import IntroductionZorro from './sections/IntroductionZorro';
import BiographyZorro from './sections/BiographyZorro';
import GalleryZorro from './sections/GalleryZorro';

import { useTranslation } from 'react-i18next';

const ModelZorro: React.FC = (): JSX.Element => {
  const { t } = useTranslation('global');

  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionZorro />
        <BiographyZorro />
        <GalleryZorro />
      </main>
  );
}

export default ModelZorro;