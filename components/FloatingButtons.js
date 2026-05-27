
const bookingLink = "https://app.bluenotary.us/business/register?referralCode=5ujkkgs0s";

export default function FloatingButtons() {
  return (
    <div className="float-buttons">
      <a className="float-call" href="tel:+12144715358">Call</a>
      <a className="float-text" href="sms:+12144715358">Text</a>
      <a className="float-book" href={bookingLink}>Book</a>
    </div>
  );
}
