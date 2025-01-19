'use client';

import { Menu } from 'types';
import { CtfImage } from '../features/contentful';
import Link from 'next/link';

interface MenuSectionProps {
  menus: Menu[];
}
export default function MenuSection({ menus }: MenuSectionProps) {
  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      {menus.map(
        ({ image, title, description, show, link }, index) =>
          show && (
            <Link href={link} key={index} className="flex-1">
              <div
                className={`group relative flex h-full flex-col justify-center border-r border-b border-r-cream border-b-cream bg-center pl-10 transition-all active:grayscale-0 lg:justify-start lg:gap-10 lg:p-5 lg:pt-[18vh] lg:grayscale `}>
                <CtfImage
                  nextImageProps={{
                    className: 'object-cover hidden group-hover:block z-[-1]',
                    fill: true,
                  }}
                  {...image}
                />
                <h1 className="text-3xl text-primary">{title}</h1>
                <h3 className="max-w-[50%] text-cream-dark lg:max-w-full lg:text-xl">
                  {description}
                </h3>
              </div>
            </Link>
          ),
      )}
    </div>
  );
}
