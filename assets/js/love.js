function lovecalculator(){

  var fname = document.getElementById('fname').value;
  var sname = document.getElementById('sname').value;

   if (fname.length <=2 ) {
   alert('Panjang nama minimal 3 huruf!')
  }
  else if(!isNaN(fname)){
   alert('Nomor tidak diperbolehkan!');
  }
  else if (sname.length <=2 ) {
   alert('Panjang nama minimal 3 huruf!');
  }
  else if(!isNaN(sname)){
   alert('Nomor tidak diperbolehkan!');
  }
  else{
  var lovelevel = Math.random() * 100;
  lovelevel = Math.floor(lovelevel);
  alert('Tingkat cintamu adalah' + ' ' + lovelevel + '%');
  }
  
 }
