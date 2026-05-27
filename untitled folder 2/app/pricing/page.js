import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Clear pricing before your appointment. | AMNS TX',
  description: 'AMNS TX keeps pricing simple. Traditional notary fees follow Texas notary fee rules, with mobile travel or online platform/session fees added when applicable.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Clear pricing before your appointment."
          text="AMNS TX keeps pricing simple. Traditional notary fees follow Texas notary fee rules, with mobile travel or online platform/session fees added when applicable."
        />
        <section className="section">
  <div className="priceGrid">
    <div className="priceCard"><h3>Traditional Texas Notary</h3><p>Texas state-regulated notary fees apply for notarial acts.</p></div>
    <div className="priceCard featured"><h3>Online Notary</h3><p>$25 online session fee + $10 first notarized signature.</p></div>
    <div className="priceCard"><h3>Mobile Notary</h3><p>Travel and convenience fee applies based on distance, urgency, parking, wait time, and appointment location.</p></div>
  </div>
  <div className="notice topSpace">Final pricing may vary based on signer count, document count, location, witnesses, after-hours needs, and wait time.</div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
