
const bookingLink="https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s";
export default function Footer(){
 return <footer className="footer"><div className="container footer-grid">
  <div><h2>A Mobile Notary Service</h2><p>AMNS TX provides mobile notary service across Dallas-Fort Worth and remote online notarization statewide in Texas.</p></div>
  <div><h3>Contact</h3><p>Phone: 214-471-5358<br/>Email: info@amnstx.com</p></div>
  <div><h3>Book</h3><p><a className="btn btn-cyan" href={bookingLink}>Book Appointment</a></p></div>
 </div></footer>
}
