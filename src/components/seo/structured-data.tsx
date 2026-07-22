import { siteConfig } from '@/config/site';

export function StructuredData() {
  const data = { '@context': 'https://schema.org', '@type': 'MedicalClinic', name: siteConfig.practiceName, url: siteConfig.siteUrl, telephone: siteConfig.phone, medicalSpecialty: 'Otolaryngologic', address: { '@type': 'PostalAddress', streetAddress: siteConfig.street, postalCode: siteConfig.postalCode, addressLocality: siteConfig.city, addressCountry: 'DE' } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
