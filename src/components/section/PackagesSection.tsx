'use client';

import { useState } from 'react';
import DraggableSlider from '../shared/slider/Slider';
import { CtfRichText } from '../features/contentful';
import Image from 'next/image';
import MobileList from '../shared/mobile-list/MobileList';

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
      {selectedFilter && (
        <div onClick={handleClearFilter} className="cursor-pointer text-cream-dark">
          ✖
        </div>
      )}
      <div
        className={`w-fit cursor-pointer bg-cream-dark px-5 transition-all ${
          selectedFilter === 'photo' && 'scale-110'
        }`}
        onClick={() => handleFilterClick('photo')}>
        <p className="text-xl uppercase text-white">Photo</p>
      </div>
      <div
        className={`w-fit cursor-pointer bg-cream-dark px-5 transition-all ${
          selectedFilter === 'video' && 'scale-110'
        }`}
        onClick={() => handleFilterClick('video')}>
        <p className="text-xl uppercase text-white">Video</p>
      </div>
    </>
  );

  return (
    <div className="flex w-full flex-col justify-between lg:p-10">
      <div className="hidden justify-end lg:flex">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-right text-7xl">
            The
            <br />
            Packages
          </h1>
          <div className="flex items-center justify-end gap-5">{filters}</div>
        </div>
      </div>
      <div className="sticky top-0  flex h-[75px] items-center border-b border-b-cream bg-cream-light pl-[5%] lg:hidden">
        <h1 className="text-primary text-3xl">The Packages</h1>
      </div>
      <DraggableSlider items={filteredPackages} />

      {/* @ts-ignore */}
      <MobileList items={filteredPackages} filter={filters} />
    </div>
  );
}
