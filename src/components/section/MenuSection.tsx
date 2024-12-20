'use client';

import Image from 'next/image';
import Link from 'next/link';

import menus from '../shared/menu';
import Sidebar from '../shared/sidebar/Sidebar';

export default function MenuSection() {
  return (
    <section className="flex bg-cream-light ">
      <Sidebar />

      <div className="flex w-full">
        {menus.map(
          ({ image, title, description, show }, index) =>
            show && (
              <div
                key={index}
                onMouseEnter={e => (e.currentTarget.style.backgroundImage = `url('${image}')`)}
                onMouseLeave={e => (e.currentTarget.style.backgroundImage = 'none')}
                className={`flex flex-1 flex-col justify-start gap-10 border-r border-r-cream bg-center p-5 pt-[18vh] grayscale transition-all active:grayscale-0`}>
                <h1 className="text-primary text-3xl">{title}</h1>
                <h3 className="text-xl text-cream-dark">{description}</h3>
              </div>
            ),
        )}
      </div>
    </section>
  );
}
