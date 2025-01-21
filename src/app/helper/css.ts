export const iframeCSS = `
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

#pdf-content {
  display: flex;
  flex-direction: column;
  gap: 3rem; /* Matches Tailwind's gap-12 */
  padding: 2.5rem 5rem; /* Matches Tailwind's py-10 px-20 */
  width: 100%;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.w-full {
  width: 100%;
}

.justify-end {
  justify-content: flex-end;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.relative {
  position: relative;
}

.h-[100px] {
  height: 100px;
}

.w-[200px] {
  width: 200px;
}

.border-b-4 {
  border-bottom: 4px solid black;
}

.border-b-2 {
  border-bottom: 2px solid black;
}

/* Font Sizes */
.text-xs {
  font-size: 0.75rem; /* 12px */
}

.text-sm {
  font-size: 0.875rem; /* 14px */
}

.text-base {
  font-size: 1rem; /* 16px */
}

.text-lg {
  font-size: 1.125rem; /* 18px */
}

.text-xl {
  font-size: 1.25rem; /* 20px */
}

.text-2xl {
  font-size: 1.5rem; /* 24px */
  font-weight: 600; /* Semi-bold */
}

.text-3xl {
  font-size: 1.875rem; /* 30px */
}

.text-4xl {
  font-size: 2.25rem; /* 36px */
  font-weight: 700; /* Bold */
}

.text-5xl {
  font-size: 3rem; /* 48px */
}

.text-6xl {
  font-size: 3.75rem; /* 60px */
}

.text-7xl {
  font-size: 4.5rem; /* 72px */
}

.text-8xl {
  font-size: 6rem; /* 96px */
}

.text-9xl {
  font-size: 8rem; /* 128px */
}

/* Font Weights */
.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

.font-light {
  font-weight: 300;
}

/* Margins and Padding */
.mb-4 {
  margin-bottom: 1rem;
}

.mt-14 {
  margin-top: 3.5rem;
}

.gap-20 {
  gap: 5rem;
}

.gap-5 {
  gap: 1.25rem;
}

/* Text Alignments */
.text-right {
  text-align: right;
}

.flex-1 {
  flex: 1;
}

/* Additional Typography */
p {
  line-height: 1.5;
}

/* QR Code Container */
.qr-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem; /* Matches Tailwind's gap-5 */
}

.qr-item {
  flex: 1;
  text-align: center;
}
`;
