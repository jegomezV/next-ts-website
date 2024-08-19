import React from 'react';
import IntroductionDiego from './sections/IntroductionDiego';
import BiographyDiego from './sections/BiographyDiego';
import GalleryDiego from './sections/GalleryDiego';

import { useTranslation } from 'react-i18next';

const ModelDiego: React.FC = (): JSX.Element => {
  const { t } = useTranslation('global');

  return (
      <main className="relative h-full w-full -translate-y-[8.5rem]">
        <IntroductionDiego />
        <BiographyDiego />
        <GalleryDiego />
      </main>
  );
}

export default ModelDiego;