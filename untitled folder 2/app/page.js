import Link from 'next/link';
import SiteChrome, { CTA, InfoCard } from './components/SiteChrome';

const serviceCards = [
  { title: 'Mobile Notary', text: 'We travel to homes, offices, hospitals, care facilities, and public meeting locations across Dallas-Fort Worth.' },
  { title: 'Online Notary', text: 'Secure remote online notarization options for eligible Texas documents through an online notary platform.' },
  { title: 'Traditional Notary', text: 'In-person acknowledgments, jurats, oaths, affidavits, authorizations, and general document notarization.' },
  { title: 'Business Services', text: 'Professional notary support for businesses that need repeat appointments, vendor documents, and document coordination.' },
  { title: 'Real Estate Documents', text: 'Notary support for real estate-related paperwork when a Texas notary is needed.' },
  { title: 'Accepted IDs', text: 'Clear guidance on valid identification before your appointment so your signing is smoother.' }
];

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <section className="homeHero">
          <div className="heroCopy">
            <p className="eyebrow">State Bonded • Insured • DFW + Statewide Online</p>
            <h1>Professional notary service that comes to you.</h1>
            <p className="lead">
              AMNS TX provides mobile, online, and traditional notary services for individuals,
              businesses, and real estate-related documents across Dallas-Fort Worth.
            </p>
            <div className="buttonRow">
              <Link className="button primary" href="/book">Book Appointment</Link>
              <Link className="button secondary" href="/pricing">View Pricing</Link>
            </div>
          </div>
          <div className="heroPanel">
            <span>Fast Booking</span>
            <strong>Mobile • Online • Traditional</strong>
            <p>Valid ID required. All signers must be present, alert, and willing to sign.</p>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">Built For Convenience</p>
            <h2>A cleaner, easier way to book notary services.</h2>
          </div>
          <p className="bigText">
            Whether you need a mobile appointment, an online notary session, or help understanding
            what to bring, this site is designed to move clients from questions to booking.
          </p>
        </section>

        <section className="section" id="services">
          <p className="eyebrow">Services</p>
          <h2>Choose the service that fits your signing.</h2>
          <div className="grid">
            {serviceCards.map((card) => <InfoCard key={card.title} {...card} />)}
          </div>
        </section>

        <section className="section dark">
          <p className="eyebrow">Simple Flow</p>
          <h2>How it works.</h2>
          <div className="steps">
            <div><span>01</span><h3>Choose service</h3><p>Pick mobile, online, traditional, or business notary support.</p></div>
            <div><span>02</span><h3>Confirm details</h3><p>Send document type, location, signer count, and preferred time.</p></div>
            <div><span>03</span><h3>Complete signing</h3><p>Bring valid ID and complete the notarization professionally.</p></div>
          </div>
        </section>

        <CTA />
      </main>
    </SiteChrome>
  );
}
