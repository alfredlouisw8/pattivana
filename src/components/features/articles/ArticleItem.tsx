'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { listItemVariants } from '@src/app/helper/animation';
import { CtfImage, CtfRichText } from '@src/components/features/contentful';

export default function ArticleItem({ item, index }) {
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
      <div className={`grid grid-cols-2 gap-5`}>
        <div className="relative aspect-video w-full">
          <CtfImage
            nextImageProps={{
              className: 'object-cover',
              fill: true,
              alt: item.title,
            }}
            {...item.thumbnail}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg lg:text-2xl">{item.title}</h2>
        </div>
      </div>
    </motion.div>
  );
}
