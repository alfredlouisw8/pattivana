import Image from 'next/image';
import Link from 'next/link';

import menus from '../menu';

export default function Sidebar() {
  return (
    <div className="flex h-screen w-52 flex-col items-center justify-between gap-5 bg-cream p-5">
      <div className="relative flex aspect-square h-[10vh] w-[10vh] items-center justify-center">
        <Image
          src={'/assets/images/logo_black.png'}
          alt="Pattivana"
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-[1vh]">
        {menus.map(({ image, link }, index) => (
          <Link href={link} key={index}>
            <div
              className="position-relative aspect-square h-[10vh] w-[10vh] bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </Link>
        ))}
      </div>

      <div className="w- flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-full bg-white">
        <Image src={'/assets/images/contact.jpg'} alt="Pattivana" width={200} height={200} />
      </div>
    </div>
  );
}
