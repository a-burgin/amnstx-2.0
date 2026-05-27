'use client';
import { useState } from 'react';
const info={
 affidavit:'Usually notarizable. Signer must appear, show valid ID, and sign willingly.',
 poa:'Usually notarizable. The document must be complete and the signer must understand what they are signing.',
 vehicle:'Usually notarizable when the form has a notarial certificate or requires notarization.',
 travel:'Usually notarizable. Some forms may need both parents, extra witnesses, or supporting ID.',
 divorce:'Some divorce documents can be notarized, but the notary cannot explain or prepare legal forms.',
 i9:'I-9 is not notarized as a notarial act in Texas. A notary may act only as an authorized representative if allowed by the employer.',
 other:'Send the document name or a photo of the notary section so we can confirm what type of appointment may be needed.'
};
export default function NotaryChecker(){const [doc,setDoc]=useState('affidavit');return <div className="card"><h2>Can I Notarize This?</h2><p className="muted">Choose the closest document type. This does not replace legal advice.</p><div className="field"><label>Document type</label><select value={doc} onChange={e=>setDoc(e.target.value)}><option value="affidavit">Affidavit</option><option value="poa">Power of Attorney</option><option value="vehicle">Vehicle title / vehicle form</option><option value="travel">Child travel consent</option><option value="divorce">Divorce document</option><option value="i9">I-9 employment verification</option><option value="other">Other document</option></select></div><div className="result">{info[doc]}</div><div className="list" style={{marginTop:18}}><div className="check">✓ Valid ID is required.</div><div className="check">✓ Signer must personally appear before the notary.</div><div className="check">✓ Document must be complete before notarization.</div><div className="check">⚠ We are not attorneys and cannot give legal advice.</div></div></div>}
