'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { ButtonLink } from '@/components/ui/button-link';
import { getAppointmentHref, siteConfig } from '@/config/site';
import { navigationItems } from '@/content/navigation';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    if (isOpen) {
      window.setTimeout(() => panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus(), 0);
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('nav-open');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="mobile-nav">
      <button ref={buttonRef} className="menu-button" type="button" aria-expanded={isOpen} aria-controls={menuId} onClick={() => setIsOpen((value) => !value)}>
        Menü
      </button>
      {isOpen ? (
        <div className="mobile-panel" id={menuId} ref={panelRef} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-panel__inner">
            <p>{siteConfig.privatePatientsNote}</p>
            {navigationItems.map((item) => (
              <div key={item.href} className="mobile-panel__group">
                <Link href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
                {'children' in item ? item.children.map((child) => <Link className="mobile-panel__sub" key={child.href} href={child.href} onClick={() => setIsOpen(false)}>{child.label}</Link>) : null}
              </div>
            ))}
            <ButtonLink href={getAppointmentHref()}>Privattermin vereinbaren</ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
