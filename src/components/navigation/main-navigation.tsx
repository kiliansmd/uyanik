import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/content/navigation';

export function MainNavigation() {
  return <header className="border-b border-[var(--color-line)] bg-[rgba(251,248,242,.92)]"><nav className="container flex flex-wrap items-center justify-between gap-4 py-5" aria-label="Hauptnavigation"><Link href="/" className="font-serif text-xl font-semibold">{siteConfig.practiceName}</Link><div className="flex flex-wrap gap-4 text-sm">{navigationItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-[var(--color-accent-dark)]">{item.label}</Link>)}</div></nav></header>;
}
