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
