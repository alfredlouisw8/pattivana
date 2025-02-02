import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
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

export function extractWhatsAppText(richText) {
  if (!richText || !richText.content) return '';

  return richText.content
    .map(node => processNode(node))
    .join(' ')
    .trim();
}

function processNode(node) {
  if (node.nodeType === BLOCKS.PARAGRAPH || node.nodeType.includes('heading')) {
    return node.content.map(processNode).join(' ') + '\n';
  }

  if (node.nodeType === 'text') {
    let text = node.value;

    // Apply bold formatting
    if (node.marks?.some(mark => mark.type === MARKS.BOLD)) {
      text = `*${text}*`;
    }

    // Apply italic formatting
    if (node.marks?.some(mark => mark.type === MARKS.ITALIC)) {
      text = `_${text}_`;
    }

    return text;
  }

  if (node.nodeType === INLINES.HYPERLINK) {
    return node.content.map(processNode).join(' ') + ` (${node.data.uri})`;
  }

  return '';
}

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export function getPlaceholderImage(): `data:image/${string}` {
  return ('data:image/svg+xml;base64,' + toBase64(shimmer(1000, 1000))) as `data:image/${string}`;
}

export const getMenus = (images, isMobile = false) => {
  return [
    {
      link: '/',
      image: images?.menuImage,
      show: false,
      title: 'Home',
      description: 'Home',
    },
    {
      link: '/packages',
      image: isMobile ? images?.packagesMobileImage : images?.packagesImage,
      show: true,
      title: 'The\nPackages',
      description:
        'Engagement - Prewedding - Wedding - Behind The Wedding - Couple Documentary - Proposal - Wedding Anniversary',
    },
    {
      link: '/portfolios',
      image: isMobile ? images?.portfolioMobileImage : images?.portfoliosImage,
      show: true,
      title: 'Our\nPortfolios',
      description: 'Find out videos that makes you laugh and cry at the same time',
    },
    {
      link: '/special-deals',
      image: isMobile ? images?.dealsMobileImage : images?.dealsImage,
      show: true,
      title: 'Special\nDeals',
      description: "Don't miss our special offer, from bundling package, wedding fair, etc.",
    },
    {
      link: '/love-profile-check',
      image: isMobile ? images?.loveProfileMobileImage : images?.loveProfileImage,
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

export const getWhatsappMessage = (formData, answers, recommendations) => {
  const answerArray = Object.values(answers);

  return encodeURIComponent(
    `Dear *${formData.groom}* & *${
      formData.bride
    },*\n\n*Here's what we think about you as a couple:*\n${answerArray
      .map((answer: any) => {
        return `${extractWhatsAppText(answer.pdfText.json)}\n${answer.pdfLongText}\n`;
      })
      .join('\n')}\n*Here are some videos we think you might like*\n- ${recommendations
      .map((recommendation: any) => recommendation.youtube)
      .join(
        '\n- ',
      )}\n\n_This test is not a scientific procedure_\n_100% curated by PATTIVANA Team - 2023_\n_Get to know us by visiting pattivana.com_\n_Instagram @pattivana.film_`,
  );
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
