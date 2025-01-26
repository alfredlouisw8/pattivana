'use client';
import { CtfImage, CtfRichText } from '@src/components/features/contentful';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { listContainerVariants, listItemVariants } from '@src/app/helper/animation';

export default function DraggableSlider({ items, portrait = false, title = '' }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!sliderRef.current) return;
    if (e.key === 'ArrowLeft') {
      sliderRef.current.scrollLeft -= 50; // Scroll left on left arrow key
    } else if (e.key === 'ArrowRight') {
      sliderRef.current.scrollLeft += 50; // Scroll right on right arrow key
    }
  };

  const handleSelectItem = (slug, active, youtube) => {
    setSelectedItem(slug);

    // Find the element and scroll it into view
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }

    if (active && youtube) {
      window.open(youtube, '_blank');
    }
  };

  return (
    <>
      <div className="hidden flex-col gap-10 lg:flex">
        {title && <h1 className="text-2xl text-primary">{title}</h1>}
        <motion.div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          tabIndex={0} // Make the div focusable
          role="region"
          aria-label="Horizontal draggable slider"
          className="no-scrollbar hidden items-start gap-5 overflow-auto scroll-smooth py-10 focus:outline-none lg:flex"
          initial="hidden"
          animate="visible"
          variants={listContainerVariants}
          style={{ width: 'calc(100vw - 270px)' }}>
          {items.map(({ image, title, description, slug, contentfulMetadata, youtube }, index) => {
            const active = selectedItem === slug;
            const activeWidth = portrait ? 'w-[300px]' : 'w-[300px]';
            const nonActiveWidth = portrait ? 'w-[200px]' : 'w-[250px]';
            return (
              <motion.div
                variants={listItemVariants} // Attach the item variants
                className={`group flex cursor-pointer flex-col justify-between gap-5 ${
                  active && 'mt-[-30px]'
                }`}
                key={index}
                onClick={() => handleSelectItem(slug, active, youtube)}
                id={slug}>
                <div
                  className={`relative ${
                    portrait ? 'aspect-[4/5]' : 'aspect-video'
                  } transition-all ${active ? activeWidth : nonActiveWidth}`}>
                  <CtfImage
                    nextImageProps={{
                      className: `transition-all object-cover  ${
                        active ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                      }`,
                      fill: true,
                    }}
                    {...image}
                  />
                </div>
                {/* {contentfulMetadata &&
                contentfulMetadata.tags &&
                contentfulMetadata.tags.length > 0 && (
                  <div className="flex flex-wrap">
                    {contentfulMetadata.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="mr-2 mb-2 rounded bg-cream px-2 py-1 text-xs font-semibold uppercase leading-none tracking-widest text-cream-dark">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )} */}

                {active && (
                  <div className="flex flex-col gap-5">
                    <h2
                      className={`text-primary transition-all ${active ? 'text-2xl' : 'text-xl'}`}>
                      {title}
                    </h2>
                    <div className=" max-h-[30vh] overflow-y-auto scrollbar-thin scrollbar-track-cream scrollbar-thumb-cream-dark">
                      <CtfRichText
                        json={description?.json}
                        links={description?.links}
                        className={`transition-all ${!active && 'text-sm'}`}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="hidden w-full justify-center lg:flex">
        <div className="flex w-[50vw] items-center">
          {items.map(({ slug }, index) => {
            const active = selectedItem === slug;
            return (
              <a href={`#${slug}`} key={index} style={{ flex: 1 / items.length }}>
                <div
                  className={`${active ? 'h-3 bg-cream-dark' : 'h-2 bg-cream'} `}
                  onClick={() => setSelectedItem(slug)}>
                  &nbsp;
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
