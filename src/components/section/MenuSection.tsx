'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MenuSection() {
  const menus = [
    {
      link: '/',
      image: '/assets/images/intimate.png',
      show: false,
    },
    {
      link: '#',
      image: '/assets/images/intimate.png',
      show: true,
      title: 'The\nPackages',
      description:
        'Engagement - Prewedding - Wedding - Behind The Wedding - Couple Documentary - Proposal - Wedding Anniversary',
    },
    {
      link: '#',
      image: '/assets/images/intimate.png',
      show: true,
      title: 'Our\nPortfolios',
      description: 'Find out videos that makes you laugh and cry at the same time',
    },
    {
      link: '#',
      image: '/assets/images/intimate.png',
      show: true,
      title: 'Special\nDeals',
      description: "Don't miss our special offer, from bundling package, wedding fair, etc.",
    },
    {
      link: '#',
      image: '/assets/images/intimate.png',
      title: 'Love Profile\nCheck',
      description: 'Still confused where to begin? Start here and take the test!',
      show: true,
    },
  ];

  return (
    <section className="flex bg-cream-light ">
      <div className="flex h-screen w-52 flex-col items-center justify-between gap-20 bg-cream p-5">
        <Image
          src={'/assets/images/logo_black.png'}
          alt="Pattivana"
          width={200}
          height={200}
          className="flex-none"
        />

        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          {menus.map(({ image, link }, index) => (
            <Link href={link} key={index}>
              <div
                className="position-relative aspect-square h-20 w-20 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </Link>
          ))}
        </div>

        <div className="w- flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-full bg-white">
          <Image src={'/assets/images/contact.jpg'} alt="Pattivana" width={200} height={200} />
        </div>
      </div>

      <div className="flex w-full">
        {menus.map(
          ({ image, title, description, show }, index) =>
            show && (
              <div
                key={index}
                onMouseEnter={e => (e.currentTarget.style.backgroundImage = `url('${image}')`)}
                onMouseLeave={e => (e.currentTarget.style.backgroundImage = 'none')}
                className={`flex flex-1 flex-col justify-start gap-10 border-r border-r-cream bg-center p-5 pt-[20%] grayscale transition-all active:grayscale-0`}>
                <h1 className="text-3xl uppercase tracking-wide text-cream-dark">{title}</h1>
                <h3 className="text-xl text-cream-dark">{description}</h3>
              </div>
            ),
        )}
      </div>
    </section>
  );
}
