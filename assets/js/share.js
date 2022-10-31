if (!navigator.share) {
    throw new Error('Web Share API is not supported.');
}

const unsupported = document.querySelector('.unsupported');
unsupported.remove();

const share = document.querySelector('.share');

share.onclick = e => {
    navigator.share({
        title: 'New Web Platform APIs',
        text: 'Check out this Web Share API Demo!',
        url: 'https://arnellebalane.com/web-share-api'
    });
};
