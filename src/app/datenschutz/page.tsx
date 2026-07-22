import { PageHero } from '@/components/sections/page-hero';
const LEGAL_PLACEHOLDER = true;
export default function PrivacyPage(){return <PageHero title="Datenschutz" eyebrow="Rechtliche Angaben"><p>{LEGAL_PLACEHOLDER ? 'Die Datenschutzerklärung wird vor Produktionsfreigabe juristisch geprüft und final eingepflegt. Aktuell werden keine zustimmungspflichtigen Dienste eingebunden.' : null}</p></PageHero>}
