document.querySelector("#submit").addEventListener("click", (event) => {
  const uri =
    "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=350x350&chl=";
  event.preventDefault();
  url = uri + document.querySelector("#url").value;
  window.location.href = url;
  let urlValue = url.value;
  if (!inputValue) {
    return alert("Please enter a text or URL!");

});

