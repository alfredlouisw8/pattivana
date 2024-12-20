'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection() {
  const bgImage = '/assets/images/intimate.png';

  return (
    <section
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="h-screen w-screen bg-cover bg-center grayscale">
      <Link href="/menu">
        <div className="flex w-full justify-center pt-[5vh]">
          <div className="relative h-[15vh] w-[25vh]">
            <Image src="/assets/images/logo_gray.png" layout="fill" alt="Pattivana" />
          </div>
        </div>
        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-2xl text-white md:text-4xl">
            Real memories were made from real experiences
          </h1>
        </div>
      </Link>
    </section>
  );
}
