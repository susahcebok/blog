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
  lovelevel = Math.floor(lovelevel)+1;

  document.getElementById("score").innerHTML = fname + ' dan ' + sname + ' Tingkat kecocokan cintamu adalah ' + lovelevel + '%' ;

//  alertify.success('Tingkat cintamu adalah' + ' ' + lovelevel + '%');
  }
  
 }

  document.getElementById('submit').addEventListener('click', function(e) {
		e.preventDefault();
		calculate();
}, false);
