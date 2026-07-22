import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaLinkProps = { href: string; children: ReactNode; variant?: 'primary' | 'secondary' };
export function CtaLink({ href, children, variant = 'primary' }: CtaLinkProps) {
  const isExternal = href.startsWith('http');
  const className = `inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${variant === 'primary' ? 'bg-[var(--color-accent-dark)] text-white hover:bg-[var(--color-accent)]' : 'border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-accent)]'}`;
  return isExternal ? <a className={className} href={href} rel="noreferrer" target="_blank">{children}</a> : <Link className={className} href={href}>{children}</Link>;
}
