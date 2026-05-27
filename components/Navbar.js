import Link from 'next/link';
import { BUSINESS_NAME, SHORT_NAME, PHONE, PHONE_TEL, BOOKING_LINK } from './config';

const nav = [
  ['Home','/'], ['Services','/services'], ['Pricing','/pricing'], ['Mobile Notary','/mobile-notary'], ['Online Notary','/online-notary'], ['Accepted IDs','/accepted-ids'], ['Add-Ons','/addon-services'], ['Can I Notarize This?','/can-i-notarize-this'], ['Quote','/instant-quote'], ['FAQ','/faq']
];
export default function Navbar(){return <><div className="topbar">Same-day appointments • DFW mobile notary • Texas statewide online notarization</div><header className="nav"><div className="nav-inner"><Link href="/" className="brand"><div className="brand-mark">A</div><div><div className="brand-title">{BUSINESS_NAME}</div><div className="brand-sub">{SHORT_NAME}</div></div></Link><nav className="links">{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><div className="btns"><a className="btn" href={`tel:${PHONE_TEL}`}>Call {PHONE}</a><a className="btn primary" href={BOOKING_LINK}>Book Appointment</a></div></div></header></>}
