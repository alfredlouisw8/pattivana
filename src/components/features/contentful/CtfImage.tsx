import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';
import { getPlaceholderImage } from '@src/app/helper/utils';
import { twMerge } from 'tailwind-merge';

interface ImageProps extends Omit<ImageFieldsFragment, '__typename'> {
  nextImageProps?: Omit<NextImageProps, 'src' | 'alt'>;
}

export const CtfImage = ({ url, width, height, title, nextImageProps }: ImageProps) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set('w', '10');

  if (nextImageProps?.fill) {
    return (
      <NextImage
        src={url}
        alt={title || ''}
        sizes="(max-width: 1200px) 100vw, 50vw"
        placeholder={getPlaceholderImage()}
        {...nextImageProps}
        className={twMerge(nextImageProps?.className, 'transition-all')}
      />
    );
  }

  return (
    <NextImage
      src={url}
      width={width}
      height={height}
      alt={title || ''}
      sizes="(max-width: 1200px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={blurURL.toString()}
      {...nextImageProps}
      className={twMerge(nextImageProps?.className, 'transition-all')}
    />
  );
};
