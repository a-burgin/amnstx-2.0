
export default function FAQ(){
 const faqs=[["Can you give legal advice?","No. We are not attorneys and cannot explain legal documents, choose forms, or tell you which notarial act you need."],["Do I need ID?","Yes. Every signer must present valid acceptable identification."],["Do you travel?","Yes. Mobile service is available across DFW with applicable travel fees."],["Do you notarize online?","Yes. Online notarization is available for eligible Texas documents."]];
 return <><section className="page-hero"><div className="container"><h1>FAQ</h1><p>Quick answers before you book.</p></div></section><section className="section"><div className="container">{faqs.map(([q,a])=><div className="card" style={{marginBottom:"14px"}} key={q}><h3>{q}</h3><p>{a}</p></div>)}</div></section></>
}
