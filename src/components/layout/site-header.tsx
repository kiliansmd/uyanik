import Link from 'next/link';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { DesktopNavigation } from '@/components/navigation/desktop-navigation';
import { MobileNavigation } from '@/components/navigation/mobile-navigation';
import { ButtonLink } from '@/components/ui/button-link';
import { getAppointmentHref, siteConfig } from '@/config/site';
export function SiteHeader(){return <header className="site-header"><AnnouncementBar/><div className="header-main"><div className="container header-grid"><Link className="brand" href="/" aria-label={`${siteConfig.practiceName} Startseite`}><span>{siteConfig.practiceName}</span><small>HNO Privatpraxis</small></Link><DesktopNavigation/><div className="header-cta"><ButtonLink href={getAppointmentHref()}>Privattermin vereinbaren</ButtonLink></div><MobileNavigation/></div></div></header>}
