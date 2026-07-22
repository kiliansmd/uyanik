import type { Metadata } from 'next';
import { Newsreader, Source_Sans_3 } from 'next/font/google';
import '@/styles/globals.css';
import { MobileActionBar } from '@/components/layout/mobile-action-bar';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@/components/layout/skip-link';
import { siteConfig } from '@/config/site';
import { StructuredData } from '@/components/seo/structured-data';

const serif = Newsreader({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const sans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.practiceName} | HNO in Frechen-Königsdorf`, template: `%s | ${siteConfig.practiceName}` }, description: 'Präzise HNO-Medizin. Persönlich und mit Zeit.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="de" className={`${serif.variable} ${sans.variable}`}><body><StructuredData/><SkipLink/><SiteHeader/><main id="main">{children}</main><SiteFooter/><MobileActionBar/></body></html>; }
