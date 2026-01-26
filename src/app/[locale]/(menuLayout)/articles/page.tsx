import ArticlesSection from '@src/components/section/ArticlesSection';
import PortfolioSection from '@src/components/section/PortfolioSection';
import { client, previewClient } from '@src/lib/client';
import { draftMode } from 'next/headers';
import { LandingPageProps } from 'types';

export default async function ArticlesPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const articlesCollection = await gqlClient.GetArticles({ locale, preview });

  const articles = articlesCollection?.articlesCollection?.items;

  return <ArticlesSection articles={articles} />;
}
