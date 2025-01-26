'use client';

import { motion } from 'framer-motion';

export default function Template({ ...props }) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    />
  );
}
