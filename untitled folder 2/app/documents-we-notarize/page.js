import SiteChrome, { PageHero, CTA, InfoCard } from '../components/SiteChrome';

export const metadata = {
  title: 'Documents we commonly notarize. | AMNS TX',
  description: 'AMNS TX can notarize many common documents when the signer has proper ID and the document is complete.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Documents"
          title="Documents we commonly notarize."
          text="AMNS TX can notarize many common documents when the signer has proper ID and the document is complete."
        />
        <section className="section">
  <div className="grid">
    <InfoCard title="Affidavits & Oaths" text="Affidavits, sworn statements, jurats, and oath-based documents." />
    <InfoCard title="Authorizations" text="Permission forms, travel authorizations, and general authorization documents." />
    <InfoCard title="Power of Attorney" text="Power of attorney forms when the signer understands and willingly signs." />
    <InfoCard title="Business Forms" text="Vendor forms, company documents, and business paperwork needing notarization." />
    <InfoCard title="Real Estate Related" text="Real estate-related documents when notary service is needed." />
    <InfoCard title="General Forms" text="General documents that require acknowledgment, jurat, or oath notarial wording." />
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
