document.addEventListener('copy', function(event) {
  var text = window.getSelection().toString() + " Dibuat oleh Ferry Ayunda - https://ohasta.ga/";
  event.clipboardData.setData('text/html', text);
  event.preventDefault();
});
