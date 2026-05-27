import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Contact AMNS TX. | AMNS TX',
  description: 'Reach out for booking, pricing, service area questions, and business notary requests.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Contact AMNS TX."
          text="Reach out for booking, pricing, service area questions, and business notary requests."
        />
        <section className="section">
  <div className="twoColumn">
    <div className="panel">
      <h2>Contact details</h2>
      <p><strong>Phone:</strong> <a href="tel:2144715358">214-471-5358</a></p>
      <p><strong>Website:</strong> amnstx.com</p>
      <p><strong>Service:</strong> Dallas-Fort Worth mobile and Texas online notary.</p>
    </div>
    <div className="panel">
      <h2>Message template</h2>
      <p className="muted">Please send your document type, appointment location, preferred time, signer count, and whether you need mobile or online service.</p>
      <a className="wideButton" href="sms:2144715358">Text AMNS TX</a>
    </div>
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
