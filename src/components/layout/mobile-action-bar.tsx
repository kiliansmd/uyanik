import { ButtonLink } from '@/components/ui/button-link';
import { getAppointmentHref, siteConfig } from '@/config/site';
export function MobileActionBar(){return <div className="mobile-action-bar" aria-label="Schnelle Aktionen"><ButtonLink href={getAppointmentHref()}>Termin buchen</ButtonLink><ButtonLink href={siteConfig.phoneHref} variant="secondary">Anrufen</ButtonLink></div>}
