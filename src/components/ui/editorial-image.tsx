import Image from 'next/image';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

type EditorialImageProps = { src: string; alt: string; aspect?: 'portrait' | 'landscape' | 'wide'; priority?: boolean; caption?: string };
export function EditorialImage({ src, alt, aspect = 'landscape', priority = false, caption }: EditorialImageProps) {
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  const exists = existsSync(join(process.cwd(), 'public', cleanSrc));
  return <figure className={`editorial-image editorial-image--${aspect}`}>{exists ? <Image src={cleanSrc} alt={alt} fill sizes="(min-width: 1024px) 44vw, 100vw" priority={priority} /> : <div className="image-placeholder" role="img" aria-label={alt}><span />{process.env.NODE_ENV === 'development' ? <small>{cleanSrc}</small> : null}</div>}{caption ? <figcaption>{caption}</figcaption> : null}</figure>;
}
