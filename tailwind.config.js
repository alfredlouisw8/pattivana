const tokens = require('@contentful/f36-tokens');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        snug: '-0.011em',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      lineHeight: {
        tighter: 1.1,
      },
      fontFamily: {
        sans: ['Gotham', ...fontFamily.sans],
      },
      colors: {
        cream: {
          light: '#e9e8e1',
          DEFAULT: '#c6c3af',
          dark: '#211f19',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
