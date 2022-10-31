if (!navigator.share) {
    throw new Error('Web Share API is not supported.');
}

const unsupported = document.querySelector('.unsupported');
unsupported.remove();

const share = document.querySelector('.share');

share.onclick = e => {
    navigator.share({
        title: 'OHASTA.GA',
        text: 'Just Another A Blog',
        url: ''
    });
};

