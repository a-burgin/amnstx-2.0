
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if(menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
});

function money(n) { return '$' + Number(n || 0).toFixed(2); }

function calculateQuote() {
  const type = document.getElementById('quoteType').value;
  const sigs = Math.max(1, parseInt(document.getElementById('sigCount').value || '1'));
  const add = Math.max(0, parseInt(document.getElementById('addSigCount').value || '0'));
  const travel = Math.max(0, parseFloat(document.getElementById('travelFee').value || '0'));
  const extra = Math.max(0, parseFloat(document.getElementById('extraFee').value || '0'));
  let notary = sigs * 10 + add * 1;
  let online = type === 'online' ? sigs * 25 : 0;
  let total = notary + online + (type === 'mobile' ? travel : 0) + extra;
  let label = type === 'online' ? 'Online estimate' : 'Mobile estimate';
  document.getElementById('quoteResult').innerHTML = `<strong>${label}: ${money(total)}</strong><br>Estimated notarial act fees: ${money(notary)}${type === 'online' ? `<br>Estimated online/session fee: ${money(online)}` : ''}${type === 'mobile' ? `<br>Travel/convenience fee entered: ${money(travel)}` : ''}<br>Other fees entered: ${money(extra)}<br><small>This is an estimate only. Final pricing is confirmed before booking.</small>`;
}

function checkDocument() {
  const checks = ['docComplete','notaryWording','signerPresent','validIdDoc','willingAware','witnessReady'];
  const missing = checks.filter(id => !document.getElementById(id).checked).length;
  const result = document.getElementById('docResult');
  if(missing === 0) {
    result.innerHTML = '<strong>Your checklist looks ready.</strong><br>Please call 214-471-5358 or text 469-215-5434 so AMNS TX can confirm availability, document type, ID, witnesses, location, and final pricing.';
  } else if(missing <= 2) {
    result.innerHTML = '<strong>Almost ready, but please review the unchecked items first.</strong><br>Missing wording, incomplete documents, absent signers, ID issues, or witness issues may delay or prevent notarization. Text AMNS TX before booking.';
  } else {
    result.innerHTML = '<strong>This appointment may not be ready yet.</strong><br>Please resolve the unchecked items before booking. If the issue is legal wording or document choice, contact the document issuer or an attorney.';
  }
}

function checkId() {
  const type = document.getElementById('idType').value;
  const current = document.getElementById('idCurrent').checked;
  const photo = document.getElementById('idPhoto').checked;
  const result = document.getElementById('idResult');
  const standard = ['txdl','uspass','military','othergov','foreignpass'];
  if(standard.includes(type) && current && photo) {
    result.innerHTML = '<strong>Acceptable identity method for review.</strong><br>A current government-issued photo ID is generally acceptable for Texas notarization. Final review happens at the appointment.';
  } else if(type === 'personally') {
    result.innerHTML = '<strong>Personal knowledge may be allowed.</strong><br>If the signer is personally known to the notary, Texas law may allow identity to be established that way. Contact AMNS TX before booking.';
  } else if(type === 'credible') {
    result.innerHTML = '<strong>Credible witness may be an option.</strong><br>If the signer lacks acceptable ID, Texas law may allow a credible witness who can swear or affirm the signer’s identity. Contact AMNS TX before booking to review requirements.';
  } else if(['expired','photo','paper','schoolwork','none'].includes(type)) {
    result.innerHTML = '<strong>This is not acceptable by itself.</strong><br>Expired ID, photos/screenshots, temporary paper ID alone, student/work ID, or no ID may prevent notarization. The signer may need acceptable government ID, a credible witness, or another legal identity method allowed by Texas law.';
  } else {
    result.innerHTML = '<strong>Needs review before booking.</strong><br>Text AMNS TX with the ID type before scheduling. Do not send full ID images unless specifically requested through a secure process.';
  }
}
