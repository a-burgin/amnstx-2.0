
"use client";
import { useMemo, useState } from "react";

export default function QuoteCalculator(){
  const [service,setService]=useState("mobile");
  const [sigs,setSigs]=useState(1);
  const [travel,setTravel]=useState(25);
  const [after,setAfter]=useState("no");

  const total = useMemo(()=>{
    const notary = 10 + Math.max(0, Number(sigs)-1) * 1;
    const online = service === "online" ? 25 : 0;
    const mobile = service === "mobile" ? Number(travel) : 0;
    const afterFee = after === "yes" ? 20 : 0;
    return notary + online + mobile + afterFee;
  },[service,sigs,travel,after]);

  return (
    <div className="tool">
      <h3>Instant Quote Calculator</h3>
      <p>Get a simple estimate. Final pricing may vary by document, distance, parking, urgency, and appointment details.</p>

      <label>Service type</label>
      <select value={service} onChange={e=>setService(e.target.value)}>
        <option value="mobile">Mobile Notary</option>
        <option value="online">Online Notary</option>
        <option value="traditional">Traditional Notary</option>
      </select>

      <label>Number of notarized signatures</label>
      <input type="number" min="1" value={sigs} onChange={e=>setSigs(e.target.value)} />

      {service === "mobile" && (
        <>
          <label>Estimated travel fee</label>
          <select value={travel} onChange={e=>setTravel(e.target.value)}>
            <option value="25">$25 nearby / basic travel</option>
            <option value="35">$35 standard DFW travel</option>
            <option value="50">$50 extended travel</option>
            <option value="75">$75 urgent / longer distance</option>
          </select>
        </>
      )}

      <label>After-hours or urgent?</label>
      <select value={after} onChange={e=>setAfter(e.target.value)}>
        <option value="no">No</option>
        <option value="yes">Yes, add estimate</option>
      </select>

      <div className="result">
        Estimated total:
        <div className="quote-total">${total}</div>
        <small>Estimate only. Confirm final quote before appointment.</small>
      </div>
    </div>
  )
}
