import { dir } from 'i18next';
import type { Metadata, Viewport } from 'next';
import { draftMode } from 'next/headers';

import { ContentfulPreviewProvider } from '@src/components/features/contentful';
import initTranslations from '@src/i18n';
import { locales } from '@src/i18n/config';
import { LayoutProps } from 'types';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';

export async function generateMetadata() {
  const metatadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  } as Metadata;

  return metatadata;
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export async function generateStaticParams(): Promise<LayoutProps['params'][]> {
  return locales.map(locale => ({ locale }));
}

const allowedOriginList = ['https://app.contentful.com', 'https://app.eu.contentful.com'];

export default async function PageLayout({ children, params }: LayoutProps) {
  const { isEnabled: preview } = draftMode();
  const { locale } = params;
  const { resources } = await initTranslations({ locale });

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link rel="mask-icon" href="/favicons/logo_black.png" />
      </head>

      <body>
        <TranslationsProvider locale={locale} resources={resources}>
          <ContentfulPreviewProvider
            locale={locale}
            enableInspectorMode={preview}
            enableLiveUpdates={preview}
            targetOrigin={allowedOriginList}>
            <main className={`font-sans`}>{children}</main>
            <div id="portal" className={`font-sans`} />
          </ContentfulPreviewProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
