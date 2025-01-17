import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import HomeSection from '@src/components/section/HomeSection';
import initTranslations from '@src/i18n';
import { ImageFieldsFragment } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pattivana',
    description: 'Pattivana',
  };
}

export default async function Page({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const { t, resources } = await initTranslations({ locale });
  const gqlClient = preview ? previewClient : client;

  const images = await gqlClient.GetImages({ locale, preview });

  const homeImage = images?.imagesCollection?.items[0]?.homeImage as ImageFieldsFragment;

  return <HomeSection homeImage={homeImage} />;
}
