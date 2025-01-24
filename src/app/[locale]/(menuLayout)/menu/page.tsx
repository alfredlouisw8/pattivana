import { draftMode } from 'next/headers';

import MenuSection from '@src/components/section/MenuSection';
import { getMenus } from '@src/app/helper/utils';
import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';

export default async function MenuPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const imagesCollection = await gqlClient.GetImages({ locale, preview });

  const images = imagesCollection?.imagesCollection?.items[0];

  return <MenuSection images={images} />;
}
