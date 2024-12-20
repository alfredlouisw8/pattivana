import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { locales } from '@src/i18n/config';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import HomeSection from '@src/components/section/HomeSection';
import MenuSection from '@src/components/section/MenuSection';

interface LandingPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pattivana',
    description: 'Pattivana',
  };
}

export default async function Page({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const { t, resources } = await initTranslations({ locale });
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.pageLanding({ locale, preview });
  const page = landingPageData.pageLandingCollection?.items[0];

  if (!page) {
    notFound();
  }

  const blogPostsData = await gqlClient.pageBlogPostCollection({
    limit: 6,
    locale,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: {
      slug_not: page?.featuredBlogPost?.slug,
    },
    preview,
  });
  const posts = blogPostsData.pageBlogPostCollection?.items;

  if (!page?.featuredBlogPost || !posts) {
    return;
  }

  return <HomeSection />;

  //   return (
  //     <TranslationsProvider locale={locale} resources={resources}>
  //       <Container>
  //         <Link href={`/${page.featuredBlogPost.slug}`}>
  //           <ArticleHero article={page.featuredBlogPost} />
  //           asd
  //         </Link>
  //       </Container>

  //       {/* Tutorial: contentful-and-the-starter-template.md */}
  //       {/* Uncomment the line below to make the Greeting field available to render */}
  //       {/*<Container>*/}
  //       {/*  <div className="my-5 bg-colorTextLightest p-5 text-colorBlueLightest">{page.greeting}</div>*/}
  //       {/*</Container>*/}

  //       <Container className="my-8  md:mb-10 lg:mb-16">
  //         <h2 className="mb-4 md:mb-6">{t('landingPage.latestArticles')}</h2>
  //         <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
  //       </Container>
  //     </TranslationsProvider>
  //   );
}
