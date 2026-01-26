'use client';

import { CtfImage, CtfRichText } from '../contentful';

export default function ArticleDetail({ article }) {
  const { title, thumbnail, description } = article;

  return (
    <div
      className="mx-auto mt-[75px] w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-10 lg:mt-0 lg:px-8 lg:py-16"
      style={{ minHeight: 'calc(100vh - 75px)', height: '100%' }}>
      {/* Title */}
      <h1 className="mb-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>

      {/* Thumbnail */}
      {thumbnail && (
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg">
          <CtfImage
            nextImageProps={{
              className: 'object-cover',
              fill: true,
              alt: title,
              sizes: '(max-width: 768px) 100vw, 768px',
            }}
            {...thumbnail}
          />
        </div>
      )}

      {/* Rich Text */}
      <div className="prose prose-sm max-w-none sm:prose-base lg:prose-lg">
        <CtfRichText
          json={description?.json}
          links={description?.links}
          className="text-sm sm:text-base"
        />
      </div>
    </div>
  );
}
