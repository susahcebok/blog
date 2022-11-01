function lovecalculator(){

  var fname = document.getElementById('fname').value;
  var sname = document.getElementById('sname').value;

   if (fname.length <=2 ) {
   alertify.error('Panjang nama minimal 3 huruf!')
  }
  else if(!isNaN(fname)){
   alertify.error('Nomor tidak diperbolehkan!');
  }
  else if (sname.length <=2 ) {
   alertify.error('Panjang nama minimal 3 huruf!');
  }
  else if(!isNaN(sname)){
   alertify.error('Nomor tidak diperbolehkan!');
  }
  else{
  var lovelevel = Math.random() * 100;
  lovelevel = Math.floor(lovelevel);
//  alertify.success('Tingkat cintamu adalah' + ' ' + lovelevel + '%');
  alertify.alert('Love Calculator', 'Tingkat cintamu adalah' + ' ' + lovelevel + '%', function(){ alertify.success('Ok'); });

  }
  
 }
