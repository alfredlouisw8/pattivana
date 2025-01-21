import { draftMode } from 'next/headers';

import Sidebar from '@src/components/shared/sidebar/Sidebar';
import { getMenus } from '@src/app/helper/utils';
import { client, previewClient } from '@src/lib/client';
import { LayoutProps } from 'types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pattivana',
    description: 'Pattivana',
  };
}

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

      <div className="fixed right-0 top-0 z-20 flex h-[75px] w-[75px] items-center justify-center bg-cream p-3 lg:hidden">
        <Link href="/menu">
          <Image src={'/assets/images/logo_black.png'} alt="Pattivana" width={200} height={200} />
        </Link>
      </div>

      <div className="fixed bottom-5 right-5 z-20 flex h-[50px] w-[50px] items-center justify-center lg:hidden">
        <Link href="/contact">
          <Image src={'/assets/images/contact.png'} alt="Pattivana" width={200} height={200} />
        </Link>
      </div>
      {children}
    </section>
  );
}
