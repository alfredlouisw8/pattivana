import PortfolioSection from '@src/components/section/PortfolioSection';
import { client, previewClient } from '@src/lib/client';
import { draftMode } from 'next/headers';
import { LandingPageProps } from 'types';

export default async function PortfolioPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const portfoliosCollection = await gqlClient.GetPortfolios({ locale, preview });

  const portfolios = portfoliosCollection?.portfoliosCollection?.items;

  console.log('portfolios', portfolios);

  return <PortfolioSection portfolios={portfolios} />;
}
