import { draftMode } from 'next/headers';

import Sidebar from '@src/components/shared/sidebar/Sidebar';
import { getMenus } from '@src/app/helper/utils';
import { client, previewClient } from '@src/lib/client';
import { LayoutProps } from 'types';

export default async function MenuLayout({ children, params }: LayoutProps) {
  const { locale } = params;
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const imagesCollection = await gqlClient.GetImages({ locale, preview });

  const images = imagesCollection?.imagesCollection?.items[0];

  const menus = getMenus(images);

  return (
    <section className="flex bg-cream-light">
      <Sidebar menus={menus} />
      {children}
    </section>
  );
}
