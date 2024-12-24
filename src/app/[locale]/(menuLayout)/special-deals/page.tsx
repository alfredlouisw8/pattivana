import { draftMode } from 'next/headers';

import PackagesSection from '@src/components/section/PackagesSection';
import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';
import DealsSection from '@src/components/section/DealsSection';

export default async function SpecialDealsPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const packagesCollection = await gqlClient.GetDeals({ locale, preview });

  const deals = packagesCollection?.specialDealsCollection?.items;

  return <DealsSection deals={deals} />;
}
