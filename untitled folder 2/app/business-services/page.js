import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Notary support for businesses and professionals. | AMNS TX',
  description: 'AMNS TX helps businesses coordinate notarizations for documents, staff, vendors, and clients.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Business Services"
          title="Notary support for businesses and professionals."
          text="AMNS TX helps businesses coordinate notarizations for documents, staff, vendors, and clients."
        />
        <section className="section">
  <div className="twoColumn">
    <div>
      <h2>Built for business needs.</h2>
      <p className="bigText">Businesses can request mobile appointments, online options, repeat scheduling, and clear pricing before confirmation.</p>
    </div>
    <div className="panel">
      <h3>Helpful details to send</h3>
      <ul className="cleanList">
        <li>Business name</li>
        <li>Document type</li>
        <li>Number of signers</li>
        <li>Preferred appointment window</li>
        <li>Location or online request</li>
        <li>Billing or receipt needs</li>
      </ul>
    </div>
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
