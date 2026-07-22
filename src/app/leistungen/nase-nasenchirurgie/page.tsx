import type { Metadata } from 'next';
import { notFound } from 'next/navigation';import { DetailPage } from '@/components/sections/detail-page';import { detailPages, seoPages } from '@/content/site-pages';import { createPageMetadata } from '@/lib/metadata';
export const metadata: Metadata = createPageMetadata(seoPages.nose);
const page = detailPages.find((item) => item.slug === 'nase-nasenchirurgie');
export default function ServiceDetailPage(){if(!page){notFound()}return <DetailPage page={page}/>}
