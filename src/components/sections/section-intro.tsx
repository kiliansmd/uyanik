import type { ReactNode } from 'react';

type SectionIntroProps = { eyebrow?: string; title: string; children?: ReactNode; align?: 'left' | 'center' };
export function SectionIntro({ eyebrow, title, children, align = 'left' }: SectionIntroProps) {
  return <div className={`section-intro section-intro--${align}`}>{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2>{title}</h2>{children ? <div className="lede">{children}</div> : null}</div>;
}
