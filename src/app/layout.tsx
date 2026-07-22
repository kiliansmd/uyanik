import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { MainNavigation } from '@/components/navigation/main-navigation';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.practiceName} | HNO in Frechen-Königsdorf`, template: `%s | ${siteConfig.practiceName}` }, description: 'Präzise HNO-Medizin. Persönlich und mit Zeit.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="de"><body><a className="skip-link" href="#main">Zum Inhalt springen</a><MainNavigation/><main id="main">{children}</main><SiteFooter/></body></html>; }
