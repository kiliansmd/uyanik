import { PageHero } from '@/components/sections/page-hero';
const LEGAL_PLACEHOLDER = true;
export default function ImprintPage(){return <PageHero title="Impressum" eyebrow="Rechtliche Angaben"><p>{LEGAL_PLACEHOLDER ? 'Rechtliche Pflichtangaben werden vor Produktionsfreigabe durch die Praxis oder Rechtsberatung ergänzt und geprüft.' : null}</p></PageHero>}
