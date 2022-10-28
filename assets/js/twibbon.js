function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#preview").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function drawImage() {

  var twibbon = new Image();
  var picture = new Image();
  var twibbon = document.getElementById('twibbon');
  var picture = document.getElementById('preview');
  var canvas = document.getElementById('twibbonbaker');
  var context = canvas.getContext('2d');
  var x = document.getElementById("fileInput").required;

  canvas.width = 1080;
  canvas.height = 1080;
  context.drawImage(picture, 0, 0, canvas.width, canvas.height);
  context.drawImage(twibbon, 0, 0, canvas.width, canvas.height);

  var hasil = canvas.toDataURL("image/png");
  document.getElementById('preview').src = hasil;

  console.log("Drew!");

  $('#dpwload').css('display', 'none');
  $('#dpwload2').css('display', 'inline-block');
  $('#dpwload2').attr('href', hasil);
}

$("#fileInput").change(function() {
  readURL(this);
});

function uploadImage(_this) {
  var file = _this.files[0];
  var fileType = file["type"];
  var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  if ($.inArray(fileType, validImageTypes) < 0) {
       alert('Please select an image! Fill is not an image')
       _this.form.reset()
  } else {
    alert('All good')
     //do something
  }
}
