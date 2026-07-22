import type { ReactNode } from 'react';

type SectionProps = { children: ReactNode; tone?: 'canvas' | 'paper' | 'dark'; className?: string };
export function Section({ children, tone = 'canvas', className = '' }: SectionProps) {
  return <section className={`section section--${tone} ${className}`}>{children}</section>;
}
