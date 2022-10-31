const button = document.getElementById('shared');
button.addEventListener('click', function(evt){
  evt.preventDefault();
  if (navigator.share !== undefined) {
    navigator.share({
      title: 'OHASTA.GA - JUST ANOTHER A BLOG',
      url  : '{{ site.url }}{{ post.url }}'
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.log('An error has occurred'));
  } else {
    console.log('Your browser doesn\'t support Web Share API');
  }
}, false)
