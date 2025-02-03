import Template from '@src/app/Template';
import { client, previewClient } from '@src/lib/client';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { LandingPageProps } from 'types';

export default async function LinksPage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const imagesCollection = await gqlClient.GetImages({ locale, preview });

  const images = imagesCollection?.imagesCollection?.items[0];

  const links = [
    {
      link: 'https://api.whatsapp.com/send/?phone=628113339132&text=Hi+Pattivana,+I+want+to+book+photographer+and+videographer+for+my+wedding!&type=phone_number&app_absent=0',
      label: 'Chat with us',
    },
    {
      link: 'https://m.youtube.com/@pattivana',
      label: 'Portfolio',
    },
    {
      link: 'https://www.tiktok.com/@pattivana.film?_t=ZS-8tbPNTzorDu&_r=1',
      label: 'TikTok',
    },
    {
      link: 'https://www.pattivana.com/packages',
      label: 'Price List',
    },
  ];

  return (
    <Template
      className="flex h-screen w-full cursor-pointer flex-col gap-24 bg-cover bg-center bg-no-repeat grayscale lg:p-10"
      style={{ backgroundImage: `url('${images?.linksImage?.url}')` }}>
      <div className="flex w-full justify-center pt-[5vh]">
        <div className="relative h-[15vh] w-[25vh]">
          <Image src="/assets/images/logo_white.png" fill alt="Pattivana" sizes="25vh" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        {links.map(({ link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[250px] bg-white px-5 py-2 text-center text-xl uppercase text-cream-dark opacity-75">
            {label}
          </a>
        ))}
      </div>
    </Template>
  );
}
