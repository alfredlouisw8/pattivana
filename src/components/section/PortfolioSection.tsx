'use client';

import { PortfoliosFieldsFragment } from '@src/lib/__generated/sdk';

import DraggableSlider from '../shared/slider/Slider';
import { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

import MobileList from '../shared/mobile-list/MobileList';
import { Checkbox } from '../ui/checkbox';

export default function PortfolioSection({ portfolios }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] =
    useState<PortfoliosFieldsFragment[]>(portfolios);

  const handleChange = (checked: boolean | 'indeterminate', value: string) => {
    if (checked) {
      setSelectedTags(prev => [...prev, value]);
    } else {
      setSelectedTags(prev => prev.filter(tag => tag !== value));
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
  };

  const handleClearFilter = () => {
    setSelectedTags([]);
    setFilteredPortfolios(portfolios);
  };

  const filters = (
    <Drawer>
      <DrawerTrigger>
        <div className="w-fit cursor-pointer bg-cream-dark px-5">
          <p className="text-xl uppercase text-white">Filter</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <p className="text-2xl uppercase">Filter</p>
          </DrawerTitle>

          {tagFilters.map((filter, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-xl uppercase">{filter.type}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {filter.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Checkbox
                          id={tag.value}
                          name={tag.value}
                          value={tag.value}
                          onCheckedChange={checked => handleChange(checked, tag.value)}
                          checked={selectedTags.includes(tag.value)}
                        />
                        <label htmlFor={tag.value} className="text-lg">
                          {tag.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <div
              className="cursor-pointer bg-cream px-5 text-center text-xl uppercase text-white"
              onClick={handleClearFilter}>
              Clear Filter
            </div>
          </DrawerClose>

          <DrawerClose>
            <div
              className="cursor-pointer bg-cream-dark px-5 text-center text-xl uppercase text-white"
              onClick={handleApplyFilter}>
              Apply Filter
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <div className="flex w-full flex-col justify-between lg:p-10">
      <div className="hidden justify-end lg:flex">
        <div className="flex flex-col gap-5">
          <h1 className="text-right text-7xl text-primary">
            Our
            <br />
            Portfolio
          </h1>
          <div className="flex items-center justify-end gap-5">
            <Dialog>
              <DialogTrigger>
                <div className="w-fit cursor-pointer bg-cream-dark px-5">
                  <p className="text-xl uppercase text-white">Filter</p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <h2 className="text-2xl uppercase">Filter</h2>
                  </DialogTitle>
                  <div className="flex flex-col gap-10 bg-cream-light ">
                    <div className="flex flex-col gap-10">
                      {tagFilters.map(({ type, tags }) => (
                        <div className="flex flex-col gap-5" key={type}>
                          <h4 className="text-xl">{type}</h4>
                          <div className="grid grid-cols-2">
                            {tags.map(({ label, value }) => (
                              <div className="flex items-center gap-2" key={value}>
                                <Checkbox
                                  id={value}
                                  name={value}
                                  value={value}
                                  onCheckedChange={checked => handleChange(checked, value)}
                                  checked={selectedTags.includes(value)}
                                />
                                <label htmlFor={value}>{label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-5">
                      <DialogClose>
                        <div
                          className="cursor-pointer bg-cream px-5 text-center text-xl uppercase text-white"
                          onClick={handleClearFilter}>
                          Clear Filter
                        </div>
                      </DialogClose>

                      <DialogClose>
                        <div
                          className="cursor-pointer bg-cream-dark px-5 text-center text-xl uppercase text-white"
                          onClick={handleApplyFilter}>
                          Apply Filter
                        </div>
                      </DialogClose>
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="sticky top-0  flex h-[75px] items-center border-b border-b-cream bg-cream-light pl-[5%] lg:hidden">
        <h1 className="text-3xl text-primary">Our Portfolio</h1>
      </div>

      <DraggableSlider items={filteredPortfolios} />

      {/* @ts-ignore */}
      <MobileList items={filteredPortfolios} showImage filter={filters} />
    </div>
  );
}
