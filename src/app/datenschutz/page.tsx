import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';import { legalContent } from '@/content/legal';import { seoPages } from '@/content/site-pages';import { createPageMetadata } from '@/lib/metadata';
const LEGAL_PLACEHOLDER = true;
export const metadata: Metadata = createPageMetadata(seoPages.privacy);
export default function PrivacyPage(){return <PageHero title={legalContent.privacy.heading} eyebrow="Rechtliche Angaben"><p>{LEGAL_PLACEHOLDER ? legalContent.privacy.text : null}</p></PageHero>}
