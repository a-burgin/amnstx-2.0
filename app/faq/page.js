import SiteChrome, { PageHero, CTA } from '../components/SiteChrome';

export const metadata = {
  title: 'Frequently asked notary questions. | AMNS TX',
  description: 'Quick answers to help you prepare for your notary appointment.'
};

export default function Page() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Frequently asked notary questions."
          text="Quick answers to help you prepare for your notary appointment."
        />
        <section className="section faqList">
  <details open><summary>Can you give legal advice?</summary><p>No. AMNS TX is not a law firm and does not provide legal advice or prepare legal documents.</p></details>
  <details><summary>Do I need an ID?</summary><p>Yes. A valid, unexpired government-issued photo ID is typically required.</p></details>
  <details><summary>Can I sign before the appointment?</summary><p>Usually no. Do not sign before the notary appointment unless specifically instructed.</p></details>
  <details><summary>Do witnesses need ID?</summary><p>Witness requirements depend on the document. If witnesses are required, they may need to be present with acceptable ID.</p></details>
  <details><summary>Do you offer online notary?</summary><p>Yes, for eligible documents through a secure online notary platform.</p></details>
</section>
        <CTA />
      </main>
    </SiteChrome>
  );
}
