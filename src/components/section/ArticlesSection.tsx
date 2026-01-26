'use client';

import Template from '@src/app/Template';
import { motion } from 'framer-motion';
import MobileListItem from '../shared/mobile-list/MobileListItem';
import ArticleItem from '../features/articles/ArticleItem';
import Link from 'next/link';

export default function ArticlesSection({ articles }) {
  return (
    <Template className="flex w-full flex-col justify-between lg:p-10">
      <div className="hidden justify-end lg:flex">
        <div className="flex flex-col gap-5">
          <h1 className="text-right text-7xl text-primary">Articles</h1>
        </div>
      </div>
      <div className="sticky top-0  z-10 flex h-[82px] items-center border-b border-b-cream bg-cream-light pl-[5%] lg:hidden">
        <h1 className="text-3xl text-primary">Articles</h1>
      </div>

      <div
        className="flex flex-col gap-5 overflow-auto px-[5%] py-5"
        style={{ minHeight: 'calc(100vh - 75px)', height: '100%' }}>
        <motion.div className="flex flex-col gap-5">
          {articles.map((item, index) => (
            //@ts-ignore
            <Link href={`/articles/${item.slug}`} key={index}>
              <ArticleItem item={item} index={index} />
            </Link>
          ))}
        </motion.div>
      </div>
    </Template>
  );
}
