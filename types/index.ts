import { ImageFieldsFragment } from '@src/lib/__generated/sdk';

export interface LandingPageProps {
  params: {
    locale: string;
  };
}

export interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export interface Menu {
  link: string;
  image: ImageFieldsFragment;
  show: boolean;
  title?: string;
  description?: string;
}
