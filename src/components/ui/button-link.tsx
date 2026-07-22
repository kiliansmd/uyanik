import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = { href: string; children: ReactNode; variant?: 'primary' | 'secondary'; className?: string };
export function ButtonLink({ href, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const isExternal = href.startsWith('http');
  const classes = `button-link button-link--${variant} ${className}`;
  return isExternal ? <a className={classes} href={href} rel="noreferrer" target="_blank">{children}</a> : <Link className={classes} href={href}>{children}</Link>;
}
