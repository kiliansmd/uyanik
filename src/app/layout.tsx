import type { Metadata } from 'next';
import '@/styles/globals.css';
import { MobileActionBar } from '@/components/layout/mobile-action-bar';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@/components/layout/skip-link';
import { StructuredData } from '@/components/seo/structured-data';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.practiceName} | HNO in Frechen-Königsdorf`, template: `%s | ${siteConfig.practiceName}` }, description: 'Präzise HNO-Medizin. Persönlich und mit Zeit.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="de"><body><StructuredData/><SkipLink/><SiteHeader/><main id="main">{children}</main><SiteFooter/><MobileActionBar/></body></html>; }
