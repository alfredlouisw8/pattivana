import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { listContainerVariants } from '@src/app/helper/animation';
import MobileListItem from './MobileListItem';

export default function MobileList({ items, showImage = false, filter = null }) {
  return (
    <div
      className="flex flex-col gap-5 overflow-auto px-[5%] py-5 lg:hidden"
      style={{ minHeight: 'calc(100vh - 75px)', height: '100%' }}>
      <div className="flex justify-end gap-3 p-3">{filter}</div>
      <motion.div className="flex flex-col gap-5">
        {items.map((item, index) => (
          //@ts-ignore
          <MobileListItem key={index} item={item} showImage={showImage} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
