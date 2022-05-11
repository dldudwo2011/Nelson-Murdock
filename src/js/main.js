const iconToggle = document.querySelector('.menu-icon');

iconToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open-nav');
});