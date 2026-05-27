
export default function HomePage() {
return (
<div style={{padding:"40px",maxWidth:"1200px",margin:"0 auto"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div>
<h1 style={{fontSize:"20px",marginBottom:"0"}}>A Mobile Notary Service</h1>
<p style={{marginTop:"4px",color:"#666",fontWeight:"700"}}>AMNS TX</p>
</div>
<div style={{display:"flex",gap:"12px"}}>
<a href="tel:2144715358" style={{padding:"14px 18px",background:"#000",color:"#fff",borderRadius:"14px"}}>Call Now</a>
<a href="https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s" style={{padding:"14px 18px",background:"#0b7c94",color:"#fff",borderRadius:"14px"}}>Book Appointment</a>
</div>
</div>

<section style={{padding:"80px 0"}}>
<h1 style={{fontSize:"72px",lineHeight:"0.95",maxWidth:"700px"}}>
Mobile & Online Notary Services Across Texas.
</h1>

<p style={{fontSize:"20px",lineHeight:"1.8",maxWidth:"800px",color:"#5c6570"}}>
A Mobile Notary Service provides professional, convenient notarization services for individuals, families, and businesses throughout Dallas–Fort Worth and statewide online for eligible Texas documents.
</p>

<div style={{display:"grid",gridTemplateColumns":"repeat(2,1fr)",gap:"14px",marginTop:"40px",maxWidth:"700px"}}>
<div>✓ Texas Commissioned Notary</div>
<div>✓ Bonded & Insured</div>
<div>✓ Mobile Notary Across DFW</div>
<div>✓ Statewide Online Notary</div>
</div>
</section>

<section style={{padding:"50px 0"}}>
<h2 style={{fontSize:"42px"}}>Notary services designed around your schedule.</h2>

<p style={{fontSize:"18px",lineHeight:"1.8",color:"#5c6570",maxWidth:"850px"}}>
Whether you need a mobile appointment at your home, office, hospital, apartment community, or a secure online notarization session, we make the process convenient, professional, and easy from start to finish.
</p>

<div style={{display:"grid",gridTemplateColumns":"repeat(3,1fr)",gap:"20px",marginTop:"40px"}}>
<div style={{background:"#fff",padding:"28px",borderRadius:"24px"}}>
<h3>Mobile Notary</h3>
<p>We travel throughout Dallas–Fort Worth for approved appointments at homes, businesses, hospitals, nursing facilities, and public meeting locations.</p>
</div>

<div style={{background:"#fff",padding:"28px",borderRadius:"24px"}}>
<h3>Online Notary</h3>
<p>Complete eligible Texas notarizations online through a secure remote platform with identity verification and live video session.</p>
</div>

<div style={{background:"#fff",padding:"28px",borderRadius:"24px"}}>
<h3>Traditional Notary</h3>
<p>Standard notarization services are available for affidavits, acknowledgments, jurats, school forms, statements, and more.</p>
</div>
</div>
</section>

<section style={{padding:"50px 0"}}>
<h2 style={{fontSize:"42px"}}>Clear pricing. Professional service. No surprises.</h2>

<p style={{fontSize:"18px",lineHeight:"1.8",color:"#5c6570",maxWidth:"850px"}}>
Every appointment is unique. Pricing may vary based on travel distance, appointment type, after-hours requests, or additional services. Any applicable fees are reviewed with you before your appointment is confirmed so you know exactly what to expect.
</p>

<div style={{display:"grid",gridTemplateColumns":"repeat(3,1fr)",gap:"20px",marginTop:"40px"}}>
<div style={{background:"#fff",padding:"28px",borderRadius:"24px"}}>
<h3>Traditional Notary</h3>
<h1>$10+</h1>
<p>Texas regulated notary fees for clients needing standard notarization services.</p>
</div>

<div style={{background:"#fff",padding:"28px",borderRadius:"24px"}}>
<h3>Mobile Notary</h3>
<h1>$35+</h1>
<p>Travel fee plus notarization fee depending on location, urgency, and appointment type.</p>
</div>

<div style={{background:"#fff",padding:"28px",borderRadius:"24px"}}>
<h3>Online Notary</h3>
<h1>$35</h1>
<p>$25 online session fee plus $10 first notarized signature.</p>
</div>
</div>
</section>

<section style={{padding:"50px 0"}}>
<h2 style={{fontSize:"42px"}}>We assist with a wide variety of personal, business, and legal documents.</h2>

<div style={{display:"grid",gridTemplateColumns":"repeat(4,1fr)",gap:"12px",marginTop:"30px"}}>
{["Power of Attorney","Affidavits","Vehicle Title Transfers","Child Travel Consent","School Forms","Medical Documents","Business Documents","Real Estate Documents"].map((item)=>
<div key={item} style={{background:"#fff",padding:"18px",borderRadius:"18px"}}>✓ {item}</div>
)}
</div>
</section>

<section style={{padding:"60px 0",textAlign:"center"}}>
<h2 style={{fontSize:"52px"}}>Let's get your documents notarized.</h2>

<p style={{fontSize:"18px",lineHeight:"1.8",color:"#5c6570",maxWidth:"700px",margin:"0 auto"}}>
A Mobile Notary Service proudly serves Dallas–Fort Worth with mobile notary appointments and offers secure online notarization statewide for eligible Texas documents.
</p>

<div style={{display:"flex",justifyContent:"center",gap:"14px",marginTop:"30px"}}>
<a href="tel:2144715358" style={{padding:"16px 24px",background:"#000",color:"#fff",borderRadius:"16px"}}>Call Now</a>
<a href="https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s" style={{padding:"16px 24px",background:"#0b7c94",color:"#fff",borderRadius:"16px"}}>Book Appointment</a>
</div>
</section>

<div style={{position:"fixed",right:"18px",bottom:"18px",display:"flex",flexDirection:"column",gap:"10px"}}>
<a href="tel:2144715358" style={{background:"#000",color:"#fff",padding:"14px 18px",borderRadius:"999px"}}>Call</a>
<a href="sms:2144715358" style={{background:"#fff",padding:"14px 18px",borderRadius:"999px"}}>Text</a>
<a href="https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s" style={{background:"#0b7c94",color:"#fff",padding:"14px 18px",borderRadius:"999px"}}>Book</a>
</div>
</div>
)
}
