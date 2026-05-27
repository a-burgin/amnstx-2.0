import { BOOKING_LINK, PHONE_TEL } from './config';
export default function FloatingButtons(){return <div className="float"><a className="btn primary" href={`tel:${PHONE_TEL}`}>Call</a><a className="btn cyan" href={`sms:${PHONE_TEL}`}>Text</a><a className="btn primary" href={BOOKING_LINK}>Book</a></div>}
