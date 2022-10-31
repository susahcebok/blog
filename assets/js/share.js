if (!navigator.share) {
    throw new Error('Web Share API is not supported.');
}

const unsupported = document.querySelector('.unsupported');
unsupported.remove();

const share = document.querySelector('.share');

share.onclick = e => {
    navigator.share({
        title: '{% if page.title %}{{ page.title }}{% else %}{{ site.name }} &mdash; {{ site.description }}{% endif %}',
        text: '{% if page.description %}{{ page.description }}{% else %}{{ site.name }}{% endif %}',
        url: '{{ page.title }}{{ page.shortUrl }}'
    });
};

