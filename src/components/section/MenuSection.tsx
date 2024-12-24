'use client';

import { Menu } from 'types';
import { CtfImage } from '../features/contentful';
import Link from 'next/link';

interface MenuSectionProps {
  menus: Menu[];
}
export default function MenuSection({ menus }: MenuSectionProps) {
  return (
    <div className="flex w-full">
      {menus.map(
        ({ image, title, description, show, link }, index) =>
          show && (
            <Link href={link} key={index} className="flex-1">
              <div
                className={`group relative flex h-full flex-col justify-start gap-10 border-r border-r-cream bg-center p-5 pt-[18vh] grayscale transition-all active:grayscale-0`}>
                <CtfImage
                  nextImageProps={{
                    className: 'object-cover hidden group-hover:block z-[-1]',
                    fill: true,
                  }}
                  {...image}
                />
                <h1 className="text-primary text-3xl">{title}</h1>
                <h3 className="text-xl text-cream-dark">{description}</h3>
              </div>
            </Link>
          ),
      )}
    </div>
  );
}
