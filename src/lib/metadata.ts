import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import type { SeoPage } from '@/content/site-pages';

export function createPageMetadata(page: SeoPage): Metadata {
  const url = new URL(page.path, siteConfig.siteUrl).toString();
  return { title: page.title, description: page.description, alternates: { canonical: url }, openGraph: { title: page.title, description: page.description, url, siteName: siteConfig.practiceName, locale: 'de_DE', type: 'website' } };
}
