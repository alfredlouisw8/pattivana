import { draftMode } from 'next/headers';

import MenuSection from '@src/components/section/MenuSection';
import { getMenus } from '@src/app/helper/utils';
import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';

export default async function ContactPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const imagesCollection = await gqlClient.GetImages({ locale, preview });

  const images = imagesCollection?.imagesCollection?.items[0];

  return (
    <div
      className="flex w-full cursor-pointer flex-col justify-between bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: `url('${images?.contactImage?.url}')` }}>
      <div className="flex justify-end">
        <h1 className="text-right text-7xl uppercase text-white">
          Contact <br /> Us
        </h1>
      </div>

      <div className="flex justify-end">
        <div className="flex items-end gap-10">
          <h6 className="text-xl text-white">
            Based in Indonesia <br /> Available worldwide
          </h6>
          <div className=" border-r border-r-white" style={{ height: 'calc(100% + 50px)' }} />
          <h6 className="text-xl text-white">
            We would love to know you,
            <br />
            <br />
            Don&apos;t hesitate to contact us for a special offer
            <br />
            Call/Whatsapp : +62 811-3339-132
            <br />
            Email : pattivana.co@gmail.com
            <br />
            Office : Pecatu E17/22 Surabaya, Indonesia
          </h6>
        </div>
      </div>
    </div>
  );
}
