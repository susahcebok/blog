document.addEventListener('copy', function(event) {
  var text = window.getSelection().toString() + " brought from http://example.com/test";
  event.clipboardData.setData('text/html', text);
  event.preventDefault();
});
