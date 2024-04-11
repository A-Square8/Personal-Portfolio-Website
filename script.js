document.getElementById('see-more-about').addEventListener('click', function () {
    var moreContent = document.getElementById('featuredextend');
    var loadButton = document.getElementById('see-more-about');

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        loadButton.textContent = 'Hide';
    } else {
        moreContent.style.display = 'none';
        loadButton.textContent = 'See More';
    }
});


