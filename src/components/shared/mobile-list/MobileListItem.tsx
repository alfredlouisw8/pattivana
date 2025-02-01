'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { listItemVariants } from '@src/app/helper/animation';
import { CtfImage, CtfRichText } from '@src/components/features/contentful';

export default function MobileListItem({ item, showImage, index }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-5"
      variants={listItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}>
      <div className={`grid ${showImage ? 'grid-cols-2' : 'grid-cols-1'} gap-5`}>
        {showImage && (
          <a href={item.youtube} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-video w-full">
              <CtfImage
                nextImageProps={{
                  className: 'object-cover',
                  fill: true,
                  alt: item.title,
                }}
                {...item.image}
              />
            </div>
          </a>
        )}

        <div className="flex flex-col gap-3">
          <h2 className="text-lg">{item.title}</h2>
          <CtfRichText
            json={item.description?.json}
            links={item.description?.links}
            className="text-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}
