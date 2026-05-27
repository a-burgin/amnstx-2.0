import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Identification requirements for notarization. | AMNS TX',
  description: 'Bring valid identification so your appointment does not get delayed.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Accepted IDs"
          title="Identification requirements for notarization."
          text="Bring valid identification so your appointment does not get delayed."
        />
        <section className="section">
  <div className="twoColumn">
    <div className="panel">
      <h2>Commonly accepted IDs</h2>
      <ul className="cleanList">
        <li>State driver license</li>
        <li>State identification card</li>
        <li>U.S. passport</li>
        <li>Military ID</li>
        <li>Other government-issued photo ID when acceptable</li>
      </ul>
    </div>
    <div className="panel">
      <h2>ID reminders</h2>
      <ul className="cleanList">
        <li>ID should be valid and unexpired</li>
        <li>Name should reasonably match the document</li>
        <li>Signer must be physically or remotely present as required</li>
        <li>Signer must be alert and willing to sign</li>
      </ul>
    </div>
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
