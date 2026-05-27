import SiteChrome, { PageHero, CTA, InfoCard } from '../components/SiteChrome';

export const metadata = {
  title: 'Serving DFW in person and Texas online. | AMNS TX',
  description: 'AMNS TX is built for Dallas-Fort Worth mobile appointments and statewide online notary services when eligible.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Service Areas"
          title="Serving DFW in person and Texas online."
          text="AMNS TX is built for Dallas-Fort Worth mobile appointments and statewide online notary services when eligible."
        />
        <section className="section">
  <div className="grid">
    <InfoCard title="Dallas" text="Mobile notary appointment options in Dallas and nearby areas." />
    <InfoCard title="Fort Worth" text="DFW mobile appointment options may be available based on distance and scheduling." />
    <InfoCard title="Statewide Online" text="Eligible Texas online notarizations can be completed remotely through an online platform." />
  </div>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
