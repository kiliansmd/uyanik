import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { TextLink } from '@/components/ui/text-link';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/content/navigation';
export function SiteFooter(){return <footer className="site-footer"><Container className="footer-grid"><div><p className="footer-brand">{siteConfig.practiceName}</p><p>{siteConfig.specialty}</p><p>{siteConfig.physicianName}</p><p className="footer-note">{siteConfig.privatePatientsNote}</p></div><address>{siteConfig.street}<br />{siteConfig.postalCode} {siteConfig.city}<br /><a href={siteConfig.phoneHref}>{siteConfig.phone}</a><br /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></address><nav aria-label="Footer Navigation">{navigationItems.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/kassenpraxis-karriere">Kassenpraxis & Karriere</Link></nav><div className="legal-links"><TextLink href="/impressum">Impressum</TextLink><TextLink href="/datenschutz">Datenschutz</TextLink></div></Container></footer>}
