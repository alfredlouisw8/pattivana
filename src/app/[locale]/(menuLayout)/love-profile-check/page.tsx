import LoveProfileSection from '@src/components/section/LoveProfileSection';
import { client, previewClient } from '@src/lib/client';
import { draftMode } from 'next/headers';
import { LandingPageProps } from 'types';

export default async function LoveProfilePage({ params: { locale } }: LandingPageProps) {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const quizzesCollection = await gqlClient.GetQuizzes({
    locale,
    preview,
  });

  const quizzes = quizzesCollection?.quizCollection?.items.map(quiz => ({
    question: quiz?.question,
    answers: quiz?.answersCollection?.items,
  }));

  const portfoliosCollection = await gqlClient.GetPortfolios({ locale, preview });

  const portfolios = portfoliosCollection?.portfoliosCollection?.items;

  return <LoveProfileSection quizzes={quizzes} portfolios={portfolios} />;
}
