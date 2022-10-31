     var shareButton = document.getElementById( "share" );
            if( 'share' in navigator ) {
                shareButton.addEventListener('click', share)
                function share() {
                    navigator.share({
                        title: 'OHASTA.GA',
                        text: 'Just Another A Blog',
                        url: 'https://ohasta.ga/'
                    })
                    .then( () => {
                        alert('Terima kasih telah berbagi!');
                    })
                    .catch( err => {
                        alert('Mengapa Anda tidak membagikan saya?')
                        console.log(`Rupanya ada yang tidak beres...``, err.message);
                    })
                }
            } else {
                alert('Browser Anda tidak didukung, coba dari perangkat seluler atau tablet!')
            }

// const button = document.getElementById('shared');
button.addEventListener('click', function(evt){
  evt.preventDefault();
  if (navigator.share !== undefined) {
    navigator.share({
      title: 'OHASTA.GA - JUST ANOTHER A BLOG',
      url  : 'https://ohasta.ga/'
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.log('An error has occurred'));
  } else {
    console.log('Your browser doesn\'t support Web Share API');
  }
}, false) //
