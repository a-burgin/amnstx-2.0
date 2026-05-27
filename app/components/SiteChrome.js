import Link from 'next/link';

const navItems = [
  { href: '/mobile-notary', label: 'Mobile' },
  { href: '/online-notary', label: 'Online' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/identification-requirements', label: 'IDs' },
  { href: '/book', label: 'Book' }
];

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brandBlock" href="/">
        <span className="brand">AMNS TX</span>
        <span className="brandSub">A Mobile Notary Service</span>
      </Link>
      <nav className="topNav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>
      <a className="headerCall" href="tel:2144715358">214-471-5358</a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>AMNS TX</strong>
        <p>A Mobile Notary Service serving Dallas-Fort Worth and Texas statewide online.</p>
      </div>
      <div className="footerLinks">
        <Link href="/book">Book Appointment</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="legal">AMNS TX is not a law firm and does not provide legal advice or prepare legal documents.</p>
    </footer>
  );
}

export default function SiteChrome({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function PageHero({ eyebrow, title, text, primaryLabel = 'Book Appointment', primaryHref = '/book', secondaryLabel = 'Call Now', secondaryHref = 'tel:2144715358' }) {
  return (
    <section className="pageHero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
      <div className="buttonRow">
        <Link className="button primary" href={primaryHref}>{primaryLabel}</Link>
        <a className="button secondary" href={secondaryHref}>{secondaryLabel}</a>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="ctaBand">
      <p className="eyebrow">Ready When You Are</p>
      <h2>Need a notary appointment?</h2>
      <p>Call, text, or book online for mobile, online, and traditional notary services.</p>
      <div className="buttonRow center">
        <Link className="button primary" href="/book">Book Now</Link>
        <a className="button secondary darkText" href="tel:2144715358">Call 214-471-5358</a>
      </div>
    </section>
  );
}

export function InfoCard({ title, text }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
