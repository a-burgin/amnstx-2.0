import SiteChrome, { PageHero, CTA, InfoCard } from '../components/SiteChrome';

export const metadata = {
  title: 'Mobile notary services across Dallas-Fort Worth. | AMNS TX',
  description: 'We come to your preferred location for eligible notarizations, including homes, offices, hospitals, care facilities, and public meeting places.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Mobile Notary"
          title="Mobile notary services across Dallas-Fort Worth."
          text="We come to your preferred location for eligible notarizations, including homes, offices, hospitals, care facilities, and public meeting places."
        />
        <section className="section">
  <div className="grid">
    <InfoCard title="Where we meet" text="Homes, offices, hospitals, care facilities, coffee shops, libraries, and other safe public locations." />
    <InfoCard title="Travel fees" text="Mobile appointments include a travel/convenience fee based on distance, timing, and appointment needs." />
    <InfoCard title="Before arrival" text="All signers must have valid ID, be present, and understand what they are signing." />
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
