'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CtfImage } from '../features/contentful';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';
import { motion } from 'framer-motion';

export default function HomeSection({ homeImage }: { homeImage: ImageFieldsFragment }) {
  return (
    <section className="relative h-screen w-screen bg-cover bg-center grayscale">
      <CtfImage nextImageProps={{ className: 'object-cover', fill: true }} {...homeImage} />
      <Link href="/menu">
        <div className="flex w-full justify-center pt-[5vh]">
          <div className="relative h-[15vh] w-[25vh]">
            <Image src="/assets/images/logo_gray.png" fill alt="Pattivana" sizes="25vh" />
          </div>
        </div>
        {/* Centered text */}
        <motion.div className="absolute inset-0 flex animate-fade-in items-center justify-center text-center">
          <h1 className="text-2xl text-white opacity-75 lg:text-4xl">
            Real memories were made from real experiences
          </h1>
        </motion.div>
      </Link>
    </section>
  );
}
