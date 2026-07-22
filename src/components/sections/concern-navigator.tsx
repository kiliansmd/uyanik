import Link from 'next/link';
import type { LinkItem } from '@/content/site-pages';
export function ConcernNavigator({ items }: { items: LinkItem[] }){return <div className="service-index">{items.map((item,index)=><Link className="service-row" href={item.href} key={item.label}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{item.label}</h3>{item.description ? <small>{item.description}</small> : null}</div></Link>)}</div>}
