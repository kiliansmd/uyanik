import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/navigation/breadcrumbs';
import { Container } from '@/components/layout/container';

type PageHeroProps = { eyebrow?: string; title: string; children: ReactNode; breadcrumbs?: Array<{ label: string; href?: string }> };
export function PageHero({ eyebrow, title, children, breadcrumbs }: PageHeroProps){return <section className="page-hero"><Container>{breadcrumbs ? <Breadcrumbs items={breadcrumbs}/> : null}<div className="page-hero__content">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h1>{title}</h1><div className="lede">{children}</div></div></Container></section>}
