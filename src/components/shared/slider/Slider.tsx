'use client';
import { CtfImage, CtfRichText } from '@src/components/features/contentful';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

export default function DraggableSlider({ items }) {
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

  return (
    <>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0} // Make the div focusable
        role="region"
        aria-label="Horizontal draggable slider"
        className="no-scrollbar flex items-start gap-5 overflow-auto scroll-smooth py-10 focus:outline-none"
        style={{ width: 'calc(100vw - 270px)' }}>
        {items.map(({ image, title, description, slug }, index) => {
          const active = selectedItem === slug;
          return (
            <div
              className={`group flex flex-col gap-5 transition-all ${active && 'mt-[-30px]'}`}
              key={index}
              onClick={() => setSelectedItem(slug)}
              id={slug}>
              <h2 className={`text-primary transition-all ${active ? 'text-3xl' : 'text-2xl'}`}>
                {title}
              </h2>
              <div
                className={`relative aspect-video transition-all ${
                  active ? 'w-[400px]' : 'w-[300px]'
                }`}>
                <CtfImage
                  nextImageProps={{
                    className: `transition-all object-cover ${
                      active ? 'grayscale-0' : 'grayscale'
                    }`,
                    fill: true,
                  }}
                  {...image}
                />
              </div>
              <CtfRichText
                json={description?.json}
                links={description?.links}
                className={`transition-all ${active && 'text-lg'}`}
              />
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-center">
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
