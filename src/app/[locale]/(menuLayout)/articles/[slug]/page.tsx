import { draftMode } from 'next/headers';
import { client, previewClient } from '@src/lib/client';
import { notFound } from 'next/navigation';
import ArticleDetail from '@src/components/features/articles/ArticleDetail';

interface Props {
  params: {
    slug: string;
    locale: string;
  };
}

export default async function ArticleDetailPage({ params: { slug, locale } }: Props) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const articleData = await gqlClient.GetArticleBySlug({ slug, locale, preview });

  const article = articleData?.articlesCollection?.items?.[0];

  if (!article) return notFound();

  return <ArticleDetail article={article} />;
}
