import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  imagesCollection?: Maybe<ImagesCollection>;
  packagesCollection?: Maybe<PackagesCollection>;
  portfoliosCollection?: Maybe<PortfoliosCollection>;
  quizAnswerCollection?: Maybe<QuizAnswerCollection>;
  specialDealsCollection?: Maybe<SpecialDealsCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPackagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPortfoliosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsQuizAnswerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSpecialDealsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type Images = Entry & _Node & {
  __typename?: 'Images';
  _id: Scalars['ID'];
  contactImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  dealsImage?: Maybe<Asset>;
  dealsMobileImage?: Maybe<Asset>;
  homeImage?: Maybe<Asset>;
  linkedFrom?: Maybe<ImagesLinkingCollections>;
  linksImage?: Maybe<Asset>;
  loveProfileImage?: Maybe<Asset>;
  loveProfileMobileImage?: Maybe<Asset>;
  menuImage?: Maybe<Asset>;
  packagesImage?: Maybe<Asset>;
  packagesMobileImage?: Maybe<Asset>;
  portfolioMobileImage?: Maybe<Asset>;
  portfoliosImage?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesContactImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesDealsImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesDealsMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesHomeImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesLinksImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesLoveProfileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesLoveProfileMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesMenuImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesPackagesImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesPackagesMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesPortfolioMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesPortfoliosImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/images) */
export type ImagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ImagesCollection = {
  __typename?: 'ImagesCollection';
  items: Array<Maybe<Images>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImagesFilter>>>;
  contactImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dealsImage_exists?: InputMaybe<Scalars['Boolean']>;
  dealsMobileImage_exists?: InputMaybe<Scalars['Boolean']>;
  homeImage_exists?: InputMaybe<Scalars['Boolean']>;
  linksImage_exists?: InputMaybe<Scalars['Boolean']>;
  loveProfileImage_exists?: InputMaybe<Scalars['Boolean']>;
  loveProfileMobileImage_exists?: InputMaybe<Scalars['Boolean']>;
  menuImage_exists?: InputMaybe<Scalars['Boolean']>;
  packagesImage_exists?: InputMaybe<Scalars['Boolean']>;
  packagesMobileImage_exists?: InputMaybe<Scalars['Boolean']>;
  portfolioMobileImage_exists?: InputMaybe<Scalars['Boolean']>;
  portfoliosImage_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImagesLinkingCollections = {
  __typename?: 'ImagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ImagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImagesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type Packages = Entry & _Node & {
  __typename?: 'Packages';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PackagesDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PackagesLinkingCollections>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type PackagesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type PackagesImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type PackagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type PackagesOrderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type PackagesSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/packages) */
export type PackagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PackagesCollection = {
  __typename?: 'PackagesCollection';
  items: Array<Maybe<Packages>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PackagesDescription = {
  __typename?: 'PackagesDescription';
  json: Scalars['JSON'];
  links: PackagesDescriptionLinks;
};

export type PackagesDescriptionAssets = {
  __typename?: 'PackagesDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PackagesDescriptionEntries = {
  __typename?: 'PackagesDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PackagesDescriptionLinks = {
  __typename?: 'PackagesDescriptionLinks';
  assets: PackagesDescriptionAssets;
  entries: PackagesDescriptionEntries;
  resources: PackagesDescriptionResources;
};

export type PackagesDescriptionResources = {
  __typename?: 'PackagesDescriptionResources';
  block: Array<PackagesDescriptionResourcesBlock>;
  hyperlink: Array<PackagesDescriptionResourcesHyperlink>;
  inline: Array<PackagesDescriptionResourcesInline>;
};

export type PackagesDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PackagesDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PackagesDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PackagesDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PackagesDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PackagesDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PackagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<PackagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PackagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  order_exists?: InputMaybe<Scalars['Boolean']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_not?: InputMaybe<Scalars['Int']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PackagesLinkingCollections = {
  __typename?: 'PackagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PackagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PackagesOrder {
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type Portfolios = Entry & _Node & {
  __typename?: 'Portfolios';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PortfoliosDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PortfoliosLinkingCollections>;
  shortDescription?: Maybe<Scalars['String']>;
  showPortfolio?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosShowPortfolioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/portfolios) */
export type PortfoliosYoutubeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PortfoliosCollection = {
  __typename?: 'PortfoliosCollection';
  items: Array<Maybe<Portfolios>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PortfoliosDescription = {
  __typename?: 'PortfoliosDescription';
  json: Scalars['JSON'];
  links: PortfoliosDescriptionLinks;
};

export type PortfoliosDescriptionAssets = {
  __typename?: 'PortfoliosDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PortfoliosDescriptionEntries = {
  __typename?: 'PortfoliosDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PortfoliosDescriptionLinks = {
  __typename?: 'PortfoliosDescriptionLinks';
  assets: PortfoliosDescriptionAssets;
  entries: PortfoliosDescriptionEntries;
  resources: PortfoliosDescriptionResources;
};

export type PortfoliosDescriptionResources = {
  __typename?: 'PortfoliosDescriptionResources';
  block: Array<PortfoliosDescriptionResourcesBlock>;
  hyperlink: Array<PortfoliosDescriptionResourcesHyperlink>;
  inline: Array<PortfoliosDescriptionResourcesInline>;
};

export type PortfoliosDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PortfoliosDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PortfoliosDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PortfoliosDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PortfoliosDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PortfoliosDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PortfoliosFilter = {
  AND?: InputMaybe<Array<InputMaybe<PortfoliosFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PortfoliosFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showPortfolio?: InputMaybe<Scalars['Boolean']>;
  showPortfolio_exists?: InputMaybe<Scalars['Boolean']>;
  showPortfolio_not?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_contains?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_not?: InputMaybe<Scalars['String']>;
  youtube_not_contains?: InputMaybe<Scalars['String']>;
  youtube_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PortfoliosLinkingCollections = {
  __typename?: 'PortfoliosLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PortfoliosLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PortfoliosOrder {
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  ShowPortfolioAsc = 'showPortfolio_ASC',
  ShowPortfolioDesc = 'showPortfolio_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/priceList) */
export type PriceList = Entry & _Node & {
  __typename?: 'PriceList';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PriceListDescription>;
  linkedFrom?: Maybe<PriceListLinkingCollections>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/priceList) */
export type PriceListDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/priceList) */
export type PriceListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/priceList) */
export type PriceListOrderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/priceList) */
export type PriceListSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/priceList) */
export type PriceListTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PriceListCollection = {
  __typename?: 'PriceListCollection';
  items: Array<Maybe<PriceList>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PriceListDescription = {
  __typename?: 'PriceListDescription';
  json: Scalars['JSON'];
  links: PriceListDescriptionLinks;
};

export type PriceListDescriptionAssets = {
  __typename?: 'PriceListDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PriceListDescriptionEntries = {
  __typename?: 'PriceListDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PriceListDescriptionLinks = {
  __typename?: 'PriceListDescriptionLinks';
  assets: PriceListDescriptionAssets;
  entries: PriceListDescriptionEntries;
  resources: PriceListDescriptionResources;
};

export type PriceListDescriptionResources = {
  __typename?: 'PriceListDescriptionResources';
  block: Array<PriceListDescriptionResourcesBlock>;
  hyperlink: Array<PriceListDescriptionResourcesHyperlink>;
  inline: Array<PriceListDescriptionResourcesInline>;
};

export type PriceListDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PriceListDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PriceListDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PriceListDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PriceListDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PriceListDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PriceListFilter = {
  AND?: InputMaybe<Array<InputMaybe<PriceListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PriceListFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  order_exists?: InputMaybe<Scalars['Boolean']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_not?: InputMaybe<Scalars['Int']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PriceListLinkingCollections = {
  __typename?: 'PriceListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PriceListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PriceListOrder {
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  images?: Maybe<Images>;
  imagesCollection?: Maybe<ImagesCollection>;
  packages?: Maybe<Packages>;
  packagesCollection?: Maybe<PackagesCollection>;
  portfolios?: Maybe<Portfolios>;
  portfoliosCollection?: Maybe<PortfoliosCollection>;
  priceList?: Maybe<PriceList>;
  priceListCollection?: Maybe<PriceListCollection>;
  quiz?: Maybe<Quiz>;
  quizAnswer?: Maybe<QuizAnswer>;
  quizAnswerCollection?: Maybe<QuizAnswerCollection>;
  quizCollection?: Maybe<QuizCollection>;
  quizResult?: Maybe<QuizResult>;
  quizResultCollection?: Maybe<QuizResultCollection>;
  specialDeals?: Maybe<SpecialDeals>;
  specialDealsCollection?: Maybe<SpecialDealsCollection>;
  tag?: Maybe<Tag>;
  tagCollection?: Maybe<TagCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryImagesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImagesFilter>;
};


export type QueryPackagesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPackagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PackagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PackagesFilter>;
};


export type QueryPortfoliosArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPortfoliosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PortfoliosOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfoliosFilter>;
};


export type QueryPriceListArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPriceListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PriceListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PriceListFilter>;
};


export type QueryQuizArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuizAnswerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuizAnswerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizAnswerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizAnswerFilter>;
};


export type QueryQuizCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizFilter>;
};


export type QueryQuizResultArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryQuizResultCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizResultOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizResultFilter>;
};


export type QuerySpecialDealsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySpecialDealsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SpecialDealsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecialDealsFilter>;
};


export type QueryTagArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTagCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TagOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quiz) */
export type Quiz = Entry & _Node & {
  __typename?: 'Quiz';
  _id: Scalars['ID'];
  answersCollection?: Maybe<QuizAnswersCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<QuizLinkingCollections>;
  order?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quiz) */
export type QuizAnswersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizAnswersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuizAnswerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quiz) */
export type QuizLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quiz) */
export type QuizOrderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quiz) */
export type QuizQuestionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswer = Entry & _Node & {
  __typename?: 'QuizAnswer';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<QuizAnswerLinkingCollections>;
  pdfLongText?: Maybe<Scalars['String']>;
  pdfText?: Maybe<QuizAnswerPdfText>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswerPdfLongTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswerPdfTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswerTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizAnswer) */
export type QuizAnswerValueArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type QuizAnswerCollection = {
  __typename?: 'QuizAnswerCollection';
  items: Array<Maybe<QuizAnswer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuizAnswerFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuizAnswerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuizAnswerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  pdfLongText?: InputMaybe<Scalars['String']>;
  pdfLongText_contains?: InputMaybe<Scalars['String']>;
  pdfLongText_exists?: InputMaybe<Scalars['Boolean']>;
  pdfLongText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pdfLongText_not?: InputMaybe<Scalars['String']>;
  pdfLongText_not_contains?: InputMaybe<Scalars['String']>;
  pdfLongText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pdfText_contains?: InputMaybe<Scalars['String']>;
  pdfText_exists?: InputMaybe<Scalars['Boolean']>;
  pdfText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_exists?: InputMaybe<Scalars['Boolean']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuizAnswerLinkingCollections = {
  __typename?: 'QuizAnswerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  quizCollection?: Maybe<QuizCollection>;
};


export type QuizAnswerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuizAnswerLinkingCollectionsQuizCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuizAnswerLinkingCollectionsQuizCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuizAnswerLinkingCollectionsQuizCollectionOrder {
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum QuizAnswerOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type QuizAnswerPdfText = {
  __typename?: 'QuizAnswerPdfText';
  json: Scalars['JSON'];
  links: QuizAnswerPdfTextLinks;
};

export type QuizAnswerPdfTextAssets = {
  __typename?: 'QuizAnswerPdfTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type QuizAnswerPdfTextEntries = {
  __typename?: 'QuizAnswerPdfTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type QuizAnswerPdfTextLinks = {
  __typename?: 'QuizAnswerPdfTextLinks';
  assets: QuizAnswerPdfTextAssets;
  entries: QuizAnswerPdfTextEntries;
  resources: QuizAnswerPdfTextResources;
};

export type QuizAnswerPdfTextResources = {
  __typename?: 'QuizAnswerPdfTextResources';
  block: Array<QuizAnswerPdfTextResourcesBlock>;
  hyperlink: Array<QuizAnswerPdfTextResourcesHyperlink>;
  inline: Array<QuizAnswerPdfTextResourcesInline>;
};

export type QuizAnswerPdfTextResourcesBlock = ResourceLink & {
  __typename?: 'QuizAnswerPdfTextResourcesBlock';
  sys: ResourceSys;
};

export type QuizAnswerPdfTextResourcesHyperlink = ResourceLink & {
  __typename?: 'QuizAnswerPdfTextResourcesHyperlink';
  sys: ResourceSys;
};

export type QuizAnswerPdfTextResourcesInline = ResourceLink & {
  __typename?: 'QuizAnswerPdfTextResourcesInline';
  sys: ResourceSys;
};

export type QuizAnswersCollection = {
  __typename?: 'QuizAnswersCollection';
  items: Array<Maybe<QuizAnswer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum QuizAnswersCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type QuizCollection = {
  __typename?: 'QuizCollection';
  items: Array<Maybe<Quiz>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuizFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuizFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuizFilter>>>;
  answers?: InputMaybe<CfQuizAnswerNestedFilter>;
  answersCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  order?: InputMaybe<Scalars['Int']>;
  order_exists?: InputMaybe<Scalars['Boolean']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_not?: InputMaybe<Scalars['Int']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  question?: InputMaybe<Scalars['String']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type QuizLinkingCollections = {
  __typename?: 'QuizLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type QuizLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuizOrder {
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResult = Entry & _Node & {
  __typename?: 'QuizResult';
  _id: Scalars['ID'];
  answers?: Maybe<Scalars['JSON']>;
  bride?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  groom?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<QuizResultLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResultAnswersArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResultBrideArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResultGroomArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResultLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResultTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/quizResult) */
export type QuizResultWhatsappArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type QuizResultCollection = {
  __typename?: 'QuizResultCollection';
  items: Array<Maybe<QuizResult>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuizResultFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuizResultFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuizResultFilter>>>;
  answers_exists?: InputMaybe<Scalars['Boolean']>;
  bride?: InputMaybe<Scalars['String']>;
  bride_contains?: InputMaybe<Scalars['String']>;
  bride_exists?: InputMaybe<Scalars['Boolean']>;
  bride_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bride_not?: InputMaybe<Scalars['String']>;
  bride_not_contains?: InputMaybe<Scalars['String']>;
  bride_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  groom?: InputMaybe<Scalars['String']>;
  groom_contains?: InputMaybe<Scalars['String']>;
  groom_exists?: InputMaybe<Scalars['Boolean']>;
  groom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groom_not?: InputMaybe<Scalars['String']>;
  groom_not_contains?: InputMaybe<Scalars['String']>;
  groom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_contains?: InputMaybe<Scalars['String']>;
  whatsapp_exists?: InputMaybe<Scalars['Boolean']>;
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp_not?: InputMaybe<Scalars['String']>;
  whatsapp_not_contains?: InputMaybe<Scalars['String']>;
  whatsapp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuizResultLinkingCollections = {
  __typename?: 'QuizResultLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type QuizResultLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum QuizResultOrder {
  BrideAsc = 'bride_ASC',
  BrideDesc = 'bride_DESC',
  GroomAsc = 'groom_ASC',
  GroomDesc = 'groom_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WhatsappAsc = 'whatsapp_ASC',
  WhatsappDesc = 'whatsapp_DESC'
}

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/specialDeals) */
export type SpecialDeals = Entry & _Node & {
  __typename?: 'SpecialDeals';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<SpecialDealsDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SpecialDealsLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/specialDeals) */
export type SpecialDealsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/specialDeals) */
export type SpecialDealsImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/specialDeals) */
export type SpecialDealsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/specialDeals) */
export type SpecialDealsSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/specialDeals) */
export type SpecialDealsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SpecialDealsCollection = {
  __typename?: 'SpecialDealsCollection';
  items: Array<Maybe<SpecialDeals>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SpecialDealsDescription = {
  __typename?: 'SpecialDealsDescription';
  json: Scalars['JSON'];
  links: SpecialDealsDescriptionLinks;
};

export type SpecialDealsDescriptionAssets = {
  __typename?: 'SpecialDealsDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SpecialDealsDescriptionEntries = {
  __typename?: 'SpecialDealsDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SpecialDealsDescriptionLinks = {
  __typename?: 'SpecialDealsDescriptionLinks';
  assets: SpecialDealsDescriptionAssets;
  entries: SpecialDealsDescriptionEntries;
  resources: SpecialDealsDescriptionResources;
};

export type SpecialDealsDescriptionResources = {
  __typename?: 'SpecialDealsDescriptionResources';
  block: Array<SpecialDealsDescriptionResourcesBlock>;
  hyperlink: Array<SpecialDealsDescriptionResourcesHyperlink>;
  inline: Array<SpecialDealsDescriptionResourcesInline>;
};

export type SpecialDealsDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'SpecialDealsDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type SpecialDealsDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'SpecialDealsDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type SpecialDealsDescriptionResourcesInline = ResourceLink & {
  __typename?: 'SpecialDealsDescriptionResourcesInline';
  sys: ResourceSys;
};

export type SpecialDealsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpecialDealsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SpecialDealsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SpecialDealsLinkingCollections = {
  __typename?: 'SpecialDealsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SpecialDealsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SpecialDealsOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/tag) */
export type Tag = Entry & _Node & {
  __typename?: 'Tag';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TagLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/tag) */
export type TagLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0zhpahbse7h4/content_types/tag) */
export type TagNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TagCollection = {
  __typename?: 'TagCollection';
  items: Array<Maybe<Tag>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TagFilter = {
  AND?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TagLinkingCollections = {
  __typename?: 'TagLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TagLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TagOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfQuizAnswerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuizAnswerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuizAnswerNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  pdfLongText?: InputMaybe<Scalars['String']>;
  pdfLongText_contains?: InputMaybe<Scalars['String']>;
  pdfLongText_exists?: InputMaybe<Scalars['Boolean']>;
  pdfLongText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pdfLongText_not?: InputMaybe<Scalars['String']>;
  pdfLongText_not_contains?: InputMaybe<Scalars['String']>;
  pdfLongText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pdfText_contains?: InputMaybe<Scalars['String']>;
  pdfText_exists?: InputMaybe<Scalars['Boolean']>;
  pdfText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_exists?: InputMaybe<Scalars['Boolean']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DealsFieldsFragment = { __typename?: 'SpecialDeals', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, description?: { __typename?: 'SpecialDealsDescription', json: any } | null };

export type GetDealsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetDealsQuery = { __typename?: 'Query', specialDealsCollection?: { __typename?: 'SpecialDealsCollection', items: Array<(
      { __typename?: 'SpecialDeals' }
      & DealsFieldsFragment
    ) | null> } | null };

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ImagesFieldsFragment = { __typename?: 'Images', sys: { __typename?: 'Sys', id: string, spaceId: string }, homeImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, packagesImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, portfoliosImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, dealsImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, loveProfileImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, contactImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, menuImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, dealsMobileImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, packagesMobileImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, loveProfileMobileImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, portfolioMobileImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, linksImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type GetImagesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetImagesQuery = { __typename?: 'Query', imagesCollection?: { __typename?: 'ImagesCollection', items: Array<(
      { __typename?: 'Images' }
      & ImagesFieldsFragment
    ) | null> } | null };

export type PackagesFieldsFragment = { __typename?: 'Packages', title?: string | null, slug?: string | null, order?: number | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, description?: { __typename?: 'PackagesDescription', json: any } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } };

export type GetPackagesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPackagesQuery = { __typename?: 'Query', packagesCollection?: { __typename?: 'PackagesCollection', items: Array<(
      { __typename?: 'Packages' }
      & PackagesFieldsFragment
    ) | null> } | null };

export type PortfoliosFieldsFragment = { __typename?: 'Portfolios', title?: string | null, slug?: string | null, youtube?: string | null, shortDescription?: string | null, showPortfolio?: boolean | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> }, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, description?: { __typename?: 'PortfoliosDescription', json: any } | null };

export type GetPortfoliosQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPortfoliosQuery = { __typename?: 'Query', portfoliosCollection?: { __typename?: 'PortfoliosCollection', items: Array<(
      { __typename?: 'Portfolios' }
      & PortfoliosFieldsFragment
    ) | null> } | null };

export type PriceListFieldsFragment = { __typename?: 'PriceList', title?: string | null, slug?: string | null, order?: number | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, description?: { __typename?: 'PriceListDescription', json: any } | null };

export type GetPriceListQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPriceListQuery = { __typename?: 'Query', priceListCollection?: { __typename?: 'PriceListCollection', items: Array<(
      { __typename?: 'PriceList' }
      & PriceListFieldsFragment
    ) | null> } | null };

export type QuizAnswerFieldsFragment = { __typename?: 'QuizAnswer', value?: string | null, text?: string | null, pdfLongText?: string | null, sys: { __typename?: 'Sys', id: string }, pdfText?: { __typename?: 'QuizAnswerPdfText', json: any } | null, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type QuizzesFieldsFragment = { __typename?: 'Quiz', question?: string | null, order?: number | null, sys: { __typename?: 'Sys', id: string }, answersCollection?: { __typename?: 'QuizAnswersCollection', items: Array<(
      { __typename?: 'QuizAnswer' }
      & QuizAnswerFieldsFragment
    ) | null> } | null };

export type GetQuizzesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetQuizzesQuery = { __typename?: 'Query', quizCollection?: { __typename?: 'QuizCollection', items: Array<(
      { __typename?: 'Quiz' }
      & QuizzesFieldsFragment
    ) | null> } | null };

export type TagFieldsFragment = { __typename?: 'Tag', name?: string | null, sys: { __typename?: 'Sys', id: string } };

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const DealsFieldsFragmentDoc = gql`
    fragment DealsFields on SpecialDeals {
  sys {
    id
    spaceId
  }
  title
  slug
  image {
    ...ImageFields
  }
  description {
    json
  }
}
    `;
export const ImagesFieldsFragmentDoc = gql`
    fragment ImagesFields on Images {
  sys {
    id
    spaceId
  }
  homeImage {
    ...ImageFields
  }
  packagesImage {
    ...ImageFields
  }
  portfoliosImage {
    ...ImageFields
  }
  dealsImage {
    ...ImageFields
  }
  loveProfileImage {
    ...ImageFields
  }
  contactImage {
    ...ImageFields
  }
  menuImage {
    ...ImageFields
  }
  dealsMobileImage {
    ...ImageFields
  }
  packagesMobileImage {
    ...ImageFields
  }
  loveProfileMobileImage {
    ...ImageFields
  }
  portfolioMobileImage {
    ...ImageFields
  }
  linksImage {
    ...ImageFields
  }
}
    `;
export const PackagesFieldsFragmentDoc = gql`
    fragment PackagesFields on Packages {
  sys {
    id
    spaceId
  }
  title
  slug
  image {
    ...ImageFields
  }
  description {
    json
  }
  contentfulMetadata {
    tags {
      id
      name
    }
  }
  order
}
    `;
export const PortfoliosFieldsFragmentDoc = gql`
    fragment PortfoliosFields on Portfolios {
  sys {
    id
  }
  title
  slug
  contentfulMetadata {
    tags {
      id
      name
    }
  }
  image {
    ...ImageFields
  }
  description {
    json
  }
  youtube
  shortDescription
  showPortfolio
}
    `;
export const PriceListFieldsFragmentDoc = gql`
    fragment PriceListFields on PriceList {
  sys {
    id
    spaceId
  }
  title
  slug
  description {
    json
  }
  order
}
    `;
export const QuizAnswerFieldsFragmentDoc = gql`
    fragment QuizAnswerFields on QuizAnswer {
  sys {
    id
  }
  value
  text
  pdfText {
    json
  }
  pdfLongText
  image {
    ...ImageFields
  }
}
    `;
export const QuizzesFieldsFragmentDoc = gql`
    fragment QuizzesFields on Quiz {
  sys {
    id
  }
  question
  order
  answersCollection(limit: 5) {
    items {
      ...QuizAnswerFields
    }
  }
}
    `;
export const TagFieldsFragmentDoc = gql`
    fragment TagFields on Tag {
  sys {
    id
  }
  name
}
    `;
export const GetDealsDocument = gql`
    query GetDeals($locale: String, $preview: Boolean) {
  specialDealsCollection(locale: $locale, preview: $preview) {
    items {
      ...DealsFields
    }
  }
}
    ${DealsFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const GetImagesDocument = gql`
    query GetImages($locale: String, $preview: Boolean) {
  imagesCollection(locale: $locale, preview: $preview) {
    items {
      ...ImagesFields
    }
  }
}
    ${ImagesFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const GetPackagesDocument = gql`
    query GetPackages($locale: String, $preview: Boolean) {
  packagesCollection(locale: $locale, preview: $preview, order: order_ASC) {
    items {
      ...PackagesFields
    }
  }
}
    ${PackagesFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const GetPortfoliosDocument = gql`
    query GetPortfolios($locale: String, $preview: Boolean) {
  portfoliosCollection(locale: $locale, preview: $preview) {
    items {
      ...PortfoliosFields
    }
  }
}
    ${PortfoliosFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const GetPriceListDocument = gql`
    query GetPriceList($locale: String, $preview: Boolean) {
  priceListCollection(locale: $locale, preview: $preview, order: order_ASC) {
    items {
      ...PriceListFields
    }
  }
}
    ${PriceListFieldsFragmentDoc}`;
export const GetQuizzesDocument = gql`
    query GetQuizzes($locale: String, $preview: Boolean) {
  quizCollection(locale: $locale, preview: $preview, limit: 5, order: order_ASC) {
    items {
      ...QuizzesFields
    }
  }
}
    ${QuizzesFieldsFragmentDoc}
${QuizAnswerFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetDeals(variables?: GetDealsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetDealsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDealsQuery>(GetDealsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDeals', 'query', variables);
    },
    GetImages(variables?: GetImagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetImagesQuery>(GetImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetImages', 'query', variables);
    },
    GetPackages(variables?: GetPackagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPackagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPackagesQuery>(GetPackagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPackages', 'query', variables);
    },
    GetPortfolios(variables?: GetPortfoliosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPortfoliosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPortfoliosQuery>(GetPortfoliosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPortfolios', 'query', variables);
    },
    GetPriceList(variables?: GetPriceListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPriceListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPriceListQuery>(GetPriceListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPriceList', 'query', variables);
    },
    GetQuizzes(variables?: GetQuizzesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetQuizzesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuizzesQuery>(GetQuizzesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuizzes', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;