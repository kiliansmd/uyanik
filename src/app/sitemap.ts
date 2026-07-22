import type { MetadataRoute } from 'next';import { siteConfig } from '@/config/site';
const routes = ['/', '/leistungen', '/leistungen/schwindel-tinnitus', '/leistungen/schnarchen-schlafdiagnostik', '/leistungen/nase-nasenchirurgie', '/leistungen/kinder-hno', '/aesthetik/faltenbehandlung', '/arzt-team', '/privatpraxis', '/kosten-faq', '/kontakt', '/kassenpraxis-karriere', '/impressum', '/datenschutz'];
export default function sitemap(): MetadataRoute.Sitemap {return routes.map((route) => ({ url: `${siteConfig.siteUrl}${route}`, lastModified: new Date() }))}
