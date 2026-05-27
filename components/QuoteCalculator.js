
"use client";
import { useMemo, useState } from "react";
export default function QuoteCalculator(){
 const [service,setService]=useState("mobile"); const [signatures,setSignatures]=useState(1); const [travel,setTravel]=useState(25); const [afterHours,setAfterHours]=useState("no"); const [addons,setAddons]=useState(0);
 const total=useMemo(()=>{const sig=Math.max(1,Number(signatures)||1); const notary=10+Math.max(0,sig-1)*1; const online=service==="online"?25:0; const mobile=service==="mobile"?Number(travel):0; const after=afterHours==="yes"?20:0; return notary+online+mobile+after+Number(addons)},[service,signatures,travel,afterHours,addons]);
 return <div className="tool"><h3>Instant Quote Calculator</h3><p>Estimate your appointment before you book. Final pricing is confirmed before service and may vary by location, urgency, document needs, parking, waiting time, and add-ons.</p>
  <label>Service type</label><select value={service} onChange={e=>setService(e.target.value)}><option value="mobile">Mobile Notary</option><option value="online">Online Notary</option><option value="traditional">Traditional Notary</option></select>
  <label>Number of notarized signatures</label><input type="number" min="1" value={signatures} onChange={e=>setSignatures(e.target.value)}/>
  {service==="mobile"&&<><label>Estimated travel fee</label><select value={travel} onChange={e=>setTravel(e.target.value)}><option value="25">$25 nearby / basic mobile appointment</option><option value="35">$35 standard DFW travel</option><option value="50">$50 extended DFW travel</option><option value="75">$75 urgent or longer-distance travel</option></select></>}
  <label>After-hours or urgent request?</label><select value={afterHours} onChange={e=>setAfterHours(e.target.value)}><option value="no">No</option><option value="yes">Yes, add estimate</option></select>
  <label>Add-on services</label><select value={addons} onChange={e=>setAddons(e.target.value)}><option value="0">No add-ons</option><option value="10">$10 printing or scan-back estimate</option><option value="20">$20 document handling estimate</option><option value="35">$35 expanded add-on estimate</option></select>
  <div className="result">Estimated total:<div className="quote-total">${total}</div><span className="small">Estimate only. Your final quote is confirmed before the appointment.</span></div>
 </div>
}
