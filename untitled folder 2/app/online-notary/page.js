import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Online notarization for eligible Texas documents. | AMNS TX',
  description: 'Remote online notarization can help you complete eligible documents from your device through a secure online notary platform.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Online Notary"
          title="Online notarization for eligible Texas documents."
          text="Remote online notarization can help you complete eligible documents from your device through a secure online notary platform."
        />
        <section className="section">
  <div className="twoColumn">
    <div>
      <h2>Best for convenience.</h2>
      <p className="bigText">Online notary is helpful when you cannot meet in person, need a faster option, or prefer a remote session.</p>
    </div>
    <div className="panel">
      <h3>Online appointment checklist</h3>
      <ul className="cleanList">
        <li>Valid ID</li>
        <li>Strong internet connection</li>
        <li>Camera and microphone access</li>
        <li>Completed document</li>
        <li>Signer must appear on video</li>
      </ul>
    </div>
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
