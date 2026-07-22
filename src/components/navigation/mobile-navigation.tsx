'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { navigationItems } from '@/content/navigation';
import { ButtonLink } from '@/components/ui/button-link';
import { getAppointmentHref, siteConfig } from '@/config/site';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') { setIsOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener('keydown', onKeyDown);
    return () => { document.body.classList.remove('nav-open'); document.removeEventListener('keydown', onKeyDown); };
  }, [isOpen]);
  return <div className="mobile-nav"><button ref={buttonRef} className="menu-button" type="button" aria-expanded={isOpen} aria-controls={menuId} onClick={() => setIsOpen((value) => !value)}>Menü</button>{isOpen ? <div className="mobile-panel" id={menuId}><div className="mobile-panel__inner"><p>{siteConfig.privatePatientsNote}</p>{navigationItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}<ButtonLink href={getAppointmentHref()}>Privattermin vereinbaren</ButtonLink></div></div> : null}</div>;
}
