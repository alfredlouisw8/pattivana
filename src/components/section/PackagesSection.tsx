'use client';

import { useState } from 'react';
import DraggableSlider from '../shared/slider/Slider';

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

  return (
    <div className="flex w-full flex-col justify-between p-10">
      <div className="flex justify-end">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-right text-7xl">
            The
            <br />
            Packages
          </h1>
          <div className="flex items-center justify-end gap-5">
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
          </div>
        </div>
      </div>

      <DraggableSlider items={filteredPackages} />
    </div>
  );
}
