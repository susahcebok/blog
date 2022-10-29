const textEl = document.getElementById("input-text");
const formEl = document.getElementById('form');
const qrCodeEl = document.getElementById('qr-code');
const qrCodeForEl = document.getElementById('qr-code-for');
const resultEl = document.getElementById('result');
const downloadBtn = document.getElementById('download');
const canvasEl = document.getElementById("img-canvas");
const ctx = canvasEl.getContext("2d");
const MIME_TYPE = "image/png";

const URL = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=350x350&chl=";

window.onload = function() {
  textEl.focus();
};

form.addEventListener('submit', generateQRCode);

function generateQRCode(e) {
  //reset qr code
  qrCodeEl.src = '';
  qrCodeEl.alt = '';
  qrCodeForEl.innerHTML = '';
  resultEl.classList.remove('d-flex');
  resultEl.classList.add('d-none');
  //prevent default
  e.preventDefault();
  if(textEl.value == "" || textEl.value == null) return;
  let reg = new RegExp(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g);
  let res = reg.test(textEl.value);
  if(res == true) {
    textEl.setCustomValidity("Invalid field value.");
    textEl.reportValidity();
    return;
  }
  let input = encodeURI(textEl.value);
  //create qr code
  let qrcodeUrl = URL+input;
  //set qr code and heading
  qrCodeForEl.innerHTML = `QR Code Generated for: <strong>${textEl.value}</strong>`;
  resultEl.classList.remove('d-none');
  resultEl.classList.add('d-flex');
  downloadBtn.addEventListener("click", download);
  qrCodeEl.src = qrcodeUrl;
  qrCodeEl.alt = textEl.value ;
  qrCodeEl.setAttribute('crossorigin', 'anonymous')
  //clear input
  textEl.value = null;
  //focus input
  textEl.focus();
}

function download() {
  ctx.drawImage(qrCodeEl, 0, 0);
  var imgBase64 = canvasEl.toDataURL();
  var imgURL = "data:image/" + imgBase64;
  var dlLink = document.createElement('a');
  dlLink.download = 'qrdownload.png';
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}
