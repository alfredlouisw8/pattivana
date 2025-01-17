import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

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
    // @ts-ignore
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
});

export const CtfRichText = ({ json, links, ...props }: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });

  return <article {...props}>{documentToReactComponents(json, baseOptions)}</article>;
};
