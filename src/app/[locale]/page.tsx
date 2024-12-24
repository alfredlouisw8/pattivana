import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use, useState } from 'react';

import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import HomeSection from '@src/components/section/HomeSection';
import MenuSection from '@src/components/section/MenuSection';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import Sidebar from '@src/components/shared/sidebar/Sidebar';
import initTranslations from '@src/i18n';
import { locales } from '@src/i18n/config';
import { ImageFieldsFragment, PageBlogPostOrder } from '@src/lib/__generated/sdk';
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
