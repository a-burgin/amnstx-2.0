
import { PricingCards, AddOns, FAQBlock, CTA } from "../../components/Sections";
import QuoteCalculator from "../../components/QuoteCalculator";
export default function PricingPage(){return <><section className="page-hero"><div className="container"><h1>Pricing</h1><p>Pricing is kept simple and transparent. Notary fees, online session fees, travel, urgency, waiting time, parking, and add-ons may affect the final appointment total.</p></div></section><PricingCards/><section className="section white"><div className="container"><QuoteCalculator/></div></section><AddOns/><FAQBlock/><CTA/></>}
