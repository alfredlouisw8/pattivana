import { createClient } from 'contentful-management';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export function getPlaceholderImage(): `data:image/${string}` {
  return ('data:image/svg+xml;base64,' + toBase64(shimmer(1000, 1000))) as `data:image/${string}`;
}

export const getMenus = images => {
  return [
    {
      link: '/',
      image: images?.homeImage,
      show: false,
      title: 'Home',
      description: 'Home',
    },
    {
      link: '/packages',
      image: images?.packagesImage,
      show: true,
      title: 'The\nPackages',
      description:
        'Engagement - Prewedding - Wedding - Behind The Wedding - Couple Documentary - Proposal - Wedding Anniversary',
    },
    {
      link: '/portfolios',
      image: images?.portfoliosImage,
      show: true,
      title: 'Our\nPortfolios',
      description: 'Find out videos that makes you laugh and cry at the same time',
    },
    {
      link: '/special-deals',
      image: images?.dealsImage,
      show: true,
      title: 'Special\nDeals',
      description: "Don't miss our special offer, from bundling package, wedding fair, etc.",
    },
    {
      link: '/love-profile-check',
      image: images?.loveProfileImage,
      title: 'Love Profile\nCheck',
      description: 'Still confused where to begin? Start here and take the test!',
      show: true,
    },
  ];
};

export const pushDataToContentful = async (formData, answers) => {
  try {
    await fetch('/api/quiz-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        // @ts-ignore
        answers: Object.values(answers).map(answer => answer.value),
        title: `${formData.groom} and ${formData.bride}'s Quiz Result`,
      }),
    });
  } catch (error: any) {
    console.error('Error creating entry:', error.message);
  }
};

export const getRecommendations = (answers, portfolios) => {
  // Step 1: Flatten answers into an array
  // @ts-ignore
  const answerTags = Object.values(answers).map(answer => answer.value);

  const publicPortfolios = portfolios.filter(portfolio => portfolio.showPortfolio === true);

  // Step 2: Count tag matches for each portfolio
  const scoredPortfolios = publicPortfolios.map(portfolio => {
    const matchCount = portfolio.contentfulMetadata.tags.filter(tag =>
      answerTags.includes(tag.name),
    ).length;
    return {
      ...portfolio,
      matchCount,
    };
  });

  // Step 3: Sort portfolios by match count (desc) and title (asc) as tiebreaker
  const sortedPortfolios = scoredPortfolios.sort((a, b) => {
    if (b.matchCount === a.matchCount) {
      return a.title.localeCompare(b.title);
    }
    return b.matchCount - a.matchCount;
  });

  // Step 4: Filter by type and limit to top recommendations
  const preweddingPortfolios = sortedPortfolios
    .filter(portfolio =>
      portfolio.contentfulMetadata.tags.map(tag => tag.name).includes('prewedding'),
    )
    .slice(0, 3); // Top 3 prewedding portfolios

  const weddingPortfolios = sortedPortfolios
    .filter(portfolio => portfolio.contentfulMetadata.tags.map(tag => tag.name).includes('wedding'))
    .slice(0, 2); // Top 2 wedding portfolios

  // Combine recommendations
  const recommendations = [...preweddingPortfolios, ...weddingPortfolios];

  return recommendations;
};
