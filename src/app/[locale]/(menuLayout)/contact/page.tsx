import { draftMode } from 'next/headers';

import MenuSection from '@src/components/section/MenuSection';
import { getMenus } from '@src/app/helper/utils';
import { client, previewClient } from '@src/lib/client';
import { LandingPageProps } from 'types';
import Template from '@src/app/Template';

export default async function ContactPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const imagesCollection = await gqlClient.GetImages({ locale, preview });

  const images = imagesCollection?.imagesCollection?.items[0];

  return (
    <Template
      className="flex h-screen w-full cursor-pointer flex-col justify-between bg-cover bg-center bg-no-repeat lg:p-10"
      style={{ backgroundImage: `url('${images?.contactImage?.url}')` }}>
      <div className="hidden justify-end lg:flex">
        <h1 className="text-right text-7xl uppercase text-white">
          Contact <br /> Us
        </h1>
      </div>

      <div className="sticky top-0 flex h-[75px] items-center border-b border-b-cream bg-cream-light pl-[5%] lg:hidden">
        <h1 className="text-3xl text-primary">Contact Us</h1>
      </div>

      <div className="flex justify-center pb-20 lg:justify-end lg:pb-0">
        <div className="flex items-end gap-10 opacity-75">
          <h6 className="text-right text-sm text-white lg:text-xl">
            Based in Indonesia <br /> Available worldwide
          </h6>
          <div className=" border-r border-r-white" style={{ height: 'calc(100% + 50px)' }} />
          <h6 className="text-sm text-white lg:text-xl">
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
    </Template>
  );
}
