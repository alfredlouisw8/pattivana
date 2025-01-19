import { CtfImage } from '@src/components/features/contentful';
import Image from 'next/image';
import Link from 'next/link';

import { Menu } from 'types';

interface SidebarProps {
  menus: Menu[];
}

export default function Sidebar({ menus }: SidebarProps) {
  return (
    <div className="hidden h-screen w-52 flex-col items-center justify-between gap-5 bg-cream p-5 lg:flex">
      <div className="relative flex aspect-square h-[10vh] w-[10vh] items-center justify-center">
        <Link href="/">
          <Image
            src={'/assets/images/logo_black.png'}
            alt="Pattivana"
            width={200}
            height={200}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-[1vh]">
        {menus.map(({ image, link }, index) => (
          <Link href={link} key={index}>
            <div className="relative aspect-square h-[10vh] w-[10vh] bg-cover bg-center">
              <CtfImage nextImageProps={{ className: 'object-cover', fill: true }} {...image} />
            </div>
          </Link>
        ))}
      </div>

      <Link href="/contact">
        <div className="w- flex h-14 w-14 flex-none cursor-pointer items-center justify-center overflow-hidden rounded-full">
          <Image src={'/assets/images/contact.png'} alt="Pattivana" width={200} height={200} />
        </div>
      </Link>
    </div>
  );
}
