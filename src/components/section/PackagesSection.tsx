'use client';

import { useState } from 'react';
import DraggableSlider from '../shared/slider/Slider';
import { CtfRichText } from '../features/contentful';
import Image from 'next/image';
import MobileList from '../shared/mobile-list/MobileList';
import { ArrowLeft, X } from 'lucide-react';

export default function PackagesSection({ packages }) {
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterClick = tag => {
    setFilteredPackages(
      packages.filter(portfolio => {
        return portfolio.contentfulMetadata?.tags.some(item => item.name === tag);
      }),
    );
    setSelectedFilter(tag);
  };

  const handleClearFilter = () => {
    setFilteredPackages(packages);
    setSelectedFilter('');
  };

  const filters = (
    <>
      <div
        className={`w-fit cursor-pointer bg-cream-dark px-5 transition-all lg:px-7 ${
          selectedFilter === 'photo' && 'scale-110'
        }`}
        onClick={() => handleFilterClick('photo')}>
        <p className="text-xl uppercase text-white lg:text-3xl">Photo</p>
      </div>
      <div
        className={`w-fit cursor-pointer bg-cream-dark px-5 transition-all lg:px-7 ${
          selectedFilter === 'video' && 'scale-110'
        }`}
        onClick={() => handleFilterClick('video')}>
        <p className="text-xl uppercase text-white lg:text-3xl">Video</p>
      </div>
    </>
  );

  return (
    <div
      className={`flex w-full flex-col ${
        selectedFilter ? 'justify-between' : 'justify-center'
      } lg:p-10`}>
      <div className="hidden items-center justify-start pl-10 lg:flex">
        {selectedFilter ? (
          <div className="cursor-pointer" onClick={handleClearFilter}>
            <ArrowLeft />
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            <h1 className="text-right text-7xl text-primary">The Packages</h1>
            <div className="flex items-center justify-start gap-20">{filters}</div>
          </div>
        )}
      </div>
      <div className="sticky top-0  flex h-[75px] items-center border-b border-b-cream bg-cream-light pl-[5%] lg:hidden">
        <h1 className="text-3xl text-primary">The Packages</h1>
      </div>
      {selectedFilter && <DraggableSlider items={filteredPackages} />}

      {/* @ts-ignore */}
      <MobileList items={filteredPackages} filter={filters} />
    </div>
  );
}
