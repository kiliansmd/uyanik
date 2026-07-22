import { siteConfig } from '@/config/site';
export function AnnouncementBar(){return <div className="announcement"><div className="container">Für Privatversicherte und Selbstzahlende · Frechen-Königsdorf · <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></div></div>}
