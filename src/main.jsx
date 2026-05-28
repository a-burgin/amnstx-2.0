import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, MapPin, FileText, Laptop, Car, ShieldCheck, Clock, Briefcase, Menu, X, ChevronRight, Star, Mail, CalendarDays } from 'lucide-react';
import './styles.css';

const phone = '469-215-5434';
const phoneHref = 'tel:4692155434';
const email = 'info@amnstx.com';
const bookingLink = 'https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s';

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'online', label: 'Online Notary' },
  { id: 'business', label: 'Business' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar">
      <span>State commissioned • Bonded • Insured</span>
      <a href={phoneHref}><Phone size={14}/> {phone}</a>
    </div>
    <header className="header">
      <button className="brand" onClick={() => scrollToId('home')} aria-label="AMNS TX home">
        <span className="mark">A</span><span><strong>AMNS TX</strong><small>A Mobile Notary Service</small></span>
      </button>
      <nav className="desktopNav">{nav.map(n => <button key={n.id} onClick={() => scrollToId(n.id)}>{n.label}</button>)}</nav>
      <div className="desktopActions"><a className="ghostBtn" href={phoneHref}>Call</a><a className="primaryBtn" href={bookingLink} target="_blank" rel="noreferrer">Book Online</a></div>
      <button className="menuBtn" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>
    {open && <div className="mobileNav">{nav.map(n => <button key={n.id} onClick={() => { setOpen(false); scrollToId(n.id); }}>{n.label}</button>)}<a className="primaryBtn" href={phoneHref}>Call {phone}</a></div>}
  </>;
}

function Hero() {
  return <section id="home" className="hero section">
    <div className="heroText">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="pill"><Star size={16}/> Dallas-Fort Worth Mobile & Online Notary</motion.div>
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.05}}>Professional notary service made simple, secure, and convenient.</motion.h1>
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1}}>AMNS TX provides traditional notarizations, mobile appointments across the DFW metroplex, and online notarization options for customers who need a smoother way to get documents completed.</motion.p>
      <div className="ctaRow"><a className="primaryBtn big" href={phoneHref}><Phone size={18}/> Call or Text {phone}</a><a className="secondaryBtn big" href={bookingLink} target="_blank" rel="noreferrer"><CalendarDays size={18}/> Start Online Booking</a></div>
      <div className="trustGrid"><span><CheckCircle/> Valid ID required</span><span><CheckCircle/> No legal advice</span><span><CheckCircle/> Same-day requests welcome</span></div>
    </div>
    <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} className="heroCard">
      <h3>Ready before you book</h3>
      <p>Please have a valid, unexpired government-issued photo ID and make sure your document is complete before the appointment. Do not sign until instructed by the notary.</p>
      <div className="miniList"><span><FileText/> Affidavits</span><span><ShieldCheck/> Acknowledgments</span><span><Briefcase/> Business forms</span><span><Laptop/> Online sessions</span></div>
    </motion.div>
  </section>
}

const services = [
  { icon: FileText, title: 'Traditional Notary', text: 'For customers who need standard Texas notarial acts completed with clear instructions, proper identification, and professional handling.' },
  { icon: Car, title: 'Mobile Notary', text: 'For customers who need a notary to travel to a home, office, hospital, apartment community, or agreed public location in DFW.' },
  { icon: Laptop, title: 'Online Notary', text: 'Remote online notarization for eligible documents, completed through a secure online platform when ID and document requirements are met.' },
  { icon: Briefcase, title: 'Business Support', text: 'Reliable appointment support for apartments, offices, small businesses, and teams that need recurring notary assistance.' },
];

function Services() {
  return <section id="services" className="section"><div className="sectionHead"><span className="eyebrow">Services</span><h2>Choose the option that fits your document and schedule.</h2><p>AMNS TX keeps the process professional from the first message to the final stamp.</p></div><div className="cards">{services.map((s,i) => <motion.div whileHover={{y:-5}} className="card" key={s.title}><s.icon className="cardIcon"/><h3>{s.title}</h3><p>{s.text}</p><button onClick={() => scrollToId(s.title.includes('Online')?'online':'contact')}>Get started <ChevronRight size={16}/></button></motion.div>)}</div></section>
}

function Pricing() {
  return <section id="pricing" className="section pricing"><div className="sectionHead"><span className="eyebrow">Pricing</span><h2>Clear pricing with Texas notary fees and service-based appointment options.</h2><p>Traditional notarization fees follow Texas state-regulated notary fees. Mobile travel, online platform/session fees, urgency, and appointment details may affect the total before you confirm.</p></div>
    <div className="priceGrid">
      <div className="priceCard featured"><h3>Online Notary Bundle</h3><div className="price">$35</div><p>$25 online session fee + $10 first notarized signature when eligible.</p><a className="primaryBtn" href={bookingLink} target="_blank" rel="noreferrer">Book Online</a></div>
      <div className="priceCard"><h3>Traditional Notary</h3><div className="price">State Fee</div><p>Texas regulated notarization fees are charged based on the notarial act and signatures required.</p><a className="secondaryBtn" href={phoneHref}>Ask About My Document</a></div>
      <div className="priceCard"><h3>Mobile Notary</h3><div className="price">Quote</div><p>Travel is quoted before confirmation based on location, timing, and appointment needs.</p><a className="secondaryBtn" href={phoneHref}>Request Mobile Quote</a></div>
    </div>
    <div className="notice"><ShieldCheck/> AMNS TX is not a law firm. We cannot prepare documents, choose the notarial act for you, or provide legal advice.</div>
  </section>
}

function Online() {
 return <section id="online" className="section split"><div><span className="eyebrow">Online Notary</span><h2>Need it done remotely?</h2><p>Online notarization is available for eligible documents when the signer can complete identity verification and appear before the notary by approved audio-video technology.</p><ul className="checkList"><li>Valid government-issued photo ID</li><li>Completed document ready to upload</li><li>Good internet connection and camera access</li><li>Signer must personally appear during the session</li></ul><a className="primaryBtn" href={bookingLink} target="_blank" rel="noreferrer">Start Online Session</a></div><div className="glassBox"><h3>Before your session</h3><p>Do not sign the document early unless the platform or notary specifically instructs you to. If witnesses are required, confirm witness requirements before the appointment.</p></div></section>
}

function Business() {
 return <section id="business" className="section business"><div className="sectionHead"><span className="eyebrow">Business Inquiries</span><h2>Professional support for companies and recurring appointments.</h2><p>Businesses can contact AMNS TX for appointment coordination, document signing support, and mobile or online notary options.</p></div><div className="businessBox"><p>To request service, email or text the business name, contact person, appointment address or online preference, type of document, number of signers, number of notarizations needed, preferred date/time, and whether witnesses are required.</p><div className="ctaRow"><a className="primaryBtn" href={`mailto:${email}`}>Email {email}</a><a className="secondaryBtn" href={phoneHref}>Call/Text {phone}</a></div></div></section>
}

const faqs = [
 ['What do I need for a notarization?', 'Bring a valid, unexpired government-issued photo ID. The document should be complete, and the signer must be present and willing to sign.'],
 ['Can you tell me what type of notarization I need?', 'No. A notary cannot choose the notarial act or give legal advice. The document, receiving agency, or an attorney should tell you what is required.'],
 ['Do you travel?', 'Yes. Mobile appointments are available in the Dallas-Fort Worth area. Travel fees are quoted before the appointment is confirmed.'],
 ['Can I sign before the appointment?', 'Usually no. For most notarizations, the notary must witness the signature or verify the signed statement during the appointment. Ask first before signing.'],
];
function FAQ(){return <section id="faq" className="section"><div className="sectionHead"><span className="eyebrow">FAQ</span><h2>Common questions before booking.</h2></div><div className="faqGrid">{faqs.map(([q,a])=><div className="faq" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div></section>}
function Contact(){return <section id="contact" className="section contact"><div><span className="eyebrow">Contact</span><h2>Book your notary appointment today.</h2><p>Call or text AMNS TX with your document type, location, number of signatures, and preferred appointment time.</p><div className="contactCards"><a href={phoneHref}><Phone/> {phone}</a><a href={`mailto:${email}`}><Mail/> {email}</a><span><MapPin/> Dallas-Fort Worth & statewide online</span></div></div><form className="contactForm" onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:${email}?subject=Notary Appointment Request&body=Name:%0APhone:%0AService Needed:%0ADocument Type:%0ALocation or Online:%0APreferred Date/Time:%0ANumber of Signers:%0ANumber of Notarizations:%0AWitness Needed:%0A`;}}><input placeholder="Your name"/><input placeholder="Phone number"/><select><option>Service needed</option><option>Traditional Notary</option><option>Mobile Notary</option><option>Online Notary</option><option>Business Inquiry</option></select><textarea placeholder="Tell us what document you need notarized and your preferred appointment time."></textarea><button className="primaryBtn">Send Appointment Request</button></form></section>}
function Footer(){return <footer><div><strong>AMNS TX</strong><p>A Mobile Notary Service serving Dallas-Fort Worth and statewide online.</p></div><p>© {new Date().getFullYear()} AMNS TX. Not an attorney. No legal advice.</p></footer>}
function App(){return <><Header/><main><Hero/><Services/><Pricing/><Online/><Business/><FAQ/><Contact/></main><Footer/></>}

createRoot(document.getElementById('root')).render(<App />);
