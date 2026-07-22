import Link from 'next/link';
import { navigationItems } from '@/content/navigation';
export function DesktopNavigation(){return <nav className="desktop-nav" aria-label="Hauptnavigation">{navigationItems.map((item)=><div className="nav-item" key={item.href}><Link href={item.href}>{item.label}</Link>{'children' in item ? <div className="nav-submenu">{item.children.map((child)=><Link key={child.href} href={child.href}>{child.label}</Link>)}</div> : null}</div>)}</nav>}
