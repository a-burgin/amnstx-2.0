
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
  let label = type === 'online' ? 'Online estimate' : type === 'mobile' ? 'Mobile estimate' : 'Traditional estimate';
  document.getElementById('quoteResult').innerHTML = `<strong>${label}: ${money(total)}</strong><br>Estimated Texas notary fees: ${money(notary)}${type === 'online' ? `<br>Estimated online session fee: ${money(online)}` : ''}${type === 'mobile' ? `<br>Travel/convenience fee entered: ${money(travel)}` : ''}<br>Other fees entered: ${money(extra)}<br><small>This is an estimate only. Final pricing is confirmed before booking.</small>`;
}

function checkDocument() {
  const checks = ['docComplete','notaryWording','signerPresent','validIdDoc','willingAware'];
  const missing = checks.filter(id => !document.getElementById(id).checked).length;
  const result = document.getElementById('docResult');
  if(missing === 0) {
    result.innerHTML = '<strong>Looks ready for review.</strong><br>Your document appears appointment-ready based on this checklist. Final review happens before notarization.';
  } else if(missing <= 2) {
    result.innerHTML = '<strong>Almost ready.</strong><br>Please resolve the unchecked items before booking. Missing wording, incomplete documents, absent signers, or ID issues may delay service.';
  } else {
    result.innerHTML = '<strong>Not ready yet.</strong><br>Contact the document issuer or an attorney if you need help with the document itself. AMNS TX cannot choose wording or provide legal advice.';
  }
}

function checkId() {
  const type = document.getElementById('idType').value;
  const current = document.getElementById('idCurrent').checked;
  const photo = document.getElementById('idPhoto').checked;
  const result = document.getElementById('idResult');
  if(['txdl','uspass','military','foreignpass'].includes(type) && current && photo) {
    result.innerHTML = '<strong>Likely acceptable.</strong><br>This type of current government-issued photo ID is commonly accepted. Final acceptance is confirmed at appointment.';
  } else if(type === 'expired') {
    result.innerHTML = '<strong>May not be acceptable.</strong><br>Expired ID can create issues. Text AMNS TX before booking so we can review options such as credible witness if allowed.';
  } else if(type === 'photo' || type === 'paper' || type === 'none') {
    result.innerHTML = '<strong>Likely not enough by itself.</strong><br>A photo, screenshot, paper-only ID, or no ID usually is not enough. Contact us before booking.';
  } else {
    result.innerHTML = '<strong>Needs review.</strong><br>Text AMNS TX with the ID type before booking. Do not send full ID images unless specifically requested through a secure process.';
  }
}
