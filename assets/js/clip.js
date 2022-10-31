document.addEventListener('copy', function(event) {
  var text = window.getSelection().toString() + " Sumber dari https://ohasta.ga/";
  event.clipboardData.setData('text/html', text);
  event.preventDefault();
});
