import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Book your AMNS TX notary appointment. | AMNS TX',
  description: 'Request mobile, online, traditional, or business notary services. The fastest way to confirm availability is to call or book online.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Book Appointment"
          title="Book your AMNS TX notary appointment."
          text="Request mobile, online, traditional, or business notary services. The fastest way to confirm availability is to call or book online."
        />
        <section className="section">
  <div className="twoColumn">
    <div className="panel">
      <h2>Choose your booking option.</h2>
      <div className="stack">
        <a className="wideButton" href="tel:2144715358">Call 214-471-5358</a>
        <a className="wideButton outline" href="sms:2144715358">Text 214-471-5358</a>
        <a className="wideButton" href="https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s">Book Online</a>
      </div>
    </div>
    <div className="panel">
      <h2>Send these details.</h2>
      <ul className="cleanList">
        <li>Document type</li>
        <li>Mobile, online, or traditional appointment</li>
        <li>Number of signers and notarized signatures</li>
        <li>Preferred date and time</li>
        <li>Appointment address or online preference</li>
        <li>Whether witnesses are needed</li>
      </ul>
    </div>
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
