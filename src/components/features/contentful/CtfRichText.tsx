// @ts-nocheck
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import Image from 'next/image';

export interface ContentfulRichTextInterface {
  json: Document;
  links?:
    | {
        entries: {
          block: any;
        };
      }
    | any;
  className?: string;
}

export const contentfulBaseRichTextOptions = ({ links }: ContentfulRichTextInterface): Options => ({
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const assetId = node.data.target.sys.id;
      const asset = links?.assets?.block?.find((asset: any) => asset.sys.id === assetId);

      if (!asset) return null;

      const { url, width, height, description } = asset;

      return (
        <Image
          src={url}
          width={width || 600}
          height={height || 400}
          alt={description || 'Image'}
          className="my-4 rounded"
        />
      );
    },
    // Optionally handle embedded entries (like other referenced content)
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const entryId = node.data.target.sys.id;
      const entry = links?.entries?.block?.find((entry: any) => entry.sys.id === entryId);

      if (!entry) return null;

      // You can customize this further for specific entry types
      return (
        <div className="my-4 rounded bg-gray-100 p-4">
          <h3>{entry.title}</h3>
          <p>{entry.summary}</p>
        </div>
      );
    },
  },
});

export const CtfRichText = ({ json, links, ...props }: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });

  return <article {...props}>{documentToReactComponents(json, baseOptions)}</article>;
};
