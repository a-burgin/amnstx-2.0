
"use client";
import { useState } from "react";

const data = {
  affidavit: "Affidavits can usually be notarized if the signer appears, has valid ID, and the document is complete.",
  poa: "Power of Attorney documents can usually be notarized. The signer must be alert, willing, and able to present valid ID.",
  title: "Vehicle title and transfer forms can often be notarized when the correct notarial certificate is present or provided.",
  school: "School and enrollment forms can usually be notarized if the signer has valid ID and the form is complete.",
  travel: "Child travel consent forms can usually be notarized. Some situations may require additional parent/guardian information.",
  divorce: "Divorce-related documents may be notarized, but we cannot prepare forms or give legal advice.",
  i9: "I-9 completion is not the same as notarization. We may assist only in the capacity allowed by the requesting employer’s instructions.",
  other: "Many documents can be notarized, but the signer must appear, provide valid ID, and the document must be complete."
};

export default function NotaryChecker(){
  const [type,setType]=useState("affidavit");
  return (
    <div className="tool">
      <h3>Can I Notarize This?</h3>
      <p>Select the document type for a quick general check before booking.</p>
      <label>Document type</label>
      <select value={type} onChange={e=>setType(e.target.value)}>
        <option value="affidavit">Affidavit</option>
        <option value="poa">Power of Attorney</option>
        <option value="title">Vehicle Title</option>
        <option value="school">School Form</option>
        <option value="travel">Child Travel Form</option>
        <option value="divorce">Divorce Document</option>
        <option value="i9">I-9</option>
        <option value="other">Other Document</option>
      </select>
      <div className="result">
        ✅ {data[type]}<br/>
        ⚠️ Valid ID required. Signer must personally appear. We cannot give legal advice.
      </div>
    </div>
  )
}
