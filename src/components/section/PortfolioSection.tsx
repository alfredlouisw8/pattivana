'use client';

import { PortfoliosFieldsFragment } from '@src/lib/__generated/sdk';

import DraggableSlider from '../shared/slider/Slider';
import Modal from '../shared/modal/Modal';
import { useState } from 'react';

export default function PortfolioSection({ portfolios }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] =
    useState<PortfoliosFieldsFragment[]>(portfolios);

  const handleChange = (e, value) => {
    if (e.target.checked) {
      setSelectedTags(prev => [...prev, value]);
    } else {
      setSelectedTags(selectedTags.filter(tag => tag !== value));
    }
  };

  const tagFilters = [
    {
      type: 'Package',
      tags: [
        {
          label: 'Engagement',
          value: 'engagement',
        },
        {
          label: 'Prewedding',
          value: 'prewedding',
        },
        {
          label: 'Wedding',
          value: 'wedding',
        },
        {
          label: 'Behind the Wedding',
          value: 'behind-the-wedding',
        },
        {
          label: 'Couple Documentary',
          value: 'couple-documentary',
        },
        {
          label: 'Vow and Voyages',
          value: 'vow-and-voyages',
        },
      ],
    },
    {
      type: 'Religion',
      tags: [
        {
          label: 'Moslem',
          value: 'moslem',
        },
        {
          label: 'Christian',
          value: 'christian',
        },
        {
          label: 'Buddhist',
          value: 'buddhist',
        },
      ],
    },
    {
      type: 'Location',
      tags: [
        {
          label: 'Bali',
          value: 'bali',
        },
        {
          label: 'Surabaya',
          value: 'surabaya',
        },
        {
          label: 'Jakarta',
          value: 'jakarta',
        },
      ],
    },
    {
      type: 'Vibe',
      tags: [
        {
          label: 'Fun',
          value: 'fun',
        },
        {
          label: 'Intimate',
          value: 'intimate',
        },
      ],
    },
  ];

  const handleApplyFilter = () => {
    setFilteredPortfolios(
      portfolios.filter(portfolio => {
        if (selectedTags.length === 0) return true;
        return selectedTags.every(tag =>
          portfolio.contentfulMetadata?.tags.some(item => item.name === tag),
        );
      }),
    );
    setIsOpen(false);
  };

  const handleClearFilter = () => {
    setSelectedTags([]);
    setFilteredPortfolios(portfolios);
  };

  return (
    <div className="flex w-full flex-col justify-between p-10">
      <div className="flex justify-end">
        <div className="flex flex-col items-end">
          <h1 className="text-primary text-right text-7xl">
            Our
            <br />
            Portfolios
          </h1>
          <div className="w-fit cursor-pointer bg-cream-dark px-5" onClick={() => setIsOpen(true)}>
            <p className="text-xl uppercase text-white">Filter</p>
          </div>
        </div>
      </div>

      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-10 bg-cream-light p-10">
          <div className="flex flex-col gap-10">
            {tagFilters.map(({ type, tags }) => (
              <div className="flex flex-col gap-5" key={type}>
                <h4 className="text-xl">{type}</h4>
                <div className="grid grid-cols-2">
                  {tags.map(({ label, value }) => (
                    <div className="flex items-center gap-2" key={value}>
                      <input
                        type="checkbox"
                        id={value}
                        name={value}
                        value={value}
                        checked={selectedTags.includes(value)}
                        onChange={e => handleChange(e, value)}
                      />
                      <label htmlFor={value}>{label}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <div
              className="cursor-pointer bg-cream px-5 text-center text-xl uppercase text-white"
              onClick={handleClearFilter}>
              Clear Filter
            </div>
            <div
              className="cursor-pointer bg-cream-dark px-5 text-center text-xl uppercase text-white"
              onClick={handleApplyFilter}>
              Apply Filter
            </div>
          </div>
        </div>
      </Modal>

      <DraggableSlider items={filteredPortfolios} />
    </div>
  );
}
