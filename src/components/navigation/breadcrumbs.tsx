import Link from 'next/link';

type Breadcrumb = { label: string; href?: string };
export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return <nav className="breadcrumbs" aria-label="Brotkrumen"><ol><li><Link href="/">Start</Link></li>{items.map((item) => <li key={item.label}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>;
}
