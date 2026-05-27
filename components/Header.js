
import Link from "next/link";

const bookingLink = "https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s";
const phoneHref = "tel:+12144715358";

export default function Header() {
  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Pricing", "/pricing"],
    ["Online Notary", "/online-notary"],
    ["Mobile Notary", "/mobile-notary"],
    ["Accepted IDs", "/accepted-ids"],
    ["FAQ", "/faq"],
    ["Add-Ons", "/add-on-services"],
    ["Service Areas", "/service-areas"],
    ["Terms", "/terms"]
  ];

  return (
    <>
      <div className="topbar">Same-day appointments • DFW mobile service • Texas statewide online notarization</div>
      <header className="header">
        <div className="nav container">
          <Link href="/" className="brand">
            <div className="logo">A</div>
            <div>
              <div className="brand-title">A Mobile Notary Service</div>
              <div className="brand-sub">AMNS TX</div>
            </div>
          </Link>
          <nav className="links">
            {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <a className="btn btn-secondary" href={phoneHref}>Call 214-471-5358</a>
            <a className="btn btn-primary" href={bookingLink}>Book Appointment</a>
          </div>
        </div>
      </header>
    </>
  );
}
