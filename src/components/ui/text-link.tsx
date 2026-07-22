import Link from 'next/link';
import type { ReactNode } from 'react';

type TextLinkProps = { href: string; children: ReactNode };
export function TextLink({ href, children }: TextLinkProps) {
  const className = "text-link";
  return href.startsWith('http') ? <a className={className} href={href} rel="noreferrer" target="_blank">{children}</a> : <Link className={className} href={href}>{children}</Link>;
}
