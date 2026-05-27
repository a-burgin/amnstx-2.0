
"use client";
import { useState } from "react";
const answers = {
  affidavit:"Affidavits can usually be notarized when the signer appears, has valid ID, and the document is complete.",
  poa:"Power of Attorney documents can usually be notarized. The signer must be willing, aware, and able to present valid ID.",
  title:"Vehicle title and transfer documents may be notarized when the form is complete and correct notarial wording is present or supplied.",
  school:"School, enrollment, and parent forms can usually be notarized when the signer has valid ID and the form is complete.",
  travel:"Child travel consent forms can usually be notarized. Some circumstances may require additional parent or guardian information.",
  business:"Business forms can usually be notarized when the signer has valid ID and authority to sign.",
  medical:"Medical forms can often be notarized, but we cannot explain or prepare medical/legal documents.",
  divorce:"Divorce-related documents may be notarized, but we cannot prepare forms, explain legal impact, or choose the notarial act.",
  i9:"I-9 completion is not the same as notarization. We may assist only according to employer instructions and applicable requirements.",
  other:"Many documents can be notarized, but the signer must appear, present valid ID, and the document must be complete."
};
export default function NotaryChecker(){
 const [type,setType]=useState("affidavit");
 return <div className="tool"><h3>Can I Notarize This?</h3><p>Select your document type for a quick general check before booking.</p>
  <label>Document type</label><select value={type} onChange={e=>setType(e.target.value)}>
   <option value="affidavit">Affidavit</option><option value="poa">Power of Attorney</option><option value="title">Vehicle Title / Transfer Form</option><option value="school">School Form</option><option value="travel">Child Travel Consent</option><option value="business">Business Document</option><option value="medical">Medical Form</option><option value="divorce">Divorce Document</option><option value="i9">I-9</option><option value="other">Other Document</option>
  </select><div className="result">✅ {answers[type]}<br/>⚠️ Valid ID is required. The signer must personally appear. We do not provide legal advice.</div></div>
}
