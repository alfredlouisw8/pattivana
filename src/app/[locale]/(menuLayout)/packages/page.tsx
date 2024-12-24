import { draftMode } from 'next/headers';

import PackagesSection from '@src/components/section/PackagesSection';
import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';

export default async function PackagesPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const packagesCollection = await gqlClient.GetPackages({ locale, preview });

  const packages = packagesCollection?.packagesCollection?.items;

  return <PackagesSection packages={packages} />;
}
