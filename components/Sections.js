
import Link from "next/link";
import NotaryChecker from "./NotaryChecker";
import QuoteCalculator from "./QuoteCalculator";

const bookingLink = "https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s";

export function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="badge">Same-day appointments available</div>
          <h1>Mobile & Online Notary Services Across Texas.</h1>
          <p>Professional notarization for Dallas-Fort Worth clients in person, plus secure remote online notary appointments statewide.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+12144715358">Call Now</a>
            <a className="btn btn-secondary" href={bookingLink}>Book Appointment</a>
          </div>
          <div className="trust-grid">
            <div><span className="check">✓</span>Texas Commissioned Notary</div>
            <div><span className="check">✓</span>Bonded & Insured</div>
            <div><span className="check">✓</span>Mobile DFW Service</div>
            <div><span className="check">✓</span>Remote Online Notary</div>
          </div>
        </div>
        <div className="step-card">
          <div className="step-inner">
            <div className="eyebrow">Book in 3 steps</div>
            {[
              ["1","Tell us your document type","Affidavit, POA, vehicle form, business form, or other notarizable document."],
              ["2","Choose Mobile or Online","We travel in DFW or meet you online through a secure notary platform."],
              ["3","Bring valid ID","Signer must appear, understand the document, and present acceptable identification."]
            ].map(([n,t,b])=>(
              <div className="step" key={n}>
                <div className="num">{n}</div>
                <div><h3>{t}</h3><p>{b}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesCards(){
  const cards = [
    ["Mobile Notary","We travel to homes, offices, hospitals, apartments, and agreed public locations across DFW. Travel fees may apply."],
    ["Online Notary","Remote online notarization for eligible Texas documents through secure video session options."],
    ["Traditional Notary","Standard notarizations for common forms including affidavits, acknowledgments, jurats, and statements."]
  ];
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Services</div>
          <h2>Notary services</h2>
          <p>Choose the option that fits your document and schedule.</p>
        </div>
        <div className="grid-3">{cards.map(([title,body])=><div className="card" key={title}><div className="icon">✓</div><h3>{title}</h3><p>{body}</p></div>)}</div>
      </div>
    </section>
  )
}

export function PricingCards(){
  const cards = [
    ["Traditional","TX regulated fees","Best for clients who can meet locally and only need document notarization."],
    ["Mobile","Travel fee + notary fee","Travel fee depends on location, distance, urgency, parking, and appointment time."],
    ["Online","$25 session + $10 signature","Online session fee plus first notarized signature. Final pricing depends on document needs."]
  ];
  return (
    <section className="section white" id="pricing">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Pricing</div>
          <h2>Simple pricing</h2>
          <p>Texas notary fees apply for notarized signatures. Mobile travel and online session fees may be added depending on service type.</p>
        </div>
        <div className="grid-3">{cards.map(([title,price,body])=><div className="card" key={title}><h3>{title}</h3><div className="price">{price}</div><p>{body}</p></div>)}</div>
      </div>
    </section>
  )
}

export function AddOns(){
  const addOns = ["Printing services","Scan backs","Document delivery","Witness coordination when permitted","After-hours appointments","Expedited appointments","Hospital visits","Nursing facility visits","Jail visits"];
  return (
    <section className="section" id="addons">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Add-On Services</div>
          <h2>More than a basic stamp.</h2>
          <p>Add-on options help clients complete appointments faster and with fewer delays.</p>
        </div>
        <div className="pill-grid">{addOns.map(item=><div className="pill" key={item}>✓ {item}</div>)}</div>
      </div>
    </section>
  )
}

export function ToolsSection(){
  return (
    <section className="section white" id="tools">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Helpful Tools</div>
          <h2>Check your document and estimate your price.</h2>
          <p>These tools make the website easier to use and help clients book with confidence.</p>
        </div>
        <div className="tool-wrap">
          <NotaryChecker />
          <QuoteCalculator />
        </div>
      </div>
    </section>
  )
}

export function AcceptedIdPreview(){
  const ids = ["Current driver license or state ID","U.S. passport or passport card","Military ID or approved government ID","Signer must be present and willing","Document should be complete before notarization"];
  return (
    <section className="section dark" id="accepted-ids">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Accepted IDs</div>
          <h2>Know what to bring before your appointment.</h2>
          <p>Every signer must personally appear and present acceptable identification.</p>
        </div>
        <div className="grid-3">{ids.map(item=><div className="card" key={item}>✓ {item}</div>)}</div>
      </div>
    </section>
  )
}

export function ServiceAreas(){
  const cities = ["Dallas","Irving","Fort Worth","Arlington","Plano","Grand Prairie","Mesquite","Garland","Richardson","Duncanville","Carrollton","Farmers Branch"];
  return (
    <section className="section" id="areas">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Service Areas</div>
          <h2>Mobile notary service across DFW.</h2>
          <p>City pages help customers find you when searching for mobile notary services nearby.</p>
        </div>
        <div className="pill-grid">{cities.map(city=><div className="pill" key={city}>Mobile Notary {city}</div>)}</div>
      </div>
    </section>
  )
}

export function CTA(){
  return (
    <section className="section white">
      <div className="container">
        <div className="card" style={{textAlign:"center",padding:"42px"}}>
          <div className="eyebrow">Ready to book?</div>
          <h2 style={{fontSize:"40px",margin:"0 0 12px"}}>Call now or schedule your appointment online.</h2>
          <p>Serving Dallas-Fort Worth in person and Texas statewide online.</p>
          <div className="hero-actions" style={{justifyContent:"center"}}>
            <a className="btn btn-primary" href="tel:+12144715358">Call Now</a>
            <a className="btn btn-cyan" href={bookingLink}>Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  )
}
