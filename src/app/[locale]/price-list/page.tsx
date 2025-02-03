import { draftMode } from 'next/headers';

import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';
import DealsSection from '@src/components/section/DealsSection';
import PriceListSection from '@src/components/section/PriceListSection';

export default async function PriceListPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const priceListCollection = await gqlClient.GetPriceList({ locale, preview });

  const priceList = priceListCollection?.priceListCollection?.items;

  return <PriceListSection priceList={priceList} />;
}
